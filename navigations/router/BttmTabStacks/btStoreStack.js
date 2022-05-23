import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  Button,
  Platform,
} from "react-native";
import logos from "../../../images";
import SelectStoreScreen from "../../../screens/Main/StoreStack/SelectStoreScreen";
import styled from "styled-components";
import colors from "../../../colors";
import { height } from "../../../utils";

const Stack = createStackNavigator();

export const HEIGHT = height * 870;

export const STATUS_BAR_HEIGHT = Platform.select({
  android: height * 24,
  ios: height * 47,
});

export const HEADER_HEIGHT = height * 56;

const HeaderView = styled.SafeAreaView`
  background-color: ${colors.primaryBlue};
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  margin-top: ${STATUS_BAR_HEIGHT}px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-family: "gothic-medium";
  font-size: 17px;
  color: #ffffff;
`;

const BlueHeader = (props) => {
  return (
    <HeaderView>
      <Title>오늘 뭐 먹지?</Title>
    </HeaderView>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="SelectStoreScreen"
    // screenOptions={{
    //   header: (props) => <BlueHeader {...props} />,
    // }}
  >
    <Stack.Screen
      name="SelectStoreScreen"
      component={SelectStoreScreen}
      options={{
        header: (props) => <BlueHeader {...props} />,
      }}
    />
  </Stack.Navigator>
);
