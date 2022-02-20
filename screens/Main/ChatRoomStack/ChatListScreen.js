import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import ChatRoomItem from "../../../components/Chat/ChatRoomItem";
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, ChatRoomUser } from "../../../AWS/src/models";
import styled from "styled-components";
import colors from "../../../colors";

const RoomsView = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const ChatListScreen = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [authUser, setAuthUser] = useState(undefined);
  const [userImgUri, setUserImgUri] = useState("");
  const navigation = useNavigation();

  //- 로그인 유저정보 가져오기.
  useEffect(() => {
    const fetchAuthUser = async () => {
      await Auth.currentAuthenticatedUser().then(setAuthUser);
    };
    fetchAuthUser();
  }, []);

  //- 채팅방들 가져오기.
  useEffect(() => {
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      const chatRooms = await DataStore.query(ChatRoom);
      // .filter(
      //   (ChatRoomUser) => ChatRoomUser.user.id === authUser.attributes.sub //! 채팅방기능 테스트 하는동안에는 주석처리할 것!
      // )
      // .map((ChatRoomUser) => ChatRoomUser.chatroom);

      setChatRooms(chatRooms);
    };

    // const chatRooms = await DataStore.query(ChatRoomUser);
    // setChatRooms(chatRooms);
    // };
    fetchChatRooms();
  }, []);
  console.log(chatRooms);

  if (!authUser) {
    return <ActivityIndicator />;
  }

  return (
    <RoomsView>
      <FlatList
        data={chatRooms}
        // ? { item } 은 chatRoomsData 안에 있는 원소들(item)을 가리킨다!
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        // ? 아래와 같은 표현식도 가능하다!
        // renderItem={({ item: chatRoom }) => <ChatRoomItem chatRoom={chatRoom} />}
      />
    </RoomsView>
  );
};

const styles = StyleSheet.create({
  logOutContainer: {
    backgroundColor: "skyblue",
    height: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatListScreen;
