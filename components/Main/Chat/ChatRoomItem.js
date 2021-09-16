import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default (props) => {
  const chatRoom = props.chatRoom;
  const user = chatRoom.users[1];
  return (
    <View style={styles.container}>
      <Image
        source={
          user.imageLocal
          // { uri: user.imageUri }
        }
        style={styles.image}
      />

      {/* //? chatRoom.newMessages 가 존재해야, badge 를 표출한다. */}
      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.nameTimeRow}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode="tail">
          {/* //? ellipsizeMode => 말줄임표(...) 시작위치 선택가능! head or tail. */}
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </View>
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
