import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

//todo import ChatScreen from ...
import TempHome from "../screens/Main/TempHome";
//todo import MyInfoScreen from ...

import MainStack from "./MainStack";
import InfoBoard from "../screens/Main/InfoBoard";
import PoliciesBoard from "../screens/Main/PoliciesBoard";
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
      {/* <Tab.Screen
        component={InfoBoard}
        name="ChatScreen"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" color={color} size={25} />
          ),
        }}
      /> */}
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
