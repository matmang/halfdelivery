import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order } from "../../../AWS/src/models";
import { useSelector, useDispatch } from "react-redux";
import orderReducer from "../../../redux/orderSlice";
import QuantitySelector from "../../../components/Matching/QuantitySelector";

const SetMatchingTimeScreen = (props) => {
  const [time, setTime] = useState(10);
  const [persons, setPersons] = useState(2);

  const orderSiceStates = useSelector((state) => state.orderReducer);
  console.log("orderSiceStates: ", orderSiceStates);
  const firstMenu = orderSiceStates.menus[0];
  console.log("firstMenu: ", firstMenu);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  // ? 시간이랑 인원수 바뀌면 redux store 업데이트.
  useEffect(() => {
    // dispatch(reduxSetTime(time));
    // dispatch(reduxSetPersons(persons));
    // console.log("스토어네임:", storeName);
  }, [time, persons]);

  // ? 호스트의 메뉴로 OrderMenu 생성.
  const createOrderMenu = async () => {
    const QUANTITY = -1; //! 임시값.
    const PAYMENT_AMOUNT = -1000; //! 임시값.

    const authUser = await Auth.currentAuthenticatedUser();

    const newOrderMenu = await DataStore.save(
      new OrderMenu({
        menu: firstMenu.menuInfo.menu,
        price: firstMenu.menuInfo.price,
        quantity: QUANTITY,
        userID: authUser.attributes.sub,
      })
    );
  };

  // ? 호스트가 고른 식당으로, Order 생성.
  const createOrder = async () => {
    const msTime = Date.now();
    const AWSDateTime = new Date(msTime).toISOString();
    const newOrder = await DataStore.save(
      new Order({
        store: orderSiceStates.storeName,
        // orderDate: AWSDateTime, // ! orderDate는 ERD 에서 삭제하는게...
        paymentAmount: PAYMENT_AMOUNT,
      })
    );
  };

  // ? Chat Room 생성.
  const createChatRoom = async () => {
    const newChatRoom = await DataStore.save(
      // TODO: 담아야 할 데이터들:
      // ? 1. 유저,
      // ? 2. 매장이름,
      // ? 3. (호스트) 유저가 고른 메뉴정보
      new ChatRoom({
        newMessages: 1007,
        matchingInfo: {
          storeName: orderSiceStates.storeName,
          menus: orderSiceStates.menus,
          roomInfo: { time: time, persons: persons },
        },
      })
    );
    // ? Authenticated User 와 Chat Room 을 연결하기.
    const authUser = await Auth.currentAuthenticatedUser();
    // ? DataStore 의 User 모델에서 authUser.attributes.sub 값과 일치하는 값만 가져온다.
    const dbUser = await DataStore.query(User, authUser.attributes.sub);
    await DataStore.save(
      new ChatRoomUser({
        user: dbUser,
        chatroom: newChatRoom,
      })
    );

    // ! 계정 imageUri 가 비워져 있으면, 왠진 모르겠지만, 새 채팅방으로 이동 하지 않는다.
    navigation.navigate("ChatRoomScreen", {
      id: newChatRoom.id,
      // matchingRoomInfo: { time, persons },
    });

    // TODO: If tere is already to chat room between these 2 users,
    // TODO: then redirect to the existing chat room.
    // TODO: Otherwise, create a new chatroom with these users.
  };

  return (
    <SafeAreaView style={styles.root}>
      {/* 매칭 요청 시간 */}
      <View style={styles.setTimeView}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>매칭 요청 시간</Text>
        </View>
        <View style={styles.rightContainer}>
          <Picker
            selectedValue={time}
            onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="10분" value={10} />
            <Picker.Item label="7분" value={7} />
            <Picker.Item label="5분" value={5} />
          </Picker>
        </View>
      </View>

      {/* 매칭 희망 인원 */}
      <View style={styles.setPersonsView}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>매칭 희망 인원</Text>
        </View>
        <View style={styles.rightContainer}>
          <QuantitySelector quantity={persons} setQuantity={setPersons} />
        </View>
      </View>

      <View style={styles.buttonView}>
        <View style={styles.buttonContainer}>
          <Button
            title="매칭방 만들기"
            onPress={() => {
              createOrderMenu();
              createOrder();
              createChatRoom();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
  },
  setTimeView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    flex: 3,
    width: "auto",
    alignItems: "flex-end",
  },
  picker: {
    width: "50%",
  },
  setPersonsView: {
    flex: 1,
    flexDirection: "row",
  },
  buttonView: {
    flex: 1,
    // alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "80%",
    borderWidth: 1,
    borderRadius: 80,
    marginBottom: 30,
  },
});

export default SetMatchingTimeScreen;
