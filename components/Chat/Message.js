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

const ImgBox = styled.View`
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
  padding-bottom: 4px;

  margin-right: ${(props) => (props.isMe ? "32px" : "auto")};
  margin-left: ${(props) => (props.isMe ? "auto" : "15px")};
  margin-top: 5px;
  margin-bottom: 5px;

  width: auto;
  max-width: ${(props) => props.width * 0.61}%;
  background: ${colors.mainBlue};
  border-radius: 6px;
`;

const MsgBox = styled.View`
  /* padding: 10px; */
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
  padding-bottom: 5px;

  margin-right: ${(props) => (props.isMe ? "32px" : "auto")};
  margin-left: ${(props) => (props.isMe ? "auto" : "15px")};
  margin-top: 5px;
  margin-bottom: 5px;

  width: auto;
  max-width: ${(props) => props.width * 0.61}%;
  background: ${(props) => (props.isMe ? colors.mainBlue : "white")};
  border-radius: 6px;

  border-width: ${(props) => (props.isMe ? 1.5 : 1.5)}px;
  border-color: ${(props) => (props.isMe ? colors.mainBlue : colors.mainBlue)};
`;

const MsgText = styled.Text`
  font-size: 15px;
  line-height: 17px;
  font-family: "noto-regular";
  color: ${(props) => (props.isMe ? "white" : colors.mainBlue)};
`;

const TimeStamp = styled.Text`
  font-size: 12px;
  font-family: "nunito-regular";
  color: #9c9c9c;
  /* margin-left: auto; */
  margin-right: ${(props) => (props.isMe ? 6 : 0)}px;
  margin-left: ${(props) => (props.isMe ? 0 : 6)}px;
`;

const ProfileImg = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 45px;
`;

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

const Message = ({ message }) => {
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
        {!isMe && <ProfileImg source={{ uri: user.imageUri }} />}

        {/* 메시지 생성 시각 | 나*/}
        {isMe && (
          <View style={{ justifyContent: "flex-end" }}>
            <TimeStamp isMe={isMe}>{changedTimeStamp}</TimeStamp>
          </View>
        )}
        <View>
          {/* 이미지 메시지 */}
          {message.image && (
            <ImgBox isMe={isMe} width={width}>
              <S3Image
                imgKey={message.image}
                style={{ width: width * 0.3, aspectRatio: 3 / 4 }}
                resizeMode="cover"
              />
            </ImgBox>
          )}

          {/* 텍스트 메시지 */}
          {!!message.content && (
            <MsgBox isMe={isMe} width={width}>
              {/* 느낌표 두개 연산자(!!)는 Boolean 으로 형 변환해준다 */}
              <MsgText isMe={isMe}>{message.content}</MsgText>
            </MsgBox>
          )}
        </View>

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
});

export { Message, changeTimeStamp };
export default Message;
