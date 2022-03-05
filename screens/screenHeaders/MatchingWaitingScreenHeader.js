import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import logos from "../../images";
import styled from "styled-components";
import colors from "../../colors";
import MatchingListScreen from "../Main/PartnerStack/MatchingListScreen";
import MatchingWaitingScreen from "../Main/MatchingWaitingScreen";
import { width, height } from "../../utils";

export default ({}) => {
  return (
    <Root>
      <Title>카테고리, 가게명</Title>
    </Root>
  );
};

const Root = styled.View`
  margin-top: ${Platform.OS === "android"
    ? height * StatusBar.currentHeight
    : height * 47}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBlue};
  height: ${height * 56}px;
  width: 100%;
  /* position: relative; */
`;

const Title = styled.Text`
  font-family: "noto-medium";
  font-size: 14px;
  color: #ffffff;
  include-font-padding: false;
  text-align-vertical: center;
`;
