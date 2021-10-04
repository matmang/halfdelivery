import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import ChatRoomItem from "../../../components/Chat/ChatRoomItem";

// ? To use AWS Amplify ㅎㅎ
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, ChatRoomUser } from "../../../AWS/src/models";
import { useNavigation } from "@react-navigation/core";

const _MatchingListScreen = () => {
  const [chatRooms, setChatRooms] = useState([]);
  const [category, setCategory] = useState("한식");
  const navigation = useNavigation();

  useEffect(() => {
    // ? 채팅방들 가져오기.
    const fetchChatRooms = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      //! 내가 만든 방들은 보여주면 안 된다.
      const chatRooms = (await DataStore.query(ChatRoomUser))
        .filter((ChatRoomUser) => ChatRoomUser.user.id !== authUser.attributes.sub)
        .map((ChatRoomUser) => ChatRoomUser.chatroom)
        .filter((chatroom) => chatroom.matchingInfo !== null);

      // const filteredChatRooms = chatRooms.filter((element) => element.matchingInfo === null);
      setChatRooms(chatRooms);
    };

    fetchChatRooms();
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.selectCategoryList}>
        <Text style={styles.title}>매칭 카테고리 선택</Text>
        <View style={styles.rootCategoryButtons}>
          <Button title="한식" onPress={() => setCategory("한식")} />
          <Button title="중식" onPress={() => setCategory("중식")} />
          <Button title="일식" onPress={() => setCategory("일식")} />
          <Button title="양식" onPress={() => setCategory("양식")} />
          <Button title="카페" onPress={() => setCategory("카페")} />
        </View>
      </View>

      <Button
        title="ㄱㄱ"
        onPress={() => {
          console.log("챗룸쓰", chatRooms);
        }}
      />

      <View style={styles.list}>
        <View style={{ marginTop: 5, marginBottom: 5 }}>
          <Text style={styles.title}>매칭 요청 리스트</Text>
          <Header />
        </View>

        <FlatList
          data={chatRooms}
          // ? { item } 은 chatRoomsData 안에 있는 원소들(item)을 가리킨다!
          renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
          // ? 아래와 같은 표현식도 가능하다!
          // renderItem={({ item: chatRoom }) => <ChatRoomItem chatRoom={chatRoom} />}
        />
        {/* <FlatList data={targetData} renderItem={({ item }) => <RoomItem item={item} />} /> */}
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="매칭방 만들기" onPress={() => navigation.navigate("SelectStoreScreen")} />
      </View>
    </View>
  );
};

const Header = () => {
  return (
    <View style={styles.headerRoot}>
      <View style={styles.categoryContainer}>
        <Text style={styles.headerText}>카테고리</Text>
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.headerText}>음식점</Text>
      </View>
      <View style={styles.minPriceContainer}>
        <Text style={styles.headerText}>필요금액</Text>
      </View>
      <View style={styles.personsContainer}>
        <Text style={styles.headerText}>남은인원</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {},
  logOutContainer: {
    backgroundColor: "skyblue",
    height: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "70%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  selectCategoryList: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "auto",
    alignSelf: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  rootCategoryButtons: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    // alignContent: "center",
    justifyContent: "space-evenly",
  },
  root: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    marginVertical: 1, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  headerRoot: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  categoryContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  storeContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  minPriceContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  personsContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 0.8,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default _MatchingListScreen;
