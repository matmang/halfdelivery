import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, FlatList, Text } from "react-native";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../../AWS/src/models";
import ChatUserItem from "../../../components/Chat/ChatUserItem";

const ChatUsersScreen = () => {
  // ? Keep Our Users
  const [users, setUsers] = useState([]); // 타입스크립트 ==> useState<User[]>([]); 라고 작성해야 함.

  // useEffect(() => {
  //   // ? Query Users from AWS Amplify
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers);
  //   };
  //   fetchUsers();
  // }, []);

  // ? 위 코드는 아래처럼 간단하게 쓸 수 있다.
  useEffect(() => {
    DataStore.query(User).then(setUsers);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
        // ? { item } 은 chatRoomsData 안에 있는 원소들(item)을 가리킨다!
        renderItem={({ item }) => <ChatUserItem user={item} />}
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

export default ChatUsersScreen;
