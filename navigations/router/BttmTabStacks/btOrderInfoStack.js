import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../../../screens/Main/ProfileStack/ProfileScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import colors from "../../../colors";
import { height, width } from "../../../utils";
import MyInfoScreen from "../../../screens/Main/ProfileStack/MyInfoScreen";
import AnnouncementScreen from "../../../screens/Main/ProfileStack/AnnouncementScreen";
import AnnouncementDetailScreen from "../../../screens/Main/ProfileStack/AnnouncementDetailScreen";
import UpdateSchoolScreen from "../../../screens/Main/ProfileStack/UpdateSchoolScreen";
import UpdateBankScreen from "../../../screens/Main/ProfileStack/UpdateBankScreen";
import UpdateAccountScreen from "../../../screens/Main/ProfileStack/UpdateAccountScreen";
import UpdatePhoneNumberScreen from "../../../screens/Main/ProfileStack/UpdatePhoneNumberScreen";
import AccountScreen from "../../../screens/Main/ProfileStack/AccountScreen";
import CheckInfoScreen from "../../../screens/Main/ProfileStack/CheckInfoScreen";
import FAQScreen from "../../../screens/Main/ProfileStack/FAQScreen";
import ConfirmUserInfoScreen from "../../../screens/Main/ProfileStack/ConfirmUserInfoScreen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HomeHeaderButton}>
            <Item
              title="Search"
              iconName={Platform.OS === "android" ? "md-search" : "ios-search"}
              onPress={() =>
                navigation.navigate("HomeStack", {
                  screen: "Search",
                })
              }
            />
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
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
          alignItems: "center",
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/left_arrow_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="AnnouncementDetailScreen"
      component={AnnouncementDetailScreen}
      options={({ navigation }) => ({
        title: "공지사항",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/left_arrow_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "noto-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
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
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/left_arrow_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="ConfirmUserInfoScreen"
      component={ConfirmUserInfoScreen}
      options={({ navigation }) => ({
        title: "회원 정보 확인",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Stack.Screen
      name="FAQScreen"
      component={FAQScreen}
      options={({ navigation }) => ({
        title: "자주 묻는 질문",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: "#ffffff",
        headerTitleStyle: {
          fontFamily: "gothica1-medium",
          fontSize: width * 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../../assets/images/delete_white.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);
