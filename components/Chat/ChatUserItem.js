import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser } from "../../AWS/src/models";

const ChatUserItem = ({ user }) => {
  const navigation = useNavigation();

  const onPress = async () => {
    // ? Chat Room 만들기.
    const newChatRoom = await DataStore.save(new ChatRoom({ newMessages: 0 }));

    // ? Authenticated User 와 Chat Room 을 연결하기.
    const authUser = await Auth.currentAuthenticatedUser();
    // ? DataStore 의 User 모델에서 authUser.attributes.sub 값과 일치하는 값만 가져온다.
    const dbUser = await DataStore.query(User, authUser.attributes.sub);
    await DataStore.save(
      new ChatRoomUser({
        user: dbUser,
        chatroom: newChatRoom,
      })
    );

    // ? Clicked User 와 Chat Room 을 연결하기.
    // "user" 가 바로 props 로 넘어온 user 이므로, Clicked user 이다.
    await DataStore.save(
      new ChatRoomUser({
        user,
        chatroom: newChatRoom,
      })
    );

    // ! 계정의 imageUri 가 비워져 있으면, 왠진 모르겠지만, 새 채팅방으로 이동 하지 않는다.
    navigation.navigate("ChatRoomScreen", { id: newChatRoom.id });

    // TODO: If tere is already to chat room between these 2 users,
    // TODO: then redirect to the existing chat room.
    // TODO: Otherwise, create a new chatroom with these users.
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {/* //? user.newMessages 가 존재해야, badge 를 표출한다. */}
      {user.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}></Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.nameTimeRow}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}></Text>
        </View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail"></Text>
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

export default ChatUserItem;
