import React, { useState, useEffect } from "react";
import { FlatList, Button, View } from "react-native";
import styles from "../Main/styles";
import ChatMenuItem from "./ChatMenuItem";
import Menus from "../../sampleData/Menus";
import { useDispatch, useSelector } from "react-redux";
// import { setStore } from "../../redux/orderSlice";

// let targetData = Menus;
export default () => {
  const [serverData, setServerData] = useState([]);
  // const [menus, setMenus] = useState([]);
  const dispatch = useDispatch();

  const storeName = useSelector((state) => state.orderReducer.storeName);
  const menus = useSelector((state) => state.orderReducer.menus);
  useEffect(() => {
    console.log("챗메뉴리스트", menus);
    // const _menus = menus;
    // setMenus(_menus);

    // fetch("http://127.0.0.1:8000/v1/stores/all/", {
    //   method: "GET",
    // })
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setServerData(data);
    //   })
    //   .catch((error) => alert(error));
  }, []);

  // const selectedStore = storeName;
  // selectedStore === "all"
  //   ? (targetData = serverData)
  //   : (targetData = serverData.filter((value) => value.store == selectedStore));

  return (
    <View style={styles.storeList}>
      <FlatList
        data={menus} // ? 임시 설정
        renderItem={({ item }) => <ChatMenuItem menuInfo={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </View>
  );
};
