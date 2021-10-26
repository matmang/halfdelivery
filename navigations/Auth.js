import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import Welcome from "../screens/Auth/Welcome";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
      headerBackTitleVisible: false,
      headerTransparent: true,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerTitleStyle: {
          color: "black",
        },
      }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
  </Auth.Navigator>
);
