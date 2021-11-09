import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";

import btStoreStack from "./BttmTabStacks/btStoreStack";
import btPartnerStack from "./BttmTabStacks/btPartnerStack";
import btHomeStack from "./BttmTabStacks/btHomeStack";
import btOrderInfoStack from "./BttmTabStacks/btOrderInfoStack";
import btChatRoomStack from "./BttmTabStacks/btChatRoomStack";
import colors from "../../colors";
import images from "../../images";
import styled from "styled-components";

import storeOn from "../../assets/images/BottomTabNav/storeOn.png";
import partnerOn from "../../assets/images/BottomTabNav/partnerOn.png";
import halfdOn from "../../assets/images/BottomTabNav/halfdOn.png";
import orderinfoOn from "../../assets/images/BottomTabNav/orderinfoOn.png";
import talkOn from "../../assets/images/BottomTabNav/talkOn.png";

import empty from "../../assets/images/empty.png";

const Tab = createBottomTabNavigator();

const BottomTabView = styled.View`
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  flex-direction: row;

  height: 80px;
  width: 100%;
  position: absolute;
  bottom: 2px;
`;

const BottomTab = (props) => {
  return (
    <BottomTabView>
      <Image source={props} />
    </BottomTabView>
  );
};

const customBottomTabNEW = () => {
  // const [image, setImage] = useState(storeOn); //! 리액트훅 Tab 네비게이션 prop 안에 못 넣는다..!

  return (
    <Tab.Navigator
      initialRouteName="Stores"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        // tabBarItemStyle: {
        //   borderColor: "black",
        //   borderWidth: 2,
        //   height: 70,
        // },
        tabBarIcon: () => <Image source={empty} />,
      }}
    >
      <Tab.Screen
        component={btStoreStack}
        name="Store"
        options={{
          tabBarBackground: () => {
            return BottomTab(storeOn);
          },
        }}
      />
      <Tab.Screen
        component={btPartnerStack}
        name="Partner"
        options={{
          tabBarBackground: () => {
            return BottomTab(partnerOn);
          },
        }}
      />
      <Tab.Screen
        component={btHomeStack}
        name="btHomeStack"
        options={{
          tabBarBackground: () => {
            return BottomTab(halfdOn);
          },
        }}
      />
      <Tab.Screen
        component={btOrderInfoStack}
        name="OrderInfo"
        options={{
          tabBarBackground: () => {
            return BottomTab(orderinfoOn);
          },
        }}
      />
      <Tab.Screen
        component={btChatRoomStack}
        name="ChatRoom"
        options={{
          tabBarBackground: () => {
            return BottomTab(talkOn);
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default customBottomTabNEW;
