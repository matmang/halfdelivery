import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";

import ChatListScreen from "../../../screens/Main/ChatRoomStack/ChatListScreen";
import ChatRoomScreen from "../../../screens/Main/ChatRoomStack/ChatRoomScreen";

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
    initialRouteName="ChatRoomScreen"
    // ! 여기(screenOptions) 에다가 header 넣으면, "ChatRoomScreen" 에서 우측 상단 버튼 안 보임.
    // screenOptions={}
  >
    <Stack.Screen
      name="ChatListScreen"
      component={ChatListScreen}
      options={{
        title: "채팅방 리스트",
      }}
    />
    <Stack.Screen
      name="ChatRoomScreen"
      component={ChatRoomScreen}
      options={({ navigation }) => ({
        title: "채팅방",
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate("ChatListScreen")} // ? useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
            title="채팅방 목록"
            color="grey"
          />
        ),
      })}
    />
  </Stack.Navigator>
);
