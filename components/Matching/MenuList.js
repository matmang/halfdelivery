import React, { useState, useEffect } from "react";
import { FlatList, Button, View } from "react-native";
import Menus from "../../sampleData/Menus";
import styles from "../Main/styles";
import MenuItem from "./MenuItem";

let targetData = Menus;
export default (props) => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/v1/stores/all/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServerData(data);
      })
      .catch((error) => alert(error));
  }, []);

  props.selectedStore === "all"
    ? (targetData = serverData)
    : (targetData = serverData.filter(
        (value) => value.store == props.selectedStore
      ));

  return (
    <View style={styles.storeList}>
      <FlatList
        data={targetData}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};
