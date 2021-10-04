import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
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

  const changeTimeStamp = (message_createdAt) => {
    // const KR_TIME_DIFF = 32400000; // ? 9시간.
    const UTCms = Date.parse(message_createdAt);
    return new Date(UTCms).toLocaleString("ko-KR");
  };

  if (!user) {
    return <ActivityIndicator />;
  }

  let changedTimeStamp = "";
  if (message.createdAt === undefined) {
    changedTimeStamp = "방금전";
  } else {
    changedTimeStamp = changeTimeStamp(message.createdAt);
    // console.log("교정 시간", changeTimeStamp(message.createdAt), typeof changeTimeStamp(message.createdAt));
  }

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <View style={{ flexDirection: "row" }}>
        {/* 상대방 화면만 이미지, 이름 표출 */}
        {!isMe && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />
            <Text style={styles.imageContainerText}>{user.name}</Text>
          </View>
        )}

        {/* 메시지 생성 시각 | 나*/}
        {isMe && (
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={[styles.timestampText]}>{changedTimeStamp}</Text>
          </View>
        )}

        {/* 메시지 내용 */}
        <View style={[styles.textContainer, isMe ? styles.rightTextContainer : styles.leftTextContainer]}>
          <Text style={{ color: isMe ? "white" : "black" }}>{message.content}</Text>
        </View>

        {/* 메시지 생성 시각 | 상대방*/}
        {!isMe && (
          <View style={{ justifyContent: "flex-end" }}>
            <Text style={[styles.timestampText]}>{changedTimeStamp}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    padding: 5,
    margin: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  leftContainer: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    marginLeft: 10,
    marginRight: "auto",
    borderTopLeftRadius: 0,
  },
  rightContainer: {
    // ! 여기다가 조건문 쓰면 안 된다. 조건문은 Style을 사용하는 곳에서 써야 한다.
    // ?  marginLeft: "auto" => 자동으로 왼쪽 margin 이 최대로 생김.
    marginLeft: "auto",
    marginRight: 10,
    borderTopRightRadius: 0,
  },

  textContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: "70%",
  },
  leftTextContainer: {
    backgroundColor: colors.mainPink,
    borderTopLeftRadius: 0,
  },
  rightTextContainer: {
    backgroundColor: colors.mainBlue,
    borderTopRightRadius: 0,
  },

  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  imageContainer: {
    height: 50,
    width: 50,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainerText: {
    fontSize: 10,
    fontWeight: "bold",
    // numberOfLines: 1,
  },

  timestampText: {
    fontSize: 7,
    color: "black",
  },
});
