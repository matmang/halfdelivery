// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import TempHome from "../screens/Main/TempHomeScreen";
// import MatchingList from "../screens/Main/MatchingListScreen";

// import MatchingReqClient from "../screens/Main/MatchingReqClientScreen";
// import MatchingReqHost from "../screens/Main/MatchingReqHostScreen";
// import MatchingSuccess from "../screens/Main/MatchingSuccessScreen";
// import MatchingFailed from "../screens/Main/MatchingFailedScreen";
// import InfoBoardScreen from "../screens/Main/InfoBoardScreen";
// import PoliciesBoard from "../screens/Main/PoliciesBoardScreen";
// import TempSendMsg from "../screens/Main/TempSendMsgScreen";
// import SetMatchingTime from "../screens/Main/SetMatchingTimeScreen";

// const Main = createStackNavigator();
// const Chat = createStackNavigator();

// export default () => (
//   <Main.Navigator initialRouteName="TempHome" screenOptions={{}}>
//     <Main.Screen
//       name="TempHome"
//       component={TempHome}
//       options={{
//         title: "(임시) 홈",
//       }}
//     />
//     <Main.Screen
//       name="SetMatchingTime"
//       component={SetMatchingTime}
//       options={{
//         title: "매칭 시간 설정",
//       }}
//     />
//     {/* <Chat.Screen
//       name="Channel"
//       component={Channel}
//       options={{
//         title: "채널",
//       }}
//     /> */}
//     <Main.Screen
//       name="TempSendMsg"
//       component={TempSendMsg}
//       options={{
//         title: "메시지 테스트",
//       }}
//     />
//     <Main.Screen
//       name="MatchingList"
//       component={MatchingList}
//       options={{
//         title: "매칭 리스트",
//       }}
//     />
//     <Main.Screen
//       name="CreateMatching"
//       component={CreateMatchingScreen}
//       options={{
//         title: "매칭방 만들기",
//       }}
//     />
//     <Main.Screen
//       name="MatchingReqHost"
//       component={MatchingReqHost}
//       options={{
//         title: "매칭 요청중 - Host",
//       }}
//     />
//     <Main.Screen
//       name="MatchingReqClient"
//       component={MatchingReqClient}
//       options={{
//         title: "매칭 요청하기 - Client",
//       }}
//     />
//     <Main.Screen
//       name="MatchingSuccess"
//       component={MatchingSuccess}
//       options={{
//         title: "매칭 성공",
//       }}
//     />
//     <Main.Screen
//       name="MatchingFailed"
//       component={MatchingFailed}
//       options={{
//         title: "매칭 실패",
//       }}
//     />
//     <Main.Screen
//       name="InfoBoard"
//       component={InfoBoardScreen}
//       options={{
//         title: "공지사항",
//       }}
//     />
//     <Main.Screen
//       name="PoliciesBoard"
//       component={PoliciesBoard}
//       options={{
//         title: "약관 및 정책",
//       }}
//     />
//   </Main.Navigator>
// );
