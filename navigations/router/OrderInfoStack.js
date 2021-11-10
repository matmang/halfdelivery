import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../images";

import MatchingSuccessScreen from "../../screens/Main/OrderInfoStack/MatchingSuccessScreen";
import MatchingFailedScreen from "../../screens/Main/OrderInfoStack/MatchingFailedScreen";
import MatchingReqHostScreen from "../../screens/Main/OrderInfoStack/MatchingReqHostScreen";
import MatchingReqClientScreen from "../../screens/Main/OrderInfoStack/MatchingReqClientScreen";

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
    initialRouteName="MatchingSuccessScreen"
    screenOptions={{
      header: (props) => <LogoHeader {...props} />,
    }}
  >
    <Stack.Screen
      name="MatchingSuccessScreen"
      component={MatchingSuccessScreen}
      options={{
        header: (props) => <LogoHeader {...props} />,
        title: "매칭 성공",
      }}
    />
    <Stack.Screen
      name="MatchingFailedScreen"
      component={MatchingFailedScreen}
      options={{
        title: "매칭 실패",
      }}
    />
    <Stack.Screen
      name="MatchingReqHostScreen"
      component={MatchingReqHostScreen}
      options={{
        title: "매칭 요청 - 호스트",
      }}
    />
    <Stack.Screen
      name="MatchingReqClientScreen"
      component={MatchingReqClientScreen}
      options={{
        title: "매칭 요청 - 클라이언트",
      }}
    />
  </Stack.Navigator>
);
