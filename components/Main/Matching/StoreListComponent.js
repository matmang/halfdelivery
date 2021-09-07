import React, { useState, useEffect } from "react";
import { FlatList, Button, View } from "react-native";
import StoreComponent from "./StoreComponent";
import sampleData from "../../../assets/sampleDataMat";
import styles from "../styles";

let targetData = sampleData;

// ? 속성으로 객체 분류하기. https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

export default (props) => {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/v1/stores/all/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setServerData(data);

        // ? category 로 객체 묶기 groupBy() 함수를 사용.
        // const cat = groupBy(data, "category");
        // setServerData(cat);
        // console.log(cat);
      })
      .catch((error) => alert(error));
  }, []);

  props.selectedCatagory === "all"
    ? (targetData = serverData)
    : (targetData = serverData.filter(
        (value) => value.category == props.selectedCatagory
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
