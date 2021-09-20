import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TempHomeScreen from "../screens/Main/TempHomeScreen";
import MatchingListScreen from "../screens/Main/MatchingListScreen";
import SelectStoreScreen from "../screens/Main/SelectStoreScreen";
import MatchingReqClientScreen from "../screens/Main/MatchingReqClientScreen";
import MatchingReqHostScreen from "../screens/Main/MatchingReqHostScreen";
import MatchingSuccessScreen from "../screens/Main/MatchingSuccessScreen";
import MatchingFailedScreen from "../screens/Main/MatchingFailedScreen";
import InfoBoardScreen from "../screens/Main/InfoBoardScreen";
import PoliciesBoardScreen from "../screens/Main/PoliciesBoardScreen";
import TempSendMsgScreen from "../screens/Main/TempSendMsgScreen";
import SetMatchingTimeScreen from "../screens/Main/SetMatchingTimeScreen";
import TestScreen from "../screens/Main/TestScreen";
import SelectMenuScreen from "../screens/Main/SelectMenuScreen";
import ChatListScreen from "../screens/Chat/ChatListScreen";
import ChatRoomScreen from "../screens/Chat/ChatRoomScreen";
import { View, Image, Text, SafeAreaView, Button } from "react-native";
import halfLogo from "../logos";
import logos from "../logos";

const Main = createStackNavigator();
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
      {/* <Text>{props.title}</Text> */}
    </SafeAreaView>
  );
};

export default () => (
  <Main.Navigator initialRouteName="MatchingListScreen" screenOptions={{}}>
    <Main.Screen
      name="MatchingListScreen"
      component={MatchingListScreen}
      options={{
        header: (props) => <LogoHeader {...props} />,
        title: "매칭 리스트",
      }}
    />
    <Main.Screen
      name="SelectStoreScreen"
      component={SelectStoreScreen}
      options={{
        title: "음식점 고르기",
      }}
    />
    <Main.Screen
      name="SelectMenuScreen"
      component={SelectMenuScreen}
      options={{
        title: "선택한 식당",
      }}
    />
    <Main.Screen
      name="SetMatchingTimeScreen"
      component={SetMatchingTimeScreen}
      options={{
        title: "매칭 시간 설정",
      }}
    />
    <Main.Screen
      name="ChatRoomScreen"
      component={ChatRoomScreen}
      options={({ navigation }) => ({
        title: "채팅방",
        headerRight: () => (
          <Button
            onPress={() => navigation.navigate("ChatListScreen")} // ? useNavigation 훅 대신에, options 의 navigation 프로퍼티를 사용해야 한다!!
            title="채팅방 목록"
            color="grey"
          />
        ),
      })}
    />
    <Main.Screen
      name="ChatListScreen"
      component={ChatListScreen}
      options={{
        title: "채팅방 목록",
      }}
    />
    {/* //! 아래는 아직 쓰지 않는 Screen 임. */}
    {/* <Main.Screen
      name="TestScreen"
      component={TestScreen}
      options={{
        title: "Test",
      }}
    />
    <Main.Screen
      name="TempHomeScreen"
      component={TempHomeScreen}
      options={{
        title: "(임시) 홈",
      }}
    />
    <Main.Screen
      name="MatchingReqHostScreen"
      component={MatchingReqHostScreen}
      options={{
        title: "매칭 요청중 - Host",
      }}
    />
    <Main.Screen
      name="MatchingReqClientScreen"
      component={MatchingReqClientScreen}
      options={{
        title: "매칭 요청하기 - Client",
      }}
    />
    <Main.Screen
      name="MatchingSuccessScreen"
      component={MatchingSuccessScreen}
      options={{
        title: "매칭 성공",
      }}
    />
    <Main.Screen
      name="MatchingFailedScreen"
      component={MatchingFailedScreen}
      options={{
        title: "매칭 실패",
      }}
    />
    <Main.Screen
      name="TempSendMsgScreen"
      component={TempSendMsgScreen}
      options={{
        title: "메시지 테스트",
      }}
    />
    <Main.Screen
      name="InfoBoardScreen"
      component={InfoBoardScreen}
      options={{
        title: "공지사항",
      }}
    />
    <Main.Screen
      name="PoliciesBoardScreen"
      component={PoliciesBoardScreen}
      options={{
        title: "약관 및 정책",
      }}
    /> */}
  </Main.Navigator>
);
