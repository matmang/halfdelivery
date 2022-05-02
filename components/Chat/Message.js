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
import { color } from "react-native-reanimated";

const changeTimeStamp = (message_createdAt) => {
  // const KR_TIME_DIFF = 32400000; //? 9시간
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

const Message = ({ message, masterId }) => {
  const [user, setUser] = useState({});
  const [isMe, setIsMe] = useState(false);
  const [isMaster, setIsMaster] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    //? 메시지의 userID 값을 불러옴
    DataStore.query(User, message.userID).then(setUser);
  }, []);

  useEffect(() => {
    const check_isMe_isMaster = async () => {
      if (!user) {
        return;
      }
      const authUser = await Auth.currentAuthenticatedUser();
      //? 내 계정의 id 값과 같으면, 이 메시지는 나의 메시지임
      setIsMe(user.id === authUser.attributes.sub);
      //? 채팅방의 master 의 id 값(masterId)과 같으면, 이 메시지는 마스터의 것임
      setIsMaster(user.id === masterId);
    };
    check_isMe_isMaster();
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
        {!isMe && (
          <ProfileView>
            <ProfileImg
              source={
                user.imageUri
                  ? { uri: user.imageUri }
                  : require("../../assets/images/default_prf_img.png")
              }
              isMaster={isMaster}
            />
          </ProfileView>
        )}

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
            <MsgBox isMe={isMe} width={width} isMaster={isMaster}>
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
    //?  marginLeft: "auto" => 자동으로 왼쪽 margin 이 최대로 생김.
    marginLeft: "auto",
    marginRight: 10,
    borderTopRightRadius: 0,
  },
});

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
  background: ${colors.primaryBlue};
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
  background: ${(props) => (props.isMe ? colors.primaryBlue : "white")};
  border-radius: 14px;
  border-bottom-left-radius: ${(props) => (props.isMe ? "14px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.isMe ? "0px" : "14px")};

  border-width: ${(props) =>
    (props.isMaster && "1.5px") ||
    (props.isMe && "1.5px") ||
    (!props.isMaster && !props.isMe && "1.5px")};

  border-color: ${(props) =>
    (props.isMaster && colors.primaryBlue) ||
    (props.isMe && colors.primaryBlue) ||
    (!props.isMaster && !props.isMe && colors.steelBlue2)};
`;

const MsgText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  font-family: "gothica1-regular";
  color: ${(props) => (props.isMe ? "white" : "black")};
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
  width: 38px;
  height: 38px;
  border-radius: 38px;
  border-width: ${(props) => (props.isMaster ? "1.5px" : "0px")};
  border-color: ${colors.primaryBlue};
`;

//! 프로필이미지 그림자 효과를 주기위해 필요함
const ProfileView = styled.View`
  /* background-color: red; */
  /* width: 38px;
  height: 38px;
  border-radius: 38px; */
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

export { Message, changeTimeStamp };
export default Message;
