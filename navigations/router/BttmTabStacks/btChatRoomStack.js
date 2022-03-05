import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Pressable,
  Button,
  View,
  Text,
  Image,
  useWindowDimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import logos from "../../../images";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { User } from "../../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";
import colors from "../../../colors";
import ChatListScreen from "../../../screens/Main/ChatRoomStack/ChatListScreen";
import ChatRoomScreen from "../../../screens/Main/ChatRoomStack/ChatRoomScreen";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

const ChatListHeader = (props) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [userImgUri, setUserImgUri] = useState("");
  const navigation = useNavigation();

  // ? DataStore 에서, authUser 의 User 데이터 가져오기.
  useEffect(() => {
    const fetchAuthUser = async () => {
      await Auth.currentAuthenticatedUser().then(setAuthUser);
    };
    fetchAuthUser();
  }, []);

  if (!authUser) {
    return <ActivityIndicator />;
  }

  // ? imgaeUri 가져오기.
  const fetchImageUri = async () => {
    const user = await DataStore.query(User, authUser.attributes.sub);
    setUserImgUri(user?.imageUri);
  };
  fetchImageUri();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // padding: 10,
      }}
    >
      {userImgUri !== "" && (
        <Image
          source={{
            uri: userImgUri,
          }}
          style={{ width: 30, height: 30, borderRadius: 30 }}
        />
      )}
      <View style={{ flex: 1 }}>
        <Text ellipsizeMode="tail" numberOfLines={1}>
          {authUser.attributes.email}
        </Text>
      </View>
      <Text
        style={{
          textAlign: "center",
          marginLeft: 70,
          fontWeight: "bold",
          fontSize: 20,
        }}
      >
        채팅방 리스트
      </Text>
      <Feather
        name="camera"
        size={24}
        color={"black"}
        style={{ marginLeft: 40, marginRight: 5 }}
      />
      <Button
        onPress={() => navigation.navigate("ChatUserScreen")} // ? useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
        title="유저 목록"
        color="grey"
      />
    </View>
  );
};

export default () => (
  <Stack.Navigator
    initialRouteName="ChatListScreen"
    // ! 여기(screenOptions) 에다가 header 컴포넌트 바로 넣으면, "ChatRoomScreen" 에서 우측 상단 버튼 안 보임.
    screenOptions={{ headerShown: true }}
  >
    <Stack.Screen
      name="ChatListScreen"
      component={ChatListScreen}
      options={({ navigation }) => ({
        title: "하프톡",
        headerTitleStyle: {
          color: "white",
          fontFamily: "noto-regular",
          fontSize: 17,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
          // alignItems: "center",
          // justifyContent: "center",
          // flex: 1,
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        ),
      })}
    />

    <Stack.Screen
      name="ChatRoomScreen"
      component={ChatRoomScreen}
      options={({ navigation }) => ({
        title: "OOOO 매칭방",
        headerTitleStyle: {
          color: "white",
          fontFamily: "noto-regular",
          fontSize: 17,
        },
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: colors.primaryBlue,
          // alignItems: "center",
          // justifyContent: "center",
          // flex: 1,
        },
        headerLeft: () => (
          <AntDesign
            name="arrowleft"
            size={24}
            color="white"
            style={{ marginLeft: 20 }}
            onPress={navigation.goBack}
          />
        ),
        headerRight: (props) => (
          // <Button
          //   onPress={() => navigation.navigate("ChatListScreen")} //! useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
          //   title="채팅방 목록"
          //   color="grey"
          // />
          //! screen 과의 상호작용은, screen 컴포넌트 내에서 코드작성해야 한다. 참고: https://reactnavigation.org/docs/header-buttons/#header-interaction-with-its-screen-component

          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="white"
            style={{ marginRight: 20 }}
            onPress={() => {}}
          />
        ),
      })}
    />
  </Stack.Navigator>
);
