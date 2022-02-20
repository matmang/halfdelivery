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
import styled from "styled-components";
import colors from "../../colors";
import { MaterialIcons } from "@expo/vector-icons";
import { changeTimeStamp } from "./Message";
import {
  OnMatching,
  Matched,
  Failed,
  OnTransfering,
  Transferred,
} from "../Statuses";
import { width, height } from "../../utils";

export default ({ chatRoom }) => {
  // const [users, setUsers] = useState([]); // ? All users in this chatRoom
  const [user, setUser] = useState(null); // ? The display user
  const [lastMessage, setLastMessage] = useState(undefined); // ? The display user
  const [persons, setPersons] = useState(2);
  //! 임시값
  const user_imageUri =
    "https://images.mktw.net/im-433977?width=700&height=487";

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

      // setUser(
      //   fetchedUsers.find((user) => user.id !== authUser.attributes.sub) || null
      // );

      setUser(fetchedUsers);
    };

    fetchUsers();
  }, []);
  console.log(user);

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

  console.log("user", user);
  return (
    <View>
      <DividingLine />
      <ChatRoomBox onPress={onPress}>
        {/* //- 2명일때 배치 */}
        {persons === 2 && (
          <ImgBox>
            <Img38
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 31,
                marginTop: height * 27,
                // borderColor: "black",
                borderWidth: 0,
                backgroundColor: "orange",
                position: "absolute",
              }}
            />
            <Img38
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 3,
                marginTop: height * 7,
                borderColor: colors.primaryBlue,
                position: "absolute",
              }}
            />
          </ImgBox>
        )}

        {/* //- 3명일때 배치 */}
        {persons === 3 && (
          <ImgBox>
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 4,
                marginTop: height * 4,
                borderColor: colors.primaryBlue,
                position: "absolute",
              }}
            />
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 36,
                marginTop: height * 4,
                // borderColor: "black",
                borderWidth: 0,
                position: "absolute",
              }}
            />
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 20,
                marginTop: height * 36,
                // borderColor: "red",
                borderWidth: 0,
                backgroundColor: "orange",
                position: "absolute",
              }}
            />
          </ImgBox>
        )}

        {/* //- 4명일때 배치 */}
        {persons === 4 && (
          <ImgBox>
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 4,
                marginTop: height * 4,
                borderColor: colors.primaryBlue,
                position: "absolute",
              }}
            />
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 36,
                marginTop: height * 4,
                // borderColor: "black",
                borderWidth: 0,
                position: "absolute",
              }}
            />
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 4,
                marginTop: height * 36,
                // borderColor: "black",
                borderWidth: 0,
                position: "absolute",
              }}
            />
            <Img32
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: width * 36,
                marginTop: height * 36,
                // borderColor: "black",
                borderWidth: 0,
                backgroundColor: "orange",
                position: "absolute",
              }}
            />
          </ImgBox>
        )}

        <NonImgBox>
          <InfoView>
            <StoreText>
              가게명
              {/* {storeInfo.store} */}
            </StoreText>
            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color="black"
              style={{ marginLeft: width * 12, marginBottom: 6 }}
            />
            <TimeStamp>{changeTimeStamp(lastMessage?.createdAt)}</TimeStamp>
          </InfoView>
          <InfoView style={{ marginTop: height * 8 }}>
            <InfoText
              style={{ marginLeft: width * 3, color: colors.oxfordGray }}
            >
              1인 배달비
            </InfoText>
            <InfoText
              style={{ marginLeft: width * 4, color: colors.oxfordGray }}
            >
              <NunitoText style={{ color: colors.oxfordGray }}>
                10,000
                {/* {storeInfo.minOrdPrice.toLocaleString("ko-KR")} */}
              </NunitoText>
              원
            </InfoText>
          </InfoView>
        </NonImgBox>

        <OnMatching style={{ marginRight: 16, marginBottom: 24 }} />
      </ChatRoomBox>
    </View>
  );
};

const styles = StyleSheet.create({
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

const DividingLine = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${colors.blueGray2};
`;

const ChatRoomBox = styled.Pressable`
  width: 100%;
  height: 92px;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
`;

const ImgBox = styled.View`
  width: ${width * 72}px;
  height: ${height * 72}px;
  border-radius: 16px;
  background-color: ${colors.blueGray2};
  margin-left: 24px;
`;

const Img38 = styled.Image`
  width: ${width * 38}px;
  height: ${height * 38}px;
  border-radius: 38px;
  border-width: 1.5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Img32 = styled.Image`
  width: ${width * 32}px;
  height: ${height * 32}px;
  border-radius: 32px;
  border-width: 1.5px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
`;

const NonImgBox = styled.View`
  margin-left: 20px;
  flex: 1;
  width: auto;
  height: 92px;
  justify-content: center;
  background-color: white;
  margin-right: 12px;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const StoreText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  font-family: "noto-regular";
  margin-bottom: 3px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "noto-regular";
`;

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  text-align: right;
`;

const TimeStamp = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  color: ${colors.oxfordGray};
  margin-left: auto;
`;
