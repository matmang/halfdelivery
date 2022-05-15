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
      }}
    >
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
          fontFamily: "gothica1-medium",
        }}
        numberOfLines={1}
      >
        {category}
      </Text>
    </View>
  );
};

export default StoreCategory;
