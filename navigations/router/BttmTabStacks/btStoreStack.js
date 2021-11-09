import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";
import SelectStoreScreen from "../../../screens/Main/StoreStack/SelectStoreScreen";
import styled from "styled-components";
import colors from "../../../colors";

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
// 56
const BlueHeader = (props) => {
  return (
    <HeaderView>
      <Title>식당</Title>
    </HeaderView>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="SelectStoreScreen"
    screenOptions={{
      header: (props) => <BlueHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="SelectStoreScreen"
      component={SelectStoreScreen}
      options={{
        title: "음식점 고르기",
      }}
    />
  </Stack.Navigator>
);
