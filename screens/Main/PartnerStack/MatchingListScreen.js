import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";
import RoomList from "../../../components/Order/RoomList";

const MatchingListScreen = () => {
  const [category, setCategory] = useState("한식");
  const navigation = useNavigation();

  const categoryID = "temp";

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
        backgroundColor: "#fff",
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>매칭 카테고리 선택</Text>
      </View>

      <View style={styles.selectCategoryList}>
        <View style={styles.rootCategoryButtons}>
          <CategoryButton name="한식" />
          <CategoryButton name="중식" />
          <CategoryButton name="일식" />
          <CategoryButton name="양식" />
          <CategoryButton name="카페" />
        </View>
      </View>
      <RoomList categoryID={categoryID} />
      <View style={{ marginTop: 30 }}>
        <Button title="매칭방 만들기" onPress={() => navigation.navigate("SelectStoreScreen")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectCategoryList: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "95%",
    height: "auto",
    alignSelf: "center",
    padding: 10,
    marginTop: 2,
    borderRadius: 10,
  },
  rootCategoryButtons: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    // alignContent: "center",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontFamily: "noto-regular",
    fontWeight: "bold",
  },
});

export default MatchingListScreen;
