import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../colors";
import { width, height } from "../utils";

export default ({ platfrom, viewStyle }) => {
  let style = null;

  switch (platfrom) {
    case "배민":
      style = styles.BaeMin;
      break;
    case "배달의 민족":
      style = styles.BaeMinFull;
      break;
    case "요기요":
      style = styles.Yogiyo;
      break;
    case "쿠팡잇츠":
      style = styles.Coupang;
      break;
    default:
      platfrom = "error";
  }

  return (
    <View
      style={[
        {
          width: width * 44,
          height: height * 20,
          borderRadius: 10,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        },
        style,
        viewStyle,
      ]}
    >
      <Text style={{ color: "white", fontFamily: "noto-medium", fontSize: 10 }}>
        {platfrom}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BaeMin: {
    backgroundColor: "#2BC0BB",
  },
  BaeMinFull: {
    width: width * 74,
    height: height * 20,
    backgroundColor: "#2BC0BB",
  },
  Yogiyo: {
    backgroundColor: "#D52A2A",
  },
  Coupang: {
    width: 52,
    backgroundColor: "#02AFFD",
  },
});
