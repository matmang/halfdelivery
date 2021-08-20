import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  list: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "80%",
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
  image: {
    flex: 2,
    height: 150,
    resizeMode: "contain", //? Show whole Image (with white space)
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
  peopleContainer: {
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

export default styles;
