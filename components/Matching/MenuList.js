import React, { useState, useEffect } from "react";
import { FlatList, Button, View } from "react-native";
import styles from "../Main/styles";
import MenuItem from "./MenuItem";
import Menus from "../../sampleData/Menus";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { Store, Menu } from "../../AWS/src/models";

const MenuList = ({ storeInfo }) => {
  const [storeID, setStoreID] = useState(storeInfo ? storeInfo.id : "store-id");
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const fetchedMenus = await DataStore.query(Menu, (c) => c.storeID("eq", storeID));
    setServerData(fetchedMenus);
    // console.log("fetchedMenus", fetchedMenus);
  };

  return (
    <View style={styles.storeList}>
      <FlatList
        data={serverData} // ? 임시 설정
        renderItem={({ item }) => <MenuItem menuInfo={item} storeInfo={storeInfo} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};

export default MenuList;
