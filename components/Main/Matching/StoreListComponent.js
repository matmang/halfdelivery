import React, { useState, useEffect } from "react";
import { FlatList, Button, View } from "react-native";
import StoreComponent from "./StoreComponent";
import sampleData from "../../../assets/sampleDataMat";
import styles from "../styles";

let targetData = sampleData;
const StoreListComponent = (props) => {
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

  props.targetCatagory === "all"
    ? (targetData = serverData)
    : (targetData = serverData.filter(
        (value) => value.category == props.targetCatagory
      ));

  return (
    <View style={styles.storeList}>
      <FlatList
        data={targetData}
        renderItem={({ item }) => <StoreComponent item={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};

export default StoreListComponent;
