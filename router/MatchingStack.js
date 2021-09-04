import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreateMatching from "../screens/Main/CreateMatching";

const Main = createStackNavigator();
export default () => (
  <Main.Navigator initialRouteName="CreateMatching" screenOptions={{}}>
    <Main.Screen
      name="CreateMatching"
      component={CreateMatching}
      options={{
        title: "매칭방 만들기",
      }}
    />
  </Main.Navigator>
);
