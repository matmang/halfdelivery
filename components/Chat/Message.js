import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import colors from "../../colors";
import { User } from "../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";
import { S3Image } from "aws-amplify-react-native";
import styled from "styled-components";

const MsgBox = styled.View`
  /* padding: 10px; */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  padding-bottom: 5px;

  margin-right: 32px;
  margin-left: auto;
  margin-top: 5px;
  margin-bottom: 5px;

  border-radius: 6px;
  width: auto;
  max-width: 100%;
  background: ${(props) => (props.isMe ? colors.mainBlue : "white")};
`;

const ImageView = styled.View`
  margin-bottom: ${(props) =>
    props.isMsg
      ? 10
      : 0}px; //! 추후 삭제예정.. 이미지와 텍스트는 따로 표출해야함
`;
const Msg = styled.Text`
  font-size: 15px;
  font-family: "noto-regular";
  color: ${(props) => (props.isMe ? "white" : colors.mainBlue)};
`;

const TimeStamp = styled.Text`
  font-size: 12px;
  font-family: "nunito-regular";
  color: #9c9c9c;
  /* margin-left: auto; */
  margin-right: 6px;
`;

export default ({ message }) => {
  const [user, setUser] = useState(undefined);
  const [isMe, setIsMe] = useState(false);
  const { width } = useWindowDimensions();

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
    // return new Date(UTCms).toLocaleString("ko-KR");
    const time = new Date(UTCms);
    let hour = time.getHours();
    let when = "";
    if (hour < 12) {
      when = " AM";
    } else {
      console.log("dd");
      hour = hour - 12;
      when = " PM";
    }
    hour.toString();

    let minute = time.getMinutes();
    if (minute < 10) {
      minute.toString();
      minute = "0" + minute;
    } else {
      minute.toString();
    }

    return hour + ":" + minute + when;
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
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {/* 상대방 화면만 이미지, 이름 표출 */}
        {!isMe && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: user.imageUri }} style={styles.image} />

            <Text
              style={styles.imageContainerText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {user.name}
            </Text>
          </View>
        )}

        {/* 메시지 생성 시각 | 나*/}
        {isMe && (
          <View style={{ justifyContent: "flex-end" }}>
            <TimeStamp>{changedTimeStamp}</TimeStamp>
          </View>
        )}

        {/* 메시지 내용 */}
        <MsgBox isMe={isMe}>
          {message.image && (
            <ImageView isMsg={message.content}>
              <S3Image
                imgKey={message.image}
                style={{ width: width * 0.3, aspectRatio: 3 / 4 }}
                resizeMode="cover"
              />
            </ImageView>
          )}

          {/* 느낌표 두개 연산자(!!)는 Boolean 으로 형 변환해준다 */}
          {!!message.content && <Msg isMe={isMe}>{message.content}</Msg>}
        </MsgBox>

        {/* 메시지 생성 시각 | 상대방*/}
        {!isMe && (
          <View style={{ justifyContent: "flex-end" }}>
            <TimeStamp>{changedTimeStamp}</TimeStamp>
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

  leftTextContainer: {
    backgroundColor: "#FFFFFF",
  },
  rightTextContainer: {
    backgroundColor: colors.mainBlue,
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
});
