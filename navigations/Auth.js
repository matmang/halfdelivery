import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Auth/Welcome";
import SignUpAuth from "../screens/Auth/SignUpAuth";
import SignUpAuthConfirm from "../screens/Auth/SignUpAuthConfirm";
import SignUpSchool from "../screens/Auth/SignUpSchool";
import SignUpBank from "../screens/Auth/SignUpBank";
import SignUpTerms from "../screens/Auth/SignUpTerms";
import FindId from "../screens/Auth/FindId";
import FindPassword from "../screens/Auth/FindPassword";
import FindPasswordConfirm from "../screens/Auth/FindPasswordConfirm";
import { Ionicons } from "@expo/vector-icons";
import { height, width } from "../utils";
import colors from "../colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Platform } from "react-native";

const Auth = createStackNavigator();

export default () => (
  <Auth.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTransparent: true,
    }}
  >
    <Auth.Screen
      name="Welcome"
      component={Welcome}
      options={{
        headerShown: false,
      }}
    />
    <Auth.Screen
      name="SignUpAuth"
      component={SignUpAuth}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => {},
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="SignUpAuthConfirm"
      component={SignUpAuthConfirm}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="SignUpSchool"
      component={SignUpSchool}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="SignUpBank"
      component={SignUpBank}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="SignUpTerms"
      component={SignUpTerms}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="FindId"
      component={FindId}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="FindPassword"
      component={FindPassword}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
    <Auth.Screen
      name="FindPasswordConfirm"
      component={FindPasswordConfirm}
      options={({ navigation }) => ({
        title: "",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
              style={{ marginLeft: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Ionicons
              color={colors.primaryBlue}
              size={width * 24}
              name={Platform.OS === "android" ? "md-close" : "ios-close"}
              style={{ marginRight: width * 24, marginTop: height * 20 }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Auth.Navigator>
);
