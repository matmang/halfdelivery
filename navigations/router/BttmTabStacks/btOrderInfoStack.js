import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../../screens/Main/ProfileStack/ProfileScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import colors from "../../../colors";
import { height, width } from "../../../utils";
import MyInfoScreen from "../../../screens/Main/ProfileStack/MyInfoScreen";
import AnnouncementScreen from "../../../screens/Main/ProfileStack/AnnouncementScreen";
import UpdateSchoolScreen from "../../../screens/Main/ProfileStack/UpdateSchoolScreen";
import UpdateBankScreen from "../../../screens/Main/ProfileStack/UpdateBankScreen";
import UpdateAccountScreen from "../../../screens/Main/ProfileStack/UpdateAccountScreen";
import UpdatePhoneNumberScreen from "../../../screens/Main/ProfileStack/UpdatePhoneNumberScreen";
import AccountScreen from "../../../screens/Main/ProfileStack/AccountScreen";

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
    <Stack.Screen
      name="AnnouncementScreen"
      component={AnnouncementScreen}
      options={({ navigation }) => ({
        title: "공지사항",
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
      name="UpdateSchoolScreen"
      component={UpdateSchoolScreen}
      options={({ navigation }) => ({
        title: "학과 정보 관리",
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
      name="UpdateBankScreen"
      component={UpdateBankScreen}
      options={({ navigation }) => ({
        title: "금융 정보 관리",
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
      name="UpdateAccountScreen"
      component={UpdateAccountScreen}
      options={({ navigation }) => ({
        title: "나의 계정 관리",
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
      name="UpdatePhoneNumberScreen"
      component={UpdatePhoneNumberScreen}
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
      name="CheckInfoScreen"
      component={CheckInfoScreen}
      options={({ navigation }) => ({
        title: "회원 정보 확인",
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
      name="AccountScreen"
      component={AccountScreen}
      options={({ navigation }) => ({
        title: "하프딜리버리 계정",
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
