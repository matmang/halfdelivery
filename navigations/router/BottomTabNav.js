import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import StoreStack from "./BttmTabStacks/StoreStack";
import PartnerStack from "./BttmTabStacks/PartnerStack";
import HomeStack from "./BttmTabStacks/HomeStack";
import OrderInfoStack from "./BttmTabStacks/OrderInfoStack";
import ChatRoomStack from "./BttmTabStacks/ChatRoomStack";
import colors from "../../colors";

const Tab = createBottomTabNavigator();
export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Stores"
      screenOptions={{
        showLabel: false,
        tabBarInactiveTintColor: "lightgrey",
        tabBarActiveTintColor: colors.mainBlue,
        tabBarActiveBackgroundColor: colors.mainPink,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        component={StoreStack}
        name="Store"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={PartnerStack}
        name="Partner"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="people" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={OrderInfoStack}
        name="OrderInfo"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="reorder-four" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ChatRoomStack}
        name="ChatRoom"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbox" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
