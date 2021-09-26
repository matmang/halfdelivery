import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import colors from "../../colors";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "../../AWS/src/models";
import Auth from "@aws-amplify/auth";

export default ({ message }) => {
  const [user, setUser] = useState(undefined);
  const [isMe, setIsMe] = useState(false);

  useEffect(() => {
    // ? 메시지의 userID 값을 불러옴.
    DataStore.query(User, message.userID).then(setUser);
  }, []);

  useEffect(() => {
    const checkIfMe = async () => {
      if (!user) {
        return;
      }
      const authUser = await Auth.currentAuthenticatedUser();
      // ? 내 계정의 id 값과 같으면, 이 메시지는 나의 메시지임.
      setIsMe(user.id === authUser.attributes.sub);
    };
    checkIfMe();
  }, [user]);

  if (!user) {
    return <ActivityIndicator />;
  }

  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={{ color: isMe ? "white" : "black" }}>{message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  leftContainer: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    backgroundColor: colors.mainPink,
    marginLeft: 10,
    marginRight: "auto",
    borderTopLeftRadius: 0,
  },
  rightContainer: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    backgroundColor: colors.mainBlue,
    // ?  marginLeft: "auto" => 자동으로 왼쪽 margin 이 최대로 생김.
    marginLeft: "auto",
    marginRight: 10,
    borderTopRightRadius: 0,
  },
});
