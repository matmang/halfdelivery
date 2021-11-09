import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, View, SafeAreaView } from "react-native";

import btStoreStack from "./BttmTabStacks/btStoreStack";
import btPartnerStack from "./BttmTabStacks/btPartnerStack";
import btHomeStack from "./BttmTabStacks/btHomeStack";
import btOrderInfoStack from "./BttmTabStacks/btOrderInfoStack";
import btChatRoomStack from "./BttmTabStacks/btChatRoomStack";
import colors from "../../colors";
import images from "../../images";
import styled from "styled-components";
// import Logo from "./logo.svg";

const Footer = styled.View`
  position: absolute;
  bottom: 10px;
`;

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, onSource, offSource) => {
  return (
    <Footer style={styles.otherTabBarIcon}>
      <Image source={focused ? onSource : offSource} />
    </Footer>
  );
};

const CenterTabBarIcon = (focused, onSource, offSource) => {
  return (
    <Footer style={styles.centerTabBarIcon}>
      <Image source={focused ? onSource : offSource} />
    </Footer>
  );
};

const customBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Stores"
      screenOptions={{
        showLabel: false,
        // tabBarInactiveTintColor: "lightgrey",
        // tabBarActiveTintColor: colors.mainBlue,
        // tabBarActiveBackgroundColor: colors.mainPink,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          height: 62,
          // top: 30,
          // bottom: 50,
          // left: 10,
          // right: 10,
          // borderRadius: 10,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        component={btStoreStack}
        name="Store"
        options={{
          tabBarIcon: ({ focused }) => {
            return TabBarIcon(focused, images.storeOn, images.storeOff);
          },
        }}
      />
      <Tab.Screen
        component={btPartnerStack}
        name="Partner"
        options={{
          tabBarIcon: ({ focused }) => {
            return TabBarIcon(focused, images.partnerOn, images.partnerOff);
          },
        }}
      />
      <Tab.Screen
        component={btHomeStack}
        name="btHomeStack"
        options={{
          tabBarIcon: ({ focused }) => {
            return CenterTabBarIcon(focused, images.halfDOn, images.halfDOff);
          },
        }}
      />
      <Tab.Screen
        component={btOrderInfoStack}
        name="OrderInfo"
        options={{
          tabBarIcon: ({ focused }) => {
            return TabBarIcon(focused, images.orderLogOn, images.orderLogOff);
          },
        }}
      />
      <Tab.Screen
        component={btChatRoomStack}
        name="ChatRoom"
        options={{
          tabBarIcon: ({ focused }) => {
            return TabBarIcon(focused, images.talkOn, images.talkOff);
          },
        }}
      />
    </Tab.Navigator>
  );
};

// const BottomTabNav = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Stores"
//       screenOptions={{
//         showLabel: false,
//         tabBarInactiveTintColor: "lightgrey",
//         tabBarActiveTintColor: colors.mainBlue,
//         tabBarActiveBackgroundColor: colors.mainPink,
//         headerShown: false,
//         tabBarShowLabel: false,
//       }}
//     >
//       <Tab.Screen
//         component={StoreStack}
//         name="Store"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="heart" color={color} size={25} />,
//         }}
//       />
//       <Tab.Screen
//         component={PartnerStack}
//         name="Partner"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="people" color={color} size={25} />,
//         }}
//       />
//       <Tab.Screen
//         component={HomeStack}
//         name="Home"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={25} />,
//         }}
//       />
//       <Tab.Screen
//         component={OrderInfoStack}
//         name="OrderInfo"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="reorder-four" color={color} size={25} />,
//         }}
//       />
//       <Tab.Screen
//         component={ChatRoomStack}
//         name="ChatRoom"
//         options={{
//           tabBarIcon: ({ color }) => <Ionicons name="chatbox" color={color} size={25} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

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
  otherTabBarIcon: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  centerTabBarIcon: {
    // backgroundColor: "red",
    backgroundColor: "white",
    width: 73,
    height: 73,
    borderRadius: 73,
    justifyContent: "center",
    alignItems: "center",

    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: -2,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 6,
    // elevation: 5,
  },
});

export default customBottomTab;
