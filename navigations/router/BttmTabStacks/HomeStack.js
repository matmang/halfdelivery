import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";

import HomeScreen from "../../../screens/Main/HomeStack/HomeScreen";
const Stack = createStackNavigator();
const LogoHeader = (props) => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image source={logos.halfLogo} style={{ width: 40, height: 40 }} />
    </SafeAreaView>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      header: (props) => <LogoHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        header: (props) => <LogoHeader {...props} />,
        title: "임시 홈",
      }}
    />
  </Stack.Navigator>
);
