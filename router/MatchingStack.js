import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SelectStoreScreen from "../screens/Main/SelectStoreScreen";

const Main = createStackNavigator();
export default () => (
  <Main.Navigator initialRouteName="SelectStoreScreen" screenOptions={{}}>
    <Main.Screen
      name="SelectStoreScreen"
      component={SelectStoreScreen}
      options={{
        title: "음식점 고르기",
      }}
    />
  </Main.Navigator>
);
