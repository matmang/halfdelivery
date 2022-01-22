import React, { useState, useEffect, useContext } from "react";
import { FlatList, Button, View, StyleSheet } from "react-native";
import StoreItem from "./StoreItem";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import {
  ChatRoom,
  User,
  ChatRoomUser,
  OrderMenu,
  Order,
  Store,
} from "../../AWS/src/models";

const StoreList = ({ categoryID }) => {
  const [serverData, setServerData] = useState([]);
  const [category, setCategory] = useState("-");

  const KOREAN_ID = "8314af0c-1d8e-4112-869b-15689debb495";
  const CHINESE_ID = "382f8bce-5182-4402-ab8d-564618a335fd";
  const JAPANESE_ID = "f9db956b-5bcb-4ddf-ba96-2010ae7c7ee5";
  const WESTERN_ID = "2634afad-acdb-4b9f-a5cc-feafbd9dbaa4";
  const CAFE_ID = "b26daa27-f6c3-4243-a73e-f9d9352d06e7";

  // useEffect(() => {
  //   fetchStores();
  // }, []);

  useEffect(() => {
    console.log(categoryID);
    fetchStores();

    switch (categoryID) {
      case KOREAN_ID:
        setCategory("한식");
        break;
      case CHINESE_ID:
        setCategory("중식");
        break;
      case JAPANESE_ID:
        setCategory("일식");
        break;
      case WESTERN_ID:
        setCategory("양식");
        break;
      case CAFE_ID:
        setCategory("카페");
        break;
      default:
        setCategory("-");
        break;
    }
  }, [categoryID]);

  const fetchStores = async () => {
    if (categoryID === "ALL") {
      const fetchedStores = await DataStore.query(Store);
      setServerData(fetchedStores);
    } else {
      const fetchedStores = await DataStore.query(Store, (c) =>
        c.storecategoryID("eq", categoryID)
      );
      setServerData(fetchedStores);
    }
  };

  return (
    <View style={styles.root}>
      <FlatList
        data={serverData} // ? 임시 설정
        renderItem={({ item }) => (
          <StoreItem storeInfo={item} category={category} />
        )}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#E5E6E7",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default StoreList;
