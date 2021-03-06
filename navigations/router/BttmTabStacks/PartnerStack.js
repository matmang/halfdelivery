import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Image, Text, SafeAreaView, Button } from "react-native";

import logos from "../../../images";

import MatchingListScreen from "../../../screens/Main/PartnerStack/MatchingListScreen";
import _MatchingListScreen from "../../../screens/Main/PartnerStack/_MatchingListScreen";

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
    initialRouteName="_MatchingListScreen"
    screenOptions={{
      header: (props) => <LogoHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="_MatchingListScreen"
      component={_MatchingListScreen}
      options={{
        header: (props) => <LogoHeader {...props} />,
        title: "_매칭 리스트",
      }}
    />
    <Stack.Screen
      name="MatchingListScreen"
      component={MatchingListScreen}
      options={{
        header: (props) => <LogoHeader {...props} />,
        title: "매칭 리스트",
      }}
    />
  </Stack.Navigator>
);
