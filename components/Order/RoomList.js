import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RoomItem from "./RoomItem";
import MatchingRooms from "../../sampleData/MatchingRooms";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order, Store } from "../../AWS/src/models";

const RoomList = ({ categoryID }) => {
  const [serverData, setServerData] = useState([]);

  // useEffect(() => {
  //   // console.log(categoryID);
  //   fetchChatRooms();
  // }, []);
  // // }, [categoryID]);

  // const fetchChatRooms = async () => {
  //   const fetchedChatRooms = await DataStore.query(ChatRoom);
  //   setServerData(fetchedChatRooms);
  // };

  useEffect(() => {
    // ? 채팅방들 가져오기.
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      //! 내가 만든 방들은 보여주면 안 된다.
      const chatRooms = (await DataStore.query(ChatRoomUser))
        .filter((ChatRoomUser) => ChatRoomUser.user.id !== authUser.attributes.sub)
        .map((ChatRoomUser) => ChatRoomUser.chatroom)
        .filter((chatroom) => chatroom.matchingInfo !== null);

      // const filteredChatRooms = chatRooms.filter((element) => element.matchingInfo === null);
      setServerData(chatRooms);
    };

    fetchChatRooms();
  }, []);

  return (
    <View style={styles.root}>
      <FlatList data={serverData} renderItem={({ item }) => <RoomItem chatRoomInfo={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5E6E7",
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});

export default RoomList;
