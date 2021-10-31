import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RoomItem from "./RoomItem";
import MatchingRooms from "../../sampleData/MatchingRooms";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order, Store } from "../../AWS/src/models";

// const Header = ({ categoryID }) => {
//   return (
//     <View style={styles.headerRoot}>
//       <View style={styles.categoryContainer}>
//         <Text style={styles.headerText}>카테고리</Text>
//       </View>
//       <View style={styles.storeContainer}>
//         <Text style={styles.headerText}>음식점</Text>
//       </View>
//       <View style={styles.minPriceContainer}>
//         <Text style={styles.headerText}>필요금액</Text>
//       </View>
//       <View style={styles.personsContainer}>
//         <Text style={styles.headerText}>남은인원</Text>
//       </View>
//     </View>
//   );
// };

// let targetData = MatchingRooms;

const RoomList = ({ categoryID }) => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    // console.log(categoryID);
    fetchChatRooms();
  }, []);
  // }, [categoryID]);

  const fetchChatRooms = async () => {
    const fetchedChatRooms = await DataStore.query(ChatRoom);
    setServerData(fetchedChatRooms);
  };

  return (
    <View style={styles.root}>
      <FlatList data={serverData} renderItem={({ item }) => <RoomItem chatRoomInfo={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5E6E7",
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
});

export default RoomList;
