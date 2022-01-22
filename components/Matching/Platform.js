import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import colors from "../../colors";
import styled from "styled-components";

const RootView = styled.View`
  width: 68px;
  /* width: auto; */
  height: 82px;
  background-color: lightpink;
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image`
  border-radius: 6px;
  width: 54px;
  height: 54px;
  background-color: white;
  border-width: ${({ isPressed }) => (isPressed ? 1.5 : 0)}px;
  border-color: ${({ isPressed }) => (isPressed ? colors.mainBlue : "white")};
`;

const Noto14 = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  margin-top: 12px;
  color: ${({ isPressed }) => (isPressed ? colors.mainBlue : "black")};
  text-decoration: ${({ isPressed }) => (isPressed ? "underline" : null)};
`;

const Platforms = ({ name, isPressed }) => {
  return (
    <RootView>
      <Img isPressed={isPressed} />
      <Noto14 isPressed={isPressed}>{name}</Noto14>
    </RootView>
  );
};

export default Platforms;
