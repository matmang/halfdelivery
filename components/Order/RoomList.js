import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import RoomItem from "./RoomItem";
import MatchingRooms from "../../sampleData/MatchingRooms";

const Header = () => {
  return (
    <View style={styles.headerRoot}>
      <View style={styles.categoryContainer}>
        <Text style={styles.headerText}>카테고리</Text>
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.headerText}>음식점</Text>
      </View>
      <View style={styles.minPriceContainer}>
        <Text style={styles.headerText}>필요금액</Text>
      </View>
      <View style={styles.personsContainer}>
        <Text style={styles.headerText}>남은인원</Text>
      </View>
    </View>
  );
};

let targetData = MatchingRooms;

export default (props) => {
  targetData = MatchingRooms.filter(
    (value) => value.category == props.targetCategory
  );
  return (
    <View style={styles.list}>
      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={styles.title}>매칭 요청 리스트</Text>
        <Header />
      </View>
      <FlatList
        data={targetData}
        renderItem={({ item }) => <RoomItem item={item} />}
      />
    </View>
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
  selectCategoryList: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "auto",
    alignSelf: "center",
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  rootCategoryButtons: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    // alignContent: "center",
    justifyContent: "space-evenly",
  },
  root: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    marginVertical: 1, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  headerRoot: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  categoryContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  storeContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  minPriceContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  personsContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 0.8,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
