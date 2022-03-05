import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import HomeScreen from "../../../screens/Main/HomeStack/HomeScreen";
import HomeHeaderButton from "../../../components/Main/HomeHeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import SearchScreen from "../../../screens/Main/HomeStack/SearchScreen";
import styled from "styled-components";
import colors from "../../../colors";
import Auth from "@aws-amplify/auth";

import { TouchableOpacity } from "react-native-gesture-handler";
import MakeMatch from "../../../screens/Main/HomeStack/MakeMatch";
import { height } from "../../../utils";
import { useSelector } from "react-redux";

const Container = styled.View`
  flex-direction: row;
`;

const UserInfo = styled.Text`
  margin-left: 24px;
  font-family: "noto-regular";
  color: ${colors.primaryPink};
`;

const UserSchool = styled.Text`
  font-family: "noto-regular";
  color: ${colors.primaryPink};
  text-decoration: underline;
`;

const Stack = createStackNavigator();

export default () => {
  const [username, setUsername] = useState("");
  const [school, setSchool] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const currentUserInfo = await Auth.currentUserInfo();
      setUsername(currentUserInfo.attributes["name"]);
      setSchool(currentUserInfo.attributes["custom:school"]);
    };
    fetchUser();
  }, []);

  const { isMatching } = useSelector((state) => state.usersReducer);

  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        children={({ navigation }) => (
          <HomeScreen isModalVisible={isModalVisible} />
        )}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primaryBlue,
            height: height * 53,
            marginTop: height * 20,
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
          headerLeft: () => (
            <Container>
              <UserInfo>{username}님은 지금 </UserInfo>
              <TouchableOpacity onPress={toggleModal}>
                <UserSchool>{school}</UserSchool>
              </TouchableOpacity>
            </Container>
          ),
        })}
      />
      <Stack.Screen
        name="MakeMatch"
        component={MakeMatch}
        options={({ navigation }) => ({
          title: "",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: colors.primaryBlue,
            height: height * 53,
            marginTop: height * 20,
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
          headerLeft: () => (
            <Container>
              <UserInfo>{username}님은 지금 </UserInfo>
              <TouchableOpacity onPress={toggleModal}>
                <UserSchool>{school}</UserSchool>
              </TouchableOpacity>
            </Container>
          ),
        })}
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
