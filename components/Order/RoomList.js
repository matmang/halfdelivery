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
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    // console.log(categoryID);
    fetchChatRooms();
  }, []);
  // }, [categoryID]);

  const fetchChatRooms = async () => {
    // const all_ChatRooms = (await DataStore.query(ChatRoom)).filter((e) => e.newMessages === 1105);
    // const all_ChatRooms = await DataStore.query(ChatRoom);
    const all_ChatRooms = (await DataStore.query(ChatRoom)).filter((item) => item._deleted === null);
    const all_ChatRoomUsers = (await DataStore.query(ChatRoomUser)).filter((item) => item._deleted === null);

    const ChatRoom_ids = all_ChatRooms.map((item) => item.id);
    const ChatRoomUsers_ids = all_ChatRoomUsers.map((item) => item.id);

    const pairArray = []; // ? {키: ChatRoom 아이디, 밸류: (대응되는) ChatRoomUser 객체} 가 원소들로 들어간다
    console.log(all_ChatRooms);

    // * 챗룸id 와 대응되는 챗룸유저id 를 찾아서 grouped_pairArray로 정리하는 과정.
    for (let index in ChatRoom_ids) {
      let ChatRoom_id = ChatRoom_ids[index];
      let ChatRoomUser = all_ChatRoomUsers.find((ChatRoomUser) => ChatRoomUser.chatroom.id === ChatRoom_id);

      let pair = { ChatRoom_id: ChatRoom_id, ChatRoomUser: ChatRoomUser };
      pairArray.push(pair);
    }

    const grouped_pairArray = groupBy(pairArray, "ChatRoom_id");
    console.log("grouped_pairArray: ", grouped_pairArray);

    //TODO: 챗룸유저id 가 2개(인원수)미만인 채팅방만 고른다.
    //TODO: ...
    setServerData(all_ChatRooms);
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
  //     setServerData(chatRooms);
  //   };

  //   fetchChatRooms();
  // }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={serverData}
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
