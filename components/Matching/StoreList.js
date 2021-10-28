import React, { useState, useEffect, useContext } from "react";
import { FlatList, Button, View } from "react-native";
import StoreItem from "./StoreItem";
import Stores from "../../sampleData/Stores";
import styles from "../Main/styles";
import { getStore } from "../../api-2";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { ChatRoom, User, ChatRoomUser, OrderMenu, Order, Store } from "../../AWS/src/models";

const StoreList = ({ categoryID }) => {
  const [serverData, setServerData] = useState([]);

  // useEffect(() => {
  //   fetchStores();
  // }, []);

  useEffect(() => {
    console.log(categoryID);
    fetchStores();
  }, [categoryID]);

  const fetchStores = async () => {
    if (categoryID === "ALL") {
      const fetchedStores = await DataStore.query(Store);
      setServerData(fetchedStores);
    } else {
      const fetchedStores = await DataStore.query(Store, (c) => c.storecategoryID("eq", categoryID));
      setServerData(fetchedStores);
    }
  };

  return (
    <View style={styles.storeList}>
      <FlatList
        data={serverData} // ? 임시 설정
        renderItem={({ item }) => <StoreItem storeInfo={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};

export default StoreList;
