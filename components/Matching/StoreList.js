import React, { useState, useEffect, useContext } from "react";
import { FlatList, Button, View } from "react-native";
import StoreItem from "./StoreItem";
import Stores from "../../sampleData/Stores";
import styles from "../Main/styles";
import { getStore } from "../../api-2";
// import { SelectStoreScreenContext } from "../../screens/Main/SelectStoreScreen";

let targetData = Stores;

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

const StoreList = ({ category }) => {
  // console.log(useContext(SelectStoreScreenContext));
  // const { category, category2, category3 } = useContext(
  //   SelectStoreScreenContext
  // );
  const selectedCatagory = category;

  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    // fetch("http://127.0.0.1:8000/v1/stores/all/", {
    //   method: "GET",
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setServerData(data);
    //     // ? category 로 객체 묶기 groupBy() 함수를 사용.
    //     // const cat = groupBy(data, "category");
    //     // setServerData(cat);
    //     // console.log(cat);
    //   })
    //   .catch((error) => alert(error));
    // // todo: fetch 랑 axios 공부 할 것..
    // console.log(serverData);
    // getStore(setServerData);
    // console.log(serverData);
  }, []);

  selectedCatagory === "all"
    ? (targetData = Stores)
    : (targetData = Stores.filter(
        (value) => value.category == selectedCatagory
      ));

  // console.log("==================시작");
  // console.log(groupBy(targetData, "store"));
  // console.log("==================끝");

  // let temp = [groupBy(targetData, "store")].reduce(
  //   function (previousValue, currentValue) {
  //     return [...previousValue, ...currentValue.books];
  //   },
  //   ["Alphabet"]
  // );
  // console.log(temp);

  return (
    <View style={styles.storeList}>
      <FlatList
        data={targetData} // ? 임시 설정
        renderItem={({ item }) => <StoreItem storeInfo={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};

export default StoreList;
