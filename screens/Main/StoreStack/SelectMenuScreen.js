import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import StoreItem from "../../../components/Matching/StoreItem";
import MenuList from "../../../components/Matching/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { setStore, addMenu, cleanMenus } from "../../../redux/orderSlice";

export default (props) => {
  const storeInfo = props.route.params.storeInfo;
  const [store, setStore] = useState(storeInfo ? storeInfo.store : "all");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={styles.selectedStoreContainer}>
        <View style={styles.selectedStore}>
          <StoreItem storeInfo={storeInfo} />
        </View>
      </View>
      <View style={{ margin: 2 }}>
        <Text style={styles.title}>메뉴 선택</Text>
      </View>
      <View style={styles.list}>
        <MenuList selectedStore={store} storeInfo={storeInfo} />
      </View>
      <Button
        title="클린"
        onPress={() => {
          dispatch(cleanMenus(""));
        }}
      />
      <Button
        title="이동"
        onPress={() => {
          navigation.navigate("SetMatchingTimeScreen", {});
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectedStore: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    justifyContent: "space-evenly",
    width: "95%",
    height: "auto",
  },
  selectedStoreContainer: {
    width: "95%",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 2,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  list: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "65%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
