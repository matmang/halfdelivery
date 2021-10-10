import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import colors from "../../../colors";
import { Auth, DataStore } from "aws-amplify";
import { Store, Menu, User, ChatRoom, ChatRoomUser, Order } from "../../../AWS/src/models";

const TAB_BAR_HEIGHT = 49;
const HEADER_HEIGHT = 60;
const ADDITIONAL_HEIGHT = 20;

const TestScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const msTime = Date.now();
  const AWSDateTime = new Date(msTime).toISOString();
  console.log(AWSDateTime);

  // ? ChatRoom 생성.
  const createChatRoom = () => {
    const newChatRoom = DataStore.save(
      // TODO: 담아야 할 데이터들:
      // ? 1. 유저,
      // ? 2. 매장이름,
      // ? 3. (호스트) 유저가 고른 메뉴정보
      new Order({
        chatroomID: "test",
        orderDate: "2021-10-10T09:38:43.037Z",
        paymentAmount: -2000,
        store: "test",
        userID: "d51b9bca-4583-407d-b5b5-5affddd6f207",
      })

      // new User({
      //   name: "testsssssssssssss",
      //   imageUri: "dasdsadasdasdsa.asdasdas",
      // })
    );
    // setChatRoomID(newChatRoom.id);

    // // ? Authenticated User 와 ChatRoom 을 연결하기.
    // const authUser = await Auth.currentAuthenticatedUser();
    // // ? DataStore 의 User 모델에서 authUser.attributes.sub 값과 일치하는 값만 가져온다.
    // const dbAuthUser = await DataStore.query(User, authUser.attributes.sub);
    // await DataStore.save(
    //   new ChatRoomUser({
    //     user: dbAuthUser,
    //     chatroom: newChatRoom,
    //   })
    // );

    // // ! 계정 imageUri 가 비워져 있으면, 왠진 모르겠지만, 새 채팅방으로 이동 하지 않는다.
    // navigation.navigate("ChatRoomScreen", {
    //   chatRoomID: newChatRoom.id,
    //   matchingInfo: matchingInfo,
    //   orderID: orderID,
    //   // matchingRoomInfo: { time, persons },
    // });
    // // TODO: If tere is already to chat room between these 2 users,
    // // TODO: then redirect to the existing chat room.
    // // TODO: Otherwise, create a new chatroom with these users.
  };

  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>테스트</Text>
        <Button
          title="test"
          onPress={() => {
            createChatRoom();
            console.log("dd");
          }}
        />
      </View>
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "space-evenly",
    //   }}
    // >
    //   <Text style={{ fontSize: 40, fontWeight: "bold" }}>테스트 스크린</Text>

    //   {/* 테스트 */}
    //   <Pressable style={styles.logOutContainer} onPress={() => {}}>
    //     <Text>테스트 실행</Text>
    //   </Pressable>
    // </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 100,
    marginBottom: 100,
    marginVertical: 10,
    paddingTop: 10,
  },
  logOutContainer: {
    backgroundColor: colors.mainPink,
    height: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  text: {
    paddingHorizontal: 5,
  },
});

export default TestScreen;
