import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order } from "../../../AWS/src/models";
import { useSelector, useDispatch } from "react-redux";
import orderReducer from "../../../redux/orderSlice";
import QuantitySelector from "../../../components/Matching/QuantitySelector";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

const SetMatchingTimeScreen = (props) => {
  const [time, setTime] = useState(10);
  const [persons, setPersons] = useState(2);
  // const [createdChatRoom, setCreatedChatRoom] = useState({});
  let createdChatRoom = {};
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const storeInfo = props.route.params.storeInfo;
  const orderReducerState = useSelector((state) => state.orderReducer);

  const matchingInfo = {
    storeNmenus: { store: storeInfo, menus: orderReducerState.map((e) => e.menuInfo) },
    timeNpersons: { time, persons },
  };

  // console.log(matchingInfo);

  const QUANTITY = -1; //! 임시값.
  const PAYMENT_AMOUNT = -1000; //! 임시값.

  // useEffect(() => {
  //   console.log("In useEffect : ");
  //   console.log(createdChatRoom);
  // }, [createdChatRoom]);

  // const fetchAuthUser = async () => {
  //   const _authUser = await Auth.currentAuthenticatedUser();

  //   authUser = _authUser;
  //   console.log("authUser", authUser);
  // };

  // useEffect(() => {
  //   createOrder();
  // }, [chatRoomID]);

  // useEffect(() => {
  //   createOrderMenu();
  // }, [orderID]);

  // ? ChatRoom 생성.
  const createChatRoom = async () => {
    const newChatRoom = await DataStore.save(
      // TODO: 담아야 할 데이터들:
      // ? 1. 유저,
      // ? 2. 매장이름,
      // ? 3. (호스트) 유저가 고른 메뉴정보
      new ChatRoom({
        newMessages: 1029,
        matchingInfo: matchingInfo,
      })
    );

    // ? Authenticated User 와 ChatRoom 을 연결하기.
    const authUser = await Auth.currentAuthenticatedUser();
    // ? DataStore 의 User 모델에서 authUser.attributes.sub 값과 일치하는 값만 가져온다.
    const dbAuthUser = await DataStore.query(User, authUser.attributes.sub);
    await DataStore.save(
      new ChatRoomUser({
        user: dbAuthUser,
        chatroom: newChatRoom,
      })
    );

    navigation.navigate("RequestMatching", {
      storeInfo,
      menus: orderReducerState.map((e) => e.menuInfo),
      matchingInfo,
      createdChatRoom: newChatRoom,
    });
  };

  /*   // ? 호스트가 고른 식당으로, Order 생성.
  const createOrder = async () => {
    // const authUser = await Auth.currentAuthenticatedUser();
    const msTime = Date.now();
    const AWSDateTime = new Date(msTime).toISOString();
    const newOrder = await DataStore.save(
      new Order({
        store: storeName,
        orderDate: AWSDateTime, // ! orderDate는 지우면 안된다!!!!! createdAt은 시차를 가지고 나중에 생긴다!
        paymentAmount: PAYMENT_AMOUNT,
        userID: authUser.attributes.sub,
        chatroomID: chatRoomID,
      })
    );

    setOrderID(newOrder.id);

    const fetchedOrders = await DataStore.query(Order, (order) => order.userID("eq", authUser.attributes.sub), {
      sort: (s) => s.orderDate(SortDirection.DESCENDING),
    });
    console.log("fetchedOrders", fetchedOrders);
    const fetchOrderID = fetchedOrders[0].id;
    console.log("fetchOrderID", fetchOrderID);

    await createOrderMenu();
  };

  // ? 호스트의 메뉴로 OrderMenu 생성.
  const createOrderMenu = async () => {
    // const authUser = await Auth.currentAuthenticatedUser();
    const newOrderMenu = await DataStore.save(
      new OrderMenu({
        menu: firstMenu.menu,
        price: firstMenu.price,
        quantity: QUANTITY,
        userID: authUser.attributes.sub,
        orderID: orderID,
      })
    );
  }; */

  return (
    <SafeAreaView style={styles.root}>
      {/* 매칭 요청 시간 */}
      <View style={styles.setTimeContainer}>
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
      <View style={styles.setPersonsContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>매칭 희망 인원</Text>
        </View>
        <View style={styles.rightContainer}>
          <QuantitySelector quantity={persons} setQuantity={setPersons} />
        </View>
      </View>

      <View style={styles.buttonRoot}>
        <View style={styles.buttonContainer}>
          <Button
            title="매칭방 만들기"
            onPress={() => {
              createChatRoom();

              // navigation.navigate("RequestMatching", {
              //   storeInfo,
              //   menus: orderReducerState.map((e) => e.menuInfo),
              //   matchingInfo,
              //   createdChatRoom,
              // });
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
  setTimeContainer: {
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
  setPersonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonRoot: {
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
