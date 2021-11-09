import React from "react";
import { SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNav from "./BottomTabNav";
import StoreStack from "./StoreStack";
import PartnerStack from "./PartnerStack";
import HomeStack from "./HomeStack";
import OrderInfoStack from "./OrderInfoStack";
import ChatRoomStack from "./ChatRoomStack";

const Root = createStackNavigator();

const Router = () => {
  return (
    // <Test/>
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="BottomTabNav" component={BottomTabNav} />
      <Root.Screen name="StoreStack" component={StoreStack} />
      <Root.Screen name="PartnerStack" component={PartnerStack} />
      {/* <Root.Screen name="HomeStack" component={HomeStack} /> */}
      {/* <Root.Screen name="OrderInfoStack" component={OrderInfoStack} /> */}
      <Root.Screen name="ChatRoomStack" component={ChatRoomStack} />
    </Root.Navigator>
  );
};

export default Router;
