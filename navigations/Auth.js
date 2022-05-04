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
import { height, width } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import SignIn from "../screens/Auth/SignIn";

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
      name="SignIn"
      component={SignIn}
      options={({ navigation }) => ({
        title: "로그인",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          marginTop: height * 20,
          fontFamily: "gothica1-medium",
          fontSize: 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => {},
      })}
    />
    <Auth.Screen
      name="SignUpAuth"
      component={SignUpAuth}
      options={({ navigation }) => ({
        title: "회원 정보",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          marginTop: height * 20,
          fontFamily: "gothica1-medium",
          fontSize: 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => {},
      })}
    />
    <Auth.Screen
      name="SignUpAuthConfirm"
      component={SignUpAuthConfirm}
      options={({ navigation }) => ({
        title: "회원 정보",
        headerTitleAlign: "center",
        headerStyle: {
          elevation: 0,
          backgroundColor: "white",
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          marginTop: height * 20,
          fontFamily: "gothica1-medium",
          fontSize: 17,
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => {},
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
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
            <Image
              source={require("../assets/images/left-arrow.png")}
              style={{
                width: width * 20,
                height: height * 17.22,
                marginTop: height * 20,
                marginLeft: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
            <Image
              source={require("../assets/images/delete.png")}
              style={{
                width: width * 17.22,
                height: height * 17.22,
                marginTop: height * 20,
                marginRight: width * 24,
              }}
            />
          </TouchableOpacity>
        ),
      })}
    />
  </Auth.Navigator>
);
