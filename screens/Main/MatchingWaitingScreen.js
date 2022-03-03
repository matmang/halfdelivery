import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import colors from "../../colors";

export default MatchingWaitingScreen = () => {
  const navigation = useNavigation();

  return (
    <Root>
      <Text>배달정보</Text>
      <Text>매칭정보</Text>
    </Root>
  );
};

const styles = StyleSheet.create({
  categoryButtons: {
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 30,
    justifyContent: "space-evenly",
    marginBottom: 4,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "noto-regular",
    textAlign: "left",
    marginLeft: 24,
  },
});

const Root = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const ButtonTitle = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  /* line-height: 20px; */
  color: ${({ id }) =>
    id === categoryID ? colors.primaryBlue : colors.blueGray};
`;
