import React, { useState, useEffect, createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import StoreList from "../../../components/Matching/StoreList";
import { useRoute } from "@react-navigation/core";
import {
  setStore,
  addMenu,
  cleanMenus,
  cleanStoreName,
} from "../../../redux/orderSlice";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import { Store } from "../../../AWS/src/models";
import { useSelector, useDispatch } from "react-redux";
import orderReducer from "../../../redux/orderSlice";
import QuantitySelector from "../../../components/Matching/QuantitySelector";
import styled from "styled-components";
import colors from "../../../colors";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../../assets/constants";

const Categorries = styled.Pressable`
  height: 52px;
  justify-content: center;
`;

const SelectStoreScreen = () => {
  const [categoryID, setCategoryID] = useState("ALL");

  useEffect(() => {
    setCategoryID("ALL");
  }, []);

  const ButtonTitle = styled.Text`
    font-family: "noto-regular";
    font-size: 17px;
    /* line-height: 20px; */
    color: ${({ id }) =>
      id === categoryID ? colors.mainBlue : colors.blueGrey};
  `;

  const CategoryButton = ({ id, name }) => {
    return (
      <Categorries
        onPress={() => {
          switch (name) {
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
      >
        <ButtonTitle id={id}>{name}</ButtonTitle>
      </Categorries>
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
        <CategoryButton name="한식" id={KOREAN_ID} />
        <CategoryButton name="중식" id={CHINESE_ID} />
        <CategoryButton name="일식" id={JAPANESE_ID} />
        <CategoryButton name="양식" id={WESTERN_ID} />
        <CategoryButton name="카페" id={CAFE_ID} />
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
    marginBottom: 4,
  },
});
export default SelectStoreScreen;
