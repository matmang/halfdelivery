import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, SafeAreaView, Platform } from "react-native";
import logos from "../../../images";
import HomeScreen from "../../../screens/Main/HomeStack/HomeScreen";
import TestScreen from "../../../screens/Main/HomeStack/TestScreen";
import ProfileScreen from "../../../screens/Main/ProfileStack/ProfileScreen";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchScreen from "../../../screens/Main/HomeStack/SearchScreen";
import styled from "styled-components";
import colors from "../../../colors";
import Auth from "@aws-amplify/auth";

const Container = styled.View`
  flex-direction: row;
`;

const UserInfo = styled.Text`
  margin-left: 24px;
  font-family: "noto-regular";
  color: ${colors.mainPink};
`;

const UserSchool = styled.Text`
  font-family: "noto-regular";
  color: ${colors.mainPink};
  text-decoration: underline;
`;

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

export default () => {
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUserInfo = await Auth.currentUserInfo();
      setUsername(currentUserInfo.attributes["custom:nickname"]);
      setSchool(currentUserInfo.attributes["custom:school"]);
    };
    fetchUser();
  }, []);
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            backgroundColor: "#22326E",
            shadowOpacity: 0,
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
                onPress={() => alert("??????")}
              />
              <Item
                title="Profile"
                iconName={
                  Platform.OS === "android" ? "md-person" : "ios-person"
                }
                onPress={() => {
                  navigation.navigate("Profile");
                }}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <Container>
              <UserInfo>{username}?????? ?????? </UserInfo>
              <UserSchool>{school}</UserSchool>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{
          title: "????????? ?????????",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "?????????",
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
                onPress={() => alert("??????")}
              />
              <Item
                title="Profile"
                iconName={
                  Platform.OS === "android" ? "md-person" : "ios-person"
                }
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
};
