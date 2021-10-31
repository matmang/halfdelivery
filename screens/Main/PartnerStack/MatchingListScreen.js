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
        backgroundColor: "#E5E6E7",
        flex: 1,
        // alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View style={styles.categoryButtons}>
        <CategoryButton name="한식" />
        <CategoryButton name="중식" />
        <CategoryButton name="일식" />
        <CategoryButton name="양식" />
        <CategoryButton name="카페" />
      </View>

      <View style={{ height: 69, marginBottom: 4, backgroundColor: "white", justifyContent: "center" }}>
        <Text style={styles.title}>배달음식 파트너 모집중</Text>
      </View>

      <RoomList categoryID={categoryID} />
      <View style={{ marginTop: 30 }}>
        <Button title="매칭방 만들기" onPress={() => navigation.navigate("SelectStoreScreen")} />
      </View>
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
    marginBottom: 8,
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
