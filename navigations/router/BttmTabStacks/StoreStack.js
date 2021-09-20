import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, SafeAreaView, Button } from "react-native";

import logos from "../../../images";

import SelectStoreScreen from "../../../screens/Main/StoreStack/SelectStoreScreen";
import SelectMenuScreen from "../../../screens/Main/StoreStack/SelectMenuScreen";
import SetMatchingTimeScreen from "../../../screens/Main/StoreStack/SetMatchingTimeScreen";

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
      {/* <Text>{props.title}</Text> */}
    </SafeAreaView>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="SelectStoreScreen"
    screenOptions={{
      header: (props) => <LogoHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="SelectStoreScreen"
      component={SelectStoreScreen}
      options={{
        title: "음식점 고르기",
      }}
    />
    <Stack.Screen
      name="SelectMenuScreen"
      component={SelectMenuScreen}
      options={{
        title: "메뉴 고르기",
      }}
    />
    <Stack.Screen
      name="SetMatchingTimeScreen"
      component={SetMatchingTimeScreen}
      options={{
        title: "매칭 시간 설정",
      }}
    />
  </Stack.Navigator>
);
