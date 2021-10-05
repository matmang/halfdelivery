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
    fontWeight: "bold",
  },
  centerize: {
    flex: 1,
    alignItems: "center", // 가로 정렬
    justifyContent: "center", // 세로 정렬
    paddingVertical: 100,
  },
  rootCategoryButtons: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    // alignContent: "center",
    justifyContent: "space-evenly",
  },
  orderLogImage: {
    marginBottom: 10,
    // flex: 1,
    height: 70,
    width: 70,
    resizeMode: "contain", //? Show whole Image (with white space)
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  orderLogCategory: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },
  orderLogMinPrice: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  textInput: {
    height: 40,
    width: "80%",
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  storeList: {
    borderRadius: 10,
    marginBottom: 5,
    padding: 2,
    backgroundColor: "grey",
    justifyContent: "center",
  },
  h75col: {
    width: "95%",
    borderRadius: 10,
    height: "75%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  h25grey: {
    width: "95%",
    height: "25%",
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flex: 3.5,
  },
  orderLog: {
    width: "95%",
    height: "25%",
    borderRadius: 10,
    marginBottom: 5,
    padding: 20,
    backgroundColor: "lightgrey",
    // alignItems: "center",
    // justifyContent: "center",
    // flex: 3.5,
  },
  h25greyCenter: {
    width: "95%",
    height: "25%",
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flex: 3.5,
  },
  h25col: {
    width: "95%",
    borderRadius: 10,
    height: "25%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  h25row: {
    width: "95%",
    borderRadius: 10,
    height: "25%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    flex: 3.5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
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
  h10rowBottom: {
    width: "95%",
    borderRadius: 10,
    height: "10%",
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 2,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  pressed: {
    backgroundColor: "skyblue",
    width: "auto",
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  notPressed: {
    backgroundColor: "lightgrey",
    width: "auto",
    borderRadius: 10,
    padding: 5,
    margin: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textPressed: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  textNotPressed: {
    color: "white",
    textAlign: "center",
    fontSize: 40,
  },
});
export default SelectStoreScreen;
