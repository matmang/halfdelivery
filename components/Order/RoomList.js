import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import RoomItem from "./RoomItem";
import MatchingRooms from "../../sampleData/MatchingRooms";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order, Store } from "../../AWS/src/models";
import AppLoading from "expo-app-loading";

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

const RoomList = ({ categoryID }) => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    // console.log(categoryID);
    fetchChatRooms();
  }, []);
  // }, [categoryID]);

  // ? Listening to new chatrooms. https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/
  // ? In Real Time!
  // ? 새 채팅방이 생길때마다 렌더링 하기위해서, messages state를 수정하자.
  useEffect(() => {
    // ? 그러기 위해서 우선, chatrooms 모델을 구독, subscription 해야 한다.
    const subscription = DataStore.observe(ChatRoom).subscribe((ChatRoom) => {
      console.log("ChatRoom 섭스", ChatRoom);
      // console.log(msg.model, msg.opType, msg.element);

      // ? 새 챗룸 추가!
      // if (ChatRoom.model === ChatRoomModel && ChatRoom.opType === "INSERT") {
      if (ChatRoom.opType === "INSERT") {
        // * setState 에 함수를 넣으면, 그 함수의 첫번쨰 인자는 현재 state를 갖는다.
        setChatRooms((existingChatRooms) => [ChatRoom.element, ...existingChatRooms]);
      }
    });
    // ? 죽을땐 unsubscribe
    return () => subscription.unsubscribe();
  }, []);

  const fetchChatRooms = async () => {
    const authUser = await Auth.currentAuthenticatedUser();

    // const chatRooms_for_ids = (await DataStore.query(ChatRoom)).filter((e) => e.newMessages === 1105);
    // const chatRooms_for_ids = await DataStore.query(ChatRoom);
    const chatRooms_for_ids = (await DataStore.query(ChatRoom)).filter((ChatRoom) => ChatRoom._deleted === null);

    const all_chatRoomUsers = (await DataStore.query(ChatRoomUser)).filter(
      (ChatRoomUser) => ChatRoomUser._deleted === null
    );

    // ? 내가 만든 챗룸을 제외한, 챗룸 불러오기. (챗룸유저를 이용한다)
    const all_chatRooms = (await DataStore.query(ChatRoomUser))
      .filter((ChatRoomUser) => ChatRoomUser.user.id !== authUser.attributes.sub)
      .map((ChatRoomUser) => ChatRoomUser.chatroom)
      .filter((chatroom) => chatroom.matchingInfo !== null);

    const chatRoom_ids = all_chatRooms.map((item) => item.id);
    const ChatRoomUsers_ids = all_chatRoomUsers.map((item) => item.id);
    const pairArray = []; // ? {키: ChatRoom 아이디, 밸류: (대응되는) ChatRoomUser 객체} 가 원소들로 들어간다

    // console.log("all_chatRooms", all_chatRooms);
    console.log("아이디", chatRoom_ids);

    // * 챗룸id 와 대응되는 챗룸유저id 를 찾아서 grouped_pairObject로 정리하는 과정.
    for (let index in chatRoom_ids) {
      let chatRoom_id = chatRoom_ids[index];
      let ChatRoomUser = all_chatRoomUsers.find((ChatRoomUser) => ChatRoomUser.chatroom.id === chatRoom_id);

      let pair = { chatRoom_id: chatRoom_id, ChatRoomUser: ChatRoomUser };
      pairArray.push(pair);
    }

    const grouped_pairObject = groupBy(pairArray, "chatRoom_id");
    const keysArray = Object.keys(grouped_pairObject);
    const except_chatRoom_ids = [];
    for (let index in keysArray) {
      let key = keysArray[index];
      let valueArray = grouped_pairObject[key];
      let length = valueArray.length;

      if (length > 1) {
        except_chatRoom_ids.push(key);
      }
    }

    // ? 챗룸유저id 가 2개(인원수)미만인 채팅방만 고른다.
    const fit_chatRooms = all_chatRooms.filter((chatroom) => chatroom.id !== except_chatRoom_ids.values);
    // console.log("fit_chatRooms", fit_chatRooms);

    setChatRooms(fit_chatRooms);
  };

  // useEffect(() => {
  //   // ? 채팅방들 가져오기.
  //   const fetchChatRooms = async () => {
  //     const authUser = await Auth.currentAuthenticatedUser();

  //     //! 내가 만든 방들은 보여주면 안 된다.
  //     const chatRooms = (await DataStore.query(ChatRoomUser))
  //       .filter((ChatRoomUser) => ChatRoomUser.user.id !== authUser.attributes.sub)
  //       .map((ChatRoomUser) => ChatRoomUser.chatroom)
  //       .filter((chatroom) => chatroom.matchingInfo !== null);

  //     // const filteredChatRooms = chatRooms.filter((element) => element.matchingInfo === null);
  //     setChatRooms(chatRooms);
  //   };

  //   fetchChatRooms();
  // }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => (item !== undefined ? <RoomItem chatRoomInfo={item} /> : <ActivityIndicator />)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5E6E7",
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
});

export default RoomList;
