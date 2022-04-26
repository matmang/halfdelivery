import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StoreCategory = ({ category }) => {
  return (
    <View
      style={{
        width: 44,
        height: 20,
        borderRadius: 12,
        backgroundColor: "#E6EDF3",
        justifyContent: "center",
        marginBottom: 5,
      }}
    >
      <Text
        style={{ fontSize: 10, textAlign: "center", fontFamily: "noto-medium" }}
        numberOfLines={1}
      >
        {category}
      </Text>
    </View>
  );
};

export default StoreCategory;
