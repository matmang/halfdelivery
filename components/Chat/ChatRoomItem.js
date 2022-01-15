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

const DividingLine = styled.View`
  width: 100%;
  height: 4px;
  background-color: ${colors.unAccent};
`;

const ChatRoomBox = styled.Pressable`
  width: 100%;
  height: 92px;
  flex-direction: row;
  align-items: center;
  background-color: lightgreen;
`;

const ImgBox = styled.View`
  width: 80px;
  height: 72px;
  border-radius: 10px;
  background-color: ${colors.unAccent};
  margin-left: 24px;
`;

const Img40 = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 45px;
  border-width: 2px;
`;

const Img35 = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  border-width: 2px;
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
  color: ${colors.coal};
  margin-left: auto;
`;

export default ({ chatRoom }) => {
  // const [users, setUsers] = useState([]); // ? All users in this chatRoom
  const [user, setUser] = useState(null); // ? The display user
  const [lastMessage, setLastMessage] = useState(undefined); // ? The display user
  const [persons, setPersons] = useState(4);
  //! 임시값
  const user_imageUri =
    "https://media.istockphoto.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612";

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
            <Img40
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 5,
                marginTop: 5,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img40
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 32,
                marginTop: 24,
                borderColor: "red",
                backgroundColor: "orange",
                position: "absolute",
              }}
            />
          </ImgBox>
        )}

        {/* //- 3명일때 배치 */}
        {persons === 3 && (
          <ImgBox>
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 8,
                marginTop: 5,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 38,
                marginTop: 5,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 22.5,
                marginTop: 30,
                borderColor: "red",
                backgroundColor: "orange",
                position: "absolute",
              }}
            />
          </ImgBox>
        )}

        {/* //- 4명일때 배치 */}
        {persons === 4 && (
          <ImgBox>
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 8,
                marginTop: 5,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 38,
                marginTop: 5,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 8,
                marginTop: 30,
                borderColor: "black",
                position: "absolute",
              }}
            />
            <Img35
              source={{
                // uri: user.imageUri,
                uri: user_imageUri,
              }}
              style={{
                marginLeft: 38,
                marginTop: 30,
                borderColor: "red",
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
              style={{ marginLeft: 12, marginBottom: 6 }}
            />
            <TimeStamp>{changeTimeStamp(lastMessage?.createdAt)}</TimeStamp>
          </InfoView>
          <InfoView style={{ marginTop: 8 }}>
            <InfoText style={{ marginLeft: 3, color: colors.coal }}>
              1인 배달비
            </InfoText>
            <InfoText style={{ marginLeft: 4, color: colors.coal }}>
              <NunitoText style={{ color: colors.coal }}>
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
