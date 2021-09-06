import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TempHomeScreen from "../screens/Main/TempHomeScreen";
import MatchingListScreen from "../screens/Main/MatchingListScreen";
import CreateMatchingScreen from "../screens/Main/CreateMatchingScreen";
import MatchingReqClientScreen from "../screens/Main/MatchingReqClientScreen";
import MatchingReqHostScreen from "../screens/Main/MatchingReqHostScreen";
import MatchingSuccessScreen from "../screens/Main/MatchingSuccessScreen";
import MatchingFailedScreen from "../screens/Main/MatchingFailedScreen";
import InfoBoardScreen from "../screens/Main/InfoBoardScreen";
import PoliciesBoardScreen from "../screens/Main/PoliciesBoardScreen";
import TempSendMsgScreen from "../screens/Main/TempSendMsgScreen";
import SetMatchingTimeScreen from "../screens/Main/SetMatchingTimeScreen";
import TestScreen from "../screens/Main/TestScreen";

const Main = createStackNavigator();
export default () => (
  <Main.Navigator initialRouteName="MatchingListScreen" screenOptions={{}}>
    <Main.Screen
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
      name="SetMatchingTimeScreen"
      component={SetMatchingTimeScreen}
      options={{
        title: "매칭 시간 설정",
      }}
    />
    <Main.Screen
      name="MatchingListScreen"
      component={MatchingListScreen}
      options={{
        title: "매칭 리스트",
      }}
    />
    <Main.Screen
      name="CreateMatchingScreen"
      component={CreateMatchingScreen}
      options={{
        title: "매칭방 만들기",
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
    {/* <Chat.Screen
      name="ChannelScreen"
      component={Channel}
      options={{
        title: "채널",
      }}
    /> */}
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
    />
  </Main.Navigator>
);
