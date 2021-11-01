import React, { useState, useEffect, createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import StoreList from "../../../components/Matching/StoreList";
import { useRoute } from "@react-navigation/core";
import { setStore, addMenu, cleanMenus, cleanStoreName } from "../../../redux/orderSlice";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { Store } from "../../../AWS/src/models";
import { useSelector, useDispatch } from "react-redux";
import orderReducer from "../../../redux/orderSlice";
import QuantitySelector from "../../../components/Matching/QuantitySelector";

const SelectStoreScreen = () => {
  const KOREAN_ID = "8314af0c-1d8e-4112-869b-15689debb495";
  const CHINESE_ID = "382f8bce-5182-4402-ab8d-564618a335fd";
  const JAPANESE_ID = "f9db956b-5bcb-4ddf-ba96-2010ae7c7ee5";
  const WESTERN_ID = "2634afad-acdb-4b9f-a5cc-feafbd9dbaa4";
  const CAFE_ID = "b26daa27-f6c3-4243-a73e-f9d9352d06e7";

  // state값
  const [categoryID, setCategoryID] = useState("ALL");

  useEffect(() => {
    setCategoryID("ALL");
  }, []);

  useEffect(() => {
    console.log("categoryID", categoryID);
    // setCategoryID("all");
    // fetchStores();
  }, [categoryID]);
  //! 디자인 시안 나오기 전까진, 일단 Button 으로...
  const CategoryButton = (props) => {
    return (
      <View style={{ margin: 10 }}>
        <Button
          title={props.name}
          onPress={() => {
            switch (props.name) {
              case "한식":
                setCategoryID(KOREAN_ID);
                break;
              case "중식":
                setCategoryID(CHINESE_ID);
                break;
              case "일식":
                setCategoryID(JAPANESE_ID);
                break;
              case "양식":
                setCategoryID(WESTERN_ID);
                break;
              case "카페":
                setCategoryID(CAFE_ID);
                break;
              default:
                setCategoryID("ALL");
                break;
            }
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "#E5E6E7",
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      {/* <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>음식 카테고리 선택</Text>
      </View> */}

      <View style={styles.categoryButtons}>
        <CategoryButton name="한식" />
        <CategoryButton name="중식" />
        <CategoryButton name="일식" />
        <CategoryButton name="양식" />
        <CategoryButton name="카페" />
      </View>

      <StoreList categoryID={categoryID} />
    </View>
    // </SelectStoreScreenContext.Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "noto-regular",
    fontWeight: "bold",
  },
  categoryButtons: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
    marginBottom: 8,
  },
});
export default SelectStoreScreen;
