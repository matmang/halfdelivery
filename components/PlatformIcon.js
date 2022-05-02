import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../colors";
import { width, height } from "../utils";

export default ({ platform, viewStyle, isLong }) => {
  let style = null;

  if (isLong === undefined) {
    isLong = false;
  }

  switch (platform) {
    case "BAEMIN":
      style = styles.BaeMin;
      platform = "배민";
      break;
    case "BAEMIN" && isLong:
      style = styles.BaeMinFull;
      platform = "배달의 민족";
      break;
    case "YOGIYO":
      style = styles.Yogiyo;
      platform = "요기요";
      break;
    case "COUPANG":
      style = styles.Coupang;
      platform = "쿠팡잇츠";
      break;
    default:
      platform = "error";
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
      <Text
        style={{ color: "white", fontFamily: "gothica1-medium", fontSize: 10 }}
      >
        {platform}
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
