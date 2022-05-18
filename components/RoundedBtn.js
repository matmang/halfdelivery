import { View, Text, Pressable } from "react-native";
import React from "react";
import colors from "../colors";
import { width, height } from "../utils";
const RoundedBtn = ({ btnStyle, textStyle, text, isPressed, onPress }) => {
  if (text === undefined) {
    text = "버튼텍스트";
  }

  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          alignItems: "center",
          justifyContent: "center",
          width: width * 324,
          height: height * 48,
          borderRadius: 24,
          borderWidth: 2,
          borderColor: !isPressed
            ? "rgba(173, 177, 192, 255)"
            : colors.primaryBlue,
        },
        btnStyle,
      ]}
    >
      <Text
        style={[
          {
            fontFamily: "gothic-medium",
            includeFontPadding: false,
            textAlignVertical: "center",
            fontSize: 17,
            textAlign: "center",
            color: !isPressed ? "rgba(173, 177, 192, 255)" : colors.primaryBlue,
          },
          textStyle,
        ]}
      >
        {" "}
        {text}{" "}
      </Text>
    </Pressable>
  );
};

export default RoundedBtn;
