import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";
import RoomList from "../../../components/Order/RoomList";
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

const MatchingListScreen = () => {
  const [categoryID, setCategoryID] = useState("ALL");
  const navigation = useNavigation();

  const ButtonTitle = styled.Text`
    font-family: "noto-regular";
    font-size: 17px;
    /* line-height: 20px; */
    color: ${({ id }) =>
      id === categoryID ? colors.primaryBlue : colors.blueGray};
  `;

  const CategoryButton = (props) => {
    return (
      <Categorries
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
      >
        <ButtonTitle id={props.id}>{props.name}</ButtonTitle>
      </Categorries>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "#E5E6E7",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View style={styles.categoryButtons}>
        <CategoryButton name="한식" id={KOREAN_ID} />
        <CategoryButton name="중식" id={CHINESE_ID} />
        <CategoryButton name="일식" id={JAPANESE_ID} />
        <CategoryButton name="양식" id={WESTERN_ID} />
        <CategoryButton name="카페" id={CAFE_ID} />
      </View>
      {/* <View style={{ height: 69, marginBottom: 4, backgroundColor: "white", justifyContent: "center" }}>
        <Text style={styles.title}>배달음식 파트너 모집중</Text>
      </View> */}

      <RoomList categoryID={categoryID} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButtons: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "noto-regular",
    textAlign: "left",
    marginLeft: 24,
  },
});

export default MatchingListScreen;
