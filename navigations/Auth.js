import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/Auth/SignIn";
import SignUp from "../screens/Auth/SignUp";
import ConfirmSignUp from "../screens/Auth/ConfirmSignUp";
import Welcome from "../screens/Auth/Welcome";
import SignUpAuth from "../screens/Auth/SignUpAuth";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{
        title: "회원가입",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "noto-regular" },
      }}
    />
    <Auth.Screen
      name="SignUpAuth"
      component={SignUpAuth}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false, title: "Sign In" }}
    />
    <Auth.Screen
      name="ConfirmSignUp"
      component={ConfirmSignUp}
      options={{
        title: "인증",
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "noto-regular" },
      }}
    />
  </Auth.Navigator>
);
