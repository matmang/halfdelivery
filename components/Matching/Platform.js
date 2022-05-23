import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import colors from "../../colors";
import styled from "styled-components";
import { width, height } from "../../utils";

const Platform = ({ name, selectedName, setSelectedName, viewStyle }) => {
  return (
    <RootView
      style={viewStyle}
      onPress={() => {
        setSelectedName(name);
      }}
    >
      <Img name={name} selectedName={selectedName} />
      <Gothic14
        name={name}
        selectedName={selectedName}
        style={{ includeFontPadding: false, textAlignVertical: "center" }}
      >
        {name}
      </Gothic14>
      {name === selectedName && <PinkHighlight name={name} />}
    </RootView>
  );
};

const RootView = styled.Pressable`
  width: ${width * 72}px;
  height: ${height * 99}px;
  /* background-color: lightpink; */
  justify-content: center;
  align-items: center;
`;

const Img = styled.Image`
  border-radius: 16px;
  width: ${width * 72}px;
  height: ${height * 72}px;
  background-color: lightgrey;
  border-width: ${({ name, selectedName }) =>
    name === selectedName ? 1.5 : 0}px;
  border-color: ${({ name, selectedName }) =>
    name === selectedName ? colors.primaryBlue : "white"};
`;

const Gothic14 = styled.Text`
  font-family: ${({ name, selectedName }) =>
    name === selectedName ? "gothic-medium" : "gothic-regular"};
  font-size: ${height * 14}px;
  margin-top: 12px;
  color: ${({ name, selectedName }) =>
    name === selectedName ? colors.primaryBlue : "black"};

  /* text-decoration: ${({ name, selectedName }) =>
    name === selectedName ? "underline" : null}; */
`;

const PinkHighlight = styled.View`
  margin-top: -7px;
  width: ${({ name }) =>
    name === "배달의 민족" ? "68px" : name === "요기요" ? "40px" : "54px"};
  height: 7px;
  background-color: ${colors.palePink};
  /* position: absolute; */
  z-index: -1;
`;

export default Platform;
