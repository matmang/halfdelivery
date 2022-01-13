import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignUpAuth from "../screens/Auth/SignUpAuth";
import SignUpAuthConfirm from "../screens/Auth/SignUpAuthConfirm";
import SignUpSchool from "../screens/Auth/SignUpSchool";
import SignUpBank from "../screens/Auth/SignUpBank";
import FindId from "../screens/Auth/FindId";
import FindPassword from "../screens/Auth/FindPassword";

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
      name="SignUpAuth"
      component={SignUpAuth}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignUpAuthConfirm"
      component={SignUpAuthConfirm}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignUpSchool"
      component={SignUpSchool}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignUpBank"
      component={SignUpBank}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="FindId"
      component={FindId}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="FindPassword"
      component={FindPassword}
      options={{
        headerShown: false,
      }}
    />
  </Auth.Navigator>
);
