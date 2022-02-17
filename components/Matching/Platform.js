import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import colors from "../../colors";
import styled from "styled-components";

const RootView = styled.Pressable`
  width: 68px;
  /* width: auto; */
  height: 82px;
  /* background-color: lightpink; */
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image`
  border-radius: 6px;
  width: 54px;
  height: 54px;
  background-color: grey;
  border-width: ${({ name, selectedName }) =>
    name === selectedName ? 1.5 : 0}px;
  border-color: ${({ name, selectedName }) =>
    name === selectedName ? colors.primaryBlue : "white"};
`;

const Noto14 = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  margin-top: 12px;
  color: ${({ name, selectedName }) =>
    name === selectedName ? colors.primaryBlue : "black"};

  /* text-decoration: ${({ name, selectedName }) =>
    name === selectedName ? "underline" : null}; */
`;

const Underline = styled.View`
  margin-top: 2px;
  width: ${({ name }) => (name === "배달의 민족" ? "68px" : "54px")};
  height: 1.5px;
  background-color: ${colors.primaryBlue};
`;

const Platforms = ({ name, selectedName, setSelectedName }) => {
  return (
    <RootView
      onPress={() => {
        setSelectedName(name);
      }}
    >
      <Img name={name} selectedName={selectedName} />
      <Noto14
        name={name}
        selectedName={selectedName}
        style={{ includeFontPadding: false, textAlignVertical: "center" }}
      >
        {name}
      </Noto14>
      {name === selectedName && <Underline name={name} />}
    </RootView>
  );
};

export default Platforms;
