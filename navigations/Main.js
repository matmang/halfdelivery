import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TempHome from "../screens/Main/TempHome";
import MatchingList from "../screens/Main/MatchingList";
import CreateMatching from "../screens/Main/CreateMatching";
import MatchingRequestClient from "../screens/Main/MatchingRequestClient";
import MatchingRequestHost from "../screens/Main/MatchingRequestHost";
import MatchingSuccess from "../screens/Main/MatchingSuccess";
import MatchingFailed from "../screens/Main/MatchingFailed";
import InfoBoard from "../screens/Main/InfoBoard";
import PoliciesBoard from "../screens/Main/PoliciesBoard";
import TempSendMsg from "../screens/Main/TempSendMsg";

const Main = createStackNavigator();
const Chat = createStackNavigator();

export default () => (
  <Main.Navigator initialRouteName="TempHome" screenOptions={{}}>
    <Main.Screen
      name="TempHome"
      component={TempHome}
      options={{
        title: "(임시) 홈",
      }}
    />
    {/* <Chat.Screen
      name="Channel"
      component={Channel}
      options={{
        title: "채널",
      }}
    /> */}
    <Main.Screen
      name="TempSendMsg"
      component={TempSendMsg}
      options={{
        title: "메시지 테스트",
      }}
    />
    <Main.Screen
      name="MatchingList"
      component={MatchingList}
      options={{
        title: "매칭 리스트",
      }}
    />
    <Main.Screen
      name="CreateMatching"
      component={CreateMatching}
      options={{
        title: "매칭방 만들기",
      }}
    />
    <Main.Screen
      name="MatchingRequestHost"
      component={MatchingRequestHost}
      options={{
        title: "매칭 요청중 - Host",
      }}
    />
    <Main.Screen
      name="MatchingRequestClient"
      component={MatchingRequestClient}
      options={{
        title: "매칭 요청하기 - Client",
      }}
    />
    <Main.Screen
      name="MatchingSuccess"
      component={MatchingSuccess}
      options={{
        title: "매칭 성공",
      }}
    />
    <Main.Screen
      name="MatchingFailed"
      component={MatchingFailed}
      options={{
        title: "매칭 실패",
      }}
    />
    <Main.Screen
      name="InfoBoard"
      component={InfoBoard}
      options={{
        title: "공지사항",
      }}
    />
    <Main.Screen
      name="PoliciesBoard"
      component={PoliciesBoard}
      options={{
        title: "약관 및 정책",
      }}
    />
  </Main.Navigator>
);
