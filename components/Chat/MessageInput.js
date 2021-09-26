import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { Auth, DataStore } from "aws-amplify";
import { Message, ChatRoom } from "../../AWS/src/models";

const MessageInput = ({ chatRoom }) => {
  const [message, setMessage] = useState("");

  // ? 메시지 보내는 함수
  const sendMessage = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const newMessage = await DataStore.save(
      new Message({
        content: message,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id,
      })
    );
    updateLastMessage(newMessage);
    setMessage("");
    console.log("sending:", message);
  };

  const updateLastMessage = async (newMessage) => {
    // ? Data in DataStore is NOT Mutable. 그래서 cpoyOf 쓰는 거임!
    DataStore.save(
      ChatRoom.copyOf(chatRoom, (updatedChatRoom) => {
        updatedChatRoom.LastMessage = newMessage;
      })
    );
  };

  //
  const clickedWithoutMessages = () => {
    console.log("Clicked without Messages");
  };
  const onPress = () => {
    message ? sendMessage() : clickedWithoutMessages();
  };

  return (
    // ? KeyboardAvoidingView 를 사용해야 키보드가 표출될떄 화면을 안 가린다.. 참조: https://reactnative.dev/docs/keyboardavoidingview
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <SimpleLineIcons
            name="emotsmile"
            size={24}
            color="grey"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage} // ? 이 코드는 아래코드와 "똑같다".
            // ?   onChangeText={(newMessage) => setMessage(newMessage)}
            placeholder="메시지를 입력해주세요!"
            autoCorrect={false}
            autoCapitalize={false}
          />
          <Feather name="camera" size={24} color="grey" style={styles.icon} />
          <MaterialCommunityIcons
            name="microphone"
            size={24}
            color="grey"
            style={styles.icon}
          />
        </View>
        {/* // ? Pressable 은 View 와 대치 가능하다. 오직, onPress 유무 차이만 있음! */}
        <Pressable
          style={[
            styles.buttonContainer,
            // ? message 가 빈스트링 이면 false 임.
            { backgroundColor: message ? "pink" : "lightgrey" },
          ]}
          onPress={onPress}
        >
          {/* 메시지 보내기 버튼 */}
          <Feather
            name="arrow-up"
            size={30}
            color={message ? "blue" : "grey"}
            style={styles.icon}
          />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageInput;
