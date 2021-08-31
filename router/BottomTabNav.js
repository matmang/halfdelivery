import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

//todo import ChatScreen from ...
//todo import MyInfoScreen from ...

import MainStack from "./MainStack";
import CreateMatching from "../screens/Main/CreateMatching";
import TempMyInfo from "../screens/Main/TempMyInfo";

const Tab = createBottomTabNavigator();
const BottomTabNav = () => {
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
        component={CreateMatching}
        name="CreateMatching__"
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
        name="TempMyInfo"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="man" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
