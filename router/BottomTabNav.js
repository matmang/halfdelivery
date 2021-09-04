import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//todo import ChatScreen from ...
//todo import MyInfoScreen from ...

import MainStack from "./MainStack";
import MatchingStack from "./MatchingStack";
import TempMyInfo from "../screens/Main/TempMyInfoScreen";

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        showLabel: false,
        tabBarInactiveTintColor: "lightgrey",
        tabBarActiveTintColor: "#22326E",
        tabBarActiveBackgroundColor: "#ffb6b6",
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        component={MatchingStack}
        name="TabMatching"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={MainStack}
        name="TabHome"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={TempMyInfo}
        name="TabMyInfo"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="man" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
