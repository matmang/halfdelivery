import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    marginLeft: 3,
    flex: 1,
    height: "auto",
    resizeMode: "contain", //? Show whole Image (with white space)
  },
  rightContainer: {
    padding: 10,
    backgroundColor: "white",
    justifyContent: "flex-end",
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default styles;
