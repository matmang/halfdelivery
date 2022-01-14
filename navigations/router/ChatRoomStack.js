import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Pressable,
  Button,
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
  Modal,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import logos from "../../images";
import { FontAwesome, Feather } from "@expo/vector-icons";
import ChatListScreen from "../../screens/Main/ChatRoomStack/ChatListScreen";
import ChatRoomScreen from "../../screens/Main/ChatRoomStack/ChatRoomScreen";
import ChatUserScreen from "../../screens/Main/ChatRoomStack/ChatUsersScreen";
import { User } from "../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../colors";

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
    //! 여기(screenOptions) 에다가 header 컴포넌트 바로 넣으면, "ChatRoomScreen" 에서 우측 상단 버튼 안 보임.
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name="ChatRoomScreen"
      component={ChatRoomScreen}
      options={({ navigation }) => ({
        title: "OOOO 매칭방",
        headerTitleStyle: {
          color: "white",
          fontFamily: "noto-regular",
          fontSize: 17,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.mainBlue,
          // alignItems: "center",
          // justifyContent: "center",
          // flex: 1,
        },
        headerLeft: () => (
          <Pressable style={{ marginLeft: 20 }} onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </Pressable>
        ),
        headerRight: (props) => (
          // <Button
          //   onPress={() => navigation.navigate("ChatListScreen")} //! useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
          //   title="채팅방 목록"
          //   color="grey"
          // />
          //! screen 과의 상호작용은, screen 컴포넌트 내에서 코드작성해야 한다. 참고: https://reactnavigation.org/docs/header-buttons/#header-interaction-with-its-screen-component
          <Pressable style={{ marginRight: 20 }} onPress={() => {}}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </Pressable>
        ),
      })}
    />
    <Stack.Screen
      name="ChatUserScreen"
      component={ChatUserScreen}
      options={{
        title: "채팅 유저 리스트",
      }}
    />
  </Stack.Navigator>
);
