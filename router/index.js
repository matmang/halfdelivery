import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNav from "./BottomTabNav";

const Root = createStackNavigator();

const Router = () => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen component={BottomTabNav} name="BottomTabNav" />
    </Root.Navigator>
  );
};

export default Router;
