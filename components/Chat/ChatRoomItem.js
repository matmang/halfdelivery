import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { ChatRoomUser, User, Message } from "../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";

export default ({ chatRoom }) => {
  // const [users, setUsers] = useState([]); // ? All users in this chatRoom
  const [user, setUser] = useState(null); // ? The display user
  const [lastMessage, setLastMessage] = useState(undefined); // ? The display user

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsers = async () => {
      // ? 지금 채팅방과 연결된 ChatRoomUser 를 찾기 위해서
      // ? 지금 채팅방의 id(chatRoom.id) 와 같은 ChatRoomUser.id 를 골라낸다.
      // ? 이후, 각각의 ChatRoomUser 와 연결된 user 의 목록을 가져온다.
      const fetchedUsers = (await DataStore.query(ChatRoomUser))
        .filter((ChatRoomUser) => ChatRoomUser.chatroom.id === chatRoom.id)
        .map((ChatRoomUser) => ChatRoomUser.user);

      //? All users in this chatRoom
      // setUsers(fetchedUsers);

      // ? Display user 설정.
      // ? 내가 아닌 다른 유저를 Display 한다. (나 == authUser)
      const authUser = await Auth.currentAuthenticatedUser();

      setUser(
        fetchedUsers.find((user) => user.id !== authUser.attributes.sub) || null
      );
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    if (!chatRoom.chatRoomLastMessageId) {
      return;
    }
    DataStore.query(Message, chatRoom.chatRoomLastMessageId).then(
      setLastMessage
    );
  }, []);

  const onPress = () => {
    navigation.navigate("ChatRoomStack", {
      screen: "ChatRoomScreen",
      params: {
        id: chatRoom.id,
      },
    });

    // navigation.navigate("ChatRoomScreen", {
    //   id: chatRoom.id,
    // });
  };

  // ? user 정보 불러오는동안 로딩 바.
  if (!user) {
    return <ActivityIndicator />;
  }
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {/* //? chatRoom.newMessages 가 존재해야, badge 를 표출한다. */}
      {/* 앞에 !! 느낌표 2개는 리액트 네이티브 issue 해결을 위해서 추가 한 것임. */}
      {!!chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.nameTimeRow}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{lastMessage?.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {/* //? ellipsizeMode => ...생략점 위치 선택가능! head or tail. */}
          {lastMessage?.content}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  nameTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  text: {
    color: "grey",
  },
  badgeContainer: {
    backgroundColor: "skyblue",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute", //? 위치..
    left: 45, // ? constraint 레이아웃 같은 느낌!
    top: 10,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
  },
});
