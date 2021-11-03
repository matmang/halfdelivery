import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

import StoreStack from "./BttmTabStacks/StoreStack";
import PartnerStack from "./BttmTabStacks/PartnerStack";
import HomeStack from "./BttmTabStacks/HomeStack";
import OrderInfoStack from "./BttmTabStacks/OrderInfoStack";
import ChatRoomStack from "./BttmTabStacks/ChatRoomStack";
import colors from "../../colors";
import images from "../../images";

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, onSource, offSource) => {
  return <Image source={focused ? onSource : offSource} />;
};

const customBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stores"
      screenOptions={{
        showLabel: false,
        // tabBarInactiveTintColor: "lightgrey",
        // tabBarActiveTintColor: colors.mainBlue,
        tabBarActiveBackgroundColor: colors.mainPink,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          height: 80,
          // bottom: 50,
          left: 10,
          right: 10,
          // borderRadius: 10,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        component={StoreStack}
        name="Store"
        options={{
          tabBarIcon: () => {
            return <Image source={images.storeOff} />;
          },
        }}
      />
      <Tab.Screen
        component={PartnerStack}
        name="Partner"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={OrderInfoStack}
        name="OrderInfo"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="reorder-four" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={ChatRoomStack}
        name="ChatRoom"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbox" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const BottomTabNav = () => {
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
          tabBarIcon: ({ color }) => <Ionicons name="heart" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={PartnerStack}
        name="Partner"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="people" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={OrderInfoStack}
        name="OrderInfo"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="reorder-four" color={color} size={25} />,
        }}
      />
      <Tab.Screen
        component={ChatRoomStack}
        name="ChatRoom"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbox" color={color} size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
});

export default customBottomTab;
