import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
import StoreItem from "../../components/Matching/StoreItem";
import MenuList from "../../components/Matching/MenuList";

export default (props) => {
  const storeInfo = props.route.params.storeInfo;
  const [store, setStore] = useState(storeInfo ? storeInfo.store : "all");

  return (
    <View
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
    </View>
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
    height: "70%",
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
