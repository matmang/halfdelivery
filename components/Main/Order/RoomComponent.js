import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RoomComponent = (props) => {
  const item = props.item;
  return (
    <TouchableOpacity style={styles.root} onPress={() => alert("테스트")}>
      <View style={styles.categoryContainer}>
        <Text style={styles.text}>{item.category}</Text>
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.text}>{item.store}</Text>
      </View>
      <View style={styles.minPriceContainer}>
        <Text style={styles.text}>{item.minPrice}</Text>
      </View>
      <View style={styles.personsContainer}>
        <Text style={styles.text}>{item.people}명</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    // padding: 2,
    backgroundColor: "#fff",
    marginVertical: 1, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
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
});
export default RoomComponent;
