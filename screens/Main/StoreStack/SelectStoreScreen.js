import React, { useState, useEffect, createContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import StoreList from "../../../components/Matching/StoreList";

// export const SelectStoreScreenContext = createContext();

const SelectStoreScreen = () => {
  // state값
  const [category, setCategory] = useState("all");
  //! 디자인 시안 나오기 전까진, 일단 Button 으로...
  const CategoryButton = (props) => {
    return (
      <View style={{ margin: 10 }}>
        <Button
          title={props.name}
          onPress={() => {
            setCategory(props.name);
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={styles.title}>음식 카테고리 선택</Text>
      </View>
      <View style={styles.h10row}>
        <View style={styles.rootCategoryButtons}>
          <CategoryButton name="한식" />
          <CategoryButton name="중식" />
          <CategoryButton name="일식" />
          <CategoryButton name="양식" />
          <CategoryButton name="카페" />
        </View>
      </View>
      <View style={{ margin: 2 }}>
        <Text style={styles.title}>음식점 선택</Text>
      </View>
      <View style={styles.list}>
        <StoreList category={category} />
      </View>
    </SafeAreaView>
    // </SelectStoreScreenContext.Provider>
  );
};

const styles = StyleSheet.create({
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
    fontFamily: "noto-regular",
    fontWeight: "bold",
  },
  rootCategoryButtons: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    // alignContent: "center",
    justifyContent: "space-evenly",
  },
  h10row: {
    width: "95%",
    borderRadius: 10,
    height: "10%",
    marginTop: 2,
    marginBottom: 20,
    paddingVertical: 2,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
export default SelectStoreScreen;
