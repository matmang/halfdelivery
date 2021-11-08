import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ChatRoomItem from "../../../components/Chat/ChatRoomItem";

// ? To use AWS Amplify ㅎㅎ
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, ChatRoomUser } from "../../../AWS/src/models";

const ChatListScreen = () => {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    // ? 채팅방들 가져오기.
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      const chatRooms = (await DataStore.query(ChatRoomUser))
        .filter((ChatRoomUser) => ChatRoomUser.user.id === authUser.attributes.sub)
        .map((ChatRoomUser) => ChatRoomUser.chatroom);

      setChatRooms(chatRooms);
    };
    fetchChatRooms();

    return () => {};
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRooms}
        // ? { item } 은 chatRoomsData 안에 있는 원소들(item)을 가리킨다!
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        // ? 아래와 같은 표현식도 가능하다!
        // renderItem={({ item: chatRoom }) => <ChatRoomItem chatRoom={chatRoom} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
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
