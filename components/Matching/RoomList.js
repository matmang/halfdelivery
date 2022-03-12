import React, { useLayoutEffect, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import MatchingRooms from "../../sampleData/MatchingRooms";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import {
  ChatRoom,
  User,
  ChatRoomUser,
  OrderMenu,
  Order,
  Store,
  MatchingInfo,
} from "../../AWS/src/models";
import AppLoading from "expo-app-loading";
import Room_DlvTip from "./Room_DlvTip";
import Room_MinPrice from "./Room_MinPrice";

const RoomList = ({ categoryID, type }) => {
  // const type = "DLV_TIP";

  const [chatRooms, setChatRooms] = useState([]);
  const [matchings, setMatchings] = useState([]);

  //? Listening to new chatrooms. https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/
  //? In Real Time!
  //? 새 매칭이 생길때마다 렌더링 한다
  // useEffect(() => {
  //   //? 그러기 위해서 subscription 해야 한다
  //   const subscription = DataStore.observe(ChatRoom).subscribe((ChatRoom) => {
  //     if (ChatRoom.opType === "INSERT") {
  //       //* setState 에 callback 함수를 넣으면, 첫번쨰 인자로 현재 state를 갖는다.
  //       setMatchings((existingChatRooms) => [
  //         ChatRoom.element.filter(
  //           (chatroom) =>
  //             chatroom.master !== authUser.attributes.sub &&
  //             chatroom.LinkedMatchingInfo.type === type
  //         ),
  //         ...existingChatRooms,
  //       ]);
  //     }
  //   });

  //   console.log("matchings", matchings);

  //   //? 죽을땐 unsubscribe
  //   return () => subscription.unsubscribe();
  // }, [matchings]);

  useLayoutEffect(() => {
    //? 매칭방 가져오기
    const fetchMatchings = async () => {
      const authUser = await Auth.currentAuthenticatedUser();
      // console.log(authUser);

      //? onSetting === true 인 매칭방만 불러옴
      const matchings = await DataStore.query(ChatRoom, (chatroom) =>
        chatroom.onSetting("eq", true)
      );

      setMatchings(
        matchings.filter(
          (chatroom) =>
            //? 내가 만든 매칭방은 제외
            // chatroom.master !== authUser.attributes.sub
            // &&
            chatroom.LinkedMatchingInfo !== null &&
            //? 매칭타입에 해당하는 매칭방만 불러옴
            chatroom.LinkedMatchingInfo.type === type
        )
        // matchings
      );
    };

    fetchMatchings();
  }, [type]);
  console.log(matchings);

  return (
    <View style={styles.root}>
      <FlatList
        data={
          matchings

          // //? 카테고리에 해당하는 매칭방만 고르기
          // categoryID === "ALL"
          //   ? matchings
          //   : matchings.filter(
          //       (obj) =>
          //         obj.MatchingInfo.matchingInfoStoreCategoryId === categoryID
          //     )
        }
        renderItem={({ item }) =>
          item.LinkedMatchingInfo !== null ? (
            type === "DLV_TIP" ? (
              <Room_DlvTip matchingInfo={item.LinkedMatchingInfo} />
            ) : type === "MIN_PRICE" ? (
              <Room_MinPrice matchingInfo={item.LinkedMatchingInfo} />
            ) : (
              <ActivityIndicator />
            )
          ) : (
            <ActivityIndicator />
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5E6E7",
    width: "100%",
    height: "80%",
    alignSelf: "center",
  },
});

export default RoomList;
