import { View, Text, Pressable } from "react-native";
import React from "react";
import colors from "../colors";

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
          width: 324,
          height: 48,
          borderRadius: 24,
          borderWidth: 2,
          borderColor: !isPressed
            ? "rgba(173, 177, 192, 255)"
            : colors.mainBlue,
        },
        btnStyle,
      ]}
    >
      <Text
        style={[
          {
            fontFamily: "noto-regular",
            fontWeight: "400",
            fontSize: 17,
            textAlign: "center",
            color: !isPressed ? "rgba(173, 177, 192, 255)" : colors.mainBlue,
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
