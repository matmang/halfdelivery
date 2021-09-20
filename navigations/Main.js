import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

<<<<<<< Updated upstream
import TempHome from '../screens/Main/TempHome';
import MakeMatching from '../screens/Main/MakeMatching';
import MatchingRequestClient from '../screens/Main/MatchingRequestClient';
import MatchingRequestHost from '../screens/Main/MatchingRequestHost';
import MatchingSuccess from '../screens/Main/MatchingSuccess';
import MatchingFailed from '../screens/Main/MatchingFailed';
import InfoBoard from '../screens/Main/InfoBoard';
import PoliciesBoard from '../screens/Main/PoliciesBoard';
import TempSendMsg from '../screens/Main/TempSendMsg';
=======
import TempHome from "../screens/Main/TempHomeScreen";
import MatchingList from "../screens/Main/MatchingListScreen";
import CreateMatchingScreen from "../screens/Main/CreateMatchingScreen";
import MatchingReqClient from "../screens/Main/MatchingReqClientScreen";
import MatchingReqHost from "../screens/Main/MatchingReqHostScreen";
import MatchingSuccess from "../screens/Main/MatchingSuccessScreen";
import MatchingFailed from "../screens/Main/MatchingFailedScreen";
import InfoBoardScreen from "../screens/Main/InfoBoardScreen";
import PoliciesBoard from "../screens/Main/PoliciesBoardScreen";
import TempSendMsg from "../screens/Main/TempSendMsgScreen";
import SetMatchingTime from "../screens/Main/SetMatchingTimeScreen";
import Profile from "../screens/Main/Profile";
>>>>>>> Stashed changes

const Main = createStackNavigator();

export default () => (
  <Main.Navigator initialRouteName="TempHome" screenOptions={{}}>
    <Main.Screen
      name="TempHome"
      component={TempHome}
      options={{
        title: '(임시) 홈',
      }}
    />
    <Main.Screen
      name="TempSendMsg"
      component={TempSendMsg}
      options={{
        title: '메시지 테스트',
      }}
    />
    <Main.Screen
      name="MakeMatching"
      component={MakeMatching}
      options={{
        title: '매칭방 만들기',
      }}
    />
    <Main.Screen
      name="MatchingRequestHost"
      component={MatchingRequestHost}
      options={{
        title: '매칭 요청중 - Host',
      }}
    />
    <Main.Screen
      name="MatchingRequestClient"
      component={MatchingRequestClient}
      options={{
        title: '매칭 요청하기 - Client',
      }}
    />
    <Main.Screen
      name="MatchingSuccess"
      component={MatchingSuccess}
      options={{
        title: '매칭 성공',
      }}
    />
    <Main.Screen
      name="MatchingFailed"
      component={MatchingFailed}
      options={{
        title: '매칭 실패',
      }}
    />
    <Main.Screen
      name="InfoBoard"
      component={InfoBoard}
      options={{
        title: '공지사항',
      }}
    />
    <Main.Screen
      name="PoliciesBoard"
      component={PoliciesBoard}
      options={{
        title: '약관 및 정책',
      }}
    />
    <Main.Screen
      name="Profile"
      component={Profile}
      options={{
        title: "프로필",
      }}
    />
  </Main.Navigator>
);
