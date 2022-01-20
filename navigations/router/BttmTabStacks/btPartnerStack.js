import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";
import styled from "styled-components";
import colors from "../../../colors";
import MatchingListScreen from "../../../screens/Main/PartnerStack/MatchingListScreen";

const Stack = createStackNavigator();

const HeaderView = styled.SafeAreaView`
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainBlue};
  height: 56px;
  width: 100%;
  /* position: relative; */
`;

const Title = styled.Text`
  font-family: "noto-regular";
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;

const BlueHeader = (props) => {
  return (
    <HeaderView>
      <Title>파트너 리스트</Title>
    </HeaderView>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="MatchingListScreen"
    screenOptions={{
      header: (props) => <BlueHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="MatchingListScreen"
      component={MatchingListScreen}
      options={{
        title: "매칭 리스트",
      }}
    />
  </Stack.Navigator>
);
