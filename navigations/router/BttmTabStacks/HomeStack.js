import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Image, SafeAreaView, Platform } from "react-native";
import logos from "../../../images";

import HomeScreen from "../../../screens/Main/HomeStack/HomeScreen";
import TestScreen from "../../../screens/Main/HomeStack/TestScreen";
import ProfileScreen from "../../../screens/Main/ProfileStack/ProfileScreen";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchScreen from "../../../screens/Main/HomeStack/SearchScreen";
import SearchBar from "../../../components/Main/SearchBar";

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
  <Stack.Navigator initialRouteName="HomeScreen">
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={({ navigation }) => ({
        title: "홈",
        headerTitleAlign: "center",
        headerTitle: (props) => <LogoHeader {...props} />,
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
            <Item
              title="Profile"
              iconName={Platform.OS === "android" ? "md-person" : "ios-person"}
              onPress={() => {
                navigation.navigate("Profile");
              }}
            />
          </HeaderButtons>
        ),
      })}
    />
    <Stack.Screen
      name="TestScreen"
      component={TestScreen}
      options={{
        title: "테스트 스크린",
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "프로필",
        headerTitleAlign: "center",
        headerTitle: (props) => <LogoHeader {...props} />,
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
            <Item
              title="Profile"
              iconName={Platform.OS === "android" ? "md-person" : "ios-person"}
            />
          </HeaderButtons>
        ),
      }}
    />
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
