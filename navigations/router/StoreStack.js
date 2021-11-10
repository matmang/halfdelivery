import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, SafeAreaView, Button } from "react-native";

import logos from "../../images";

import SelectMenuScreen from "../../screens/Main/StoreStack/SelectMenuScreen";
import SetMatchingTimeScreen from "../../screens/Main/StoreStack/SetMatchingTimeScreen";
import ChatRoomScreen from "../../screens/Main/ChatRoomStack/ChatRoomScreen";
import RequestMatchingScreen from "../../screens/Main/StoreStack/RequestMatchingScreen";
import HomeScreen from "../../screens/Main/HomeStack/HomeScreen";

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
    initialRouteName="SelectMenuScreen"
    screenOptions={{
      header: (props) => <LogoHeader {...props} />,
    }}
  >
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
    <Stack.Screen
      name="RequestMatchingScreen"
      component={RequestMatchingScreen}
      options={{
        title: "매칭요청중",
      }}
    />

    {/* 매칭시간 설정후, 파트너가 입장시, 채팅방으로 이동해야함. */}
    <Stack.Screen
      name="ChatRoomScreen"
      component={ChatRoomScreen}
      options={({ navigation }) => ({
        title: "채팅방",
        // headerRight: () => (
        //   <Button
        //     onPress={() => navigation.navigate("ChatListScreen")} // ? useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
        //     title="채팅방 목록"
        //     color="grey"
        //   />
        // ),
      })}
    />
  </Stack.Navigator>
);
