import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";

import ProfileScreen from "../../../screens/Main/ProfileStack/ProfileScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import colors from "../../../colors";
import { height, width } from "../../../utils";
import MyInfoScreen from "../../../screens/Main/ProfileStack/MyInfoScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="ProfileScreen">
    <Stack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation }) => ({
        title: "내 정보",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
          height: height * 56,
          marginTop: height * 20,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "noto-medium",
          fontSize: width * 17,
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HomeHeaderButton}>
            <Item
              title="Notification"
              iconName={
                Platform.OS === "android"
                  ? "md-notifications"
                  : "ios-notifications"
              }
              onPress={() => alert("알림")}
            />
          </HeaderButtons>
        ),
      })}
    />
    <Stack.Screen
      name="MyInfoScreen"
      component={MyInfoScreen}
      options={({ navigation }) => ({
        title: "내 정보",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
          height: height * 56,
          marginTop: height * 20,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "noto-medium",
          fontSize: width * 17,
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HomeHeaderButton}>
            <Item
              title="Notification"
              iconName={
                Platform.OS === "android"
                  ? "md-notifications"
                  : "ios-notifications"
              }
              onPress={() => alert("알림")}
            />
          </HeaderButtons>
        ),
      })}
    />
  </Stack.Navigator>
);
