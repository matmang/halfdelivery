import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateMatchingScreen from "../screens/Main/CreateMatchingScreen";

const Main = createStackNavigator();
export default () => (
  <Main.Navigator initialRouteName="CreateMatchingScreen" screenOptions={{}}>
    <Main.Screen
      name="CreateMatchingScreen"
      component={CreateMatchingScreen}
      options={{
        title: "매칭방 만들기",
      }}
    />
  </Main.Navigator>
);
