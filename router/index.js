import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import TempHome from "../screens/Main/TempHome";
import MatchingList from "../screens/Main/MatchingList";
import CreateMatching from "../screens/Main/CreateMatching";
import MatchingReqClient from "../screens/Main/MatchingReqClient";
import MatchingReqHost from "../screens/Main/MatchingReqHost";
import MatchingSuccess from "../screens/Main/MatchingSuccess";
import MatchingFailed from "../screens/Main/MatchingFailed";
import InfoBoard from "../screens/Main/InfoBoard";
import PoliciesBoard from "../screens/Main/PoliciesBoard";
import TempSendMsg from "../screens/Main/TempSendMsg";
import SetMatchingTime from "../screens/Main/SetMatchingTime";
import BottomTabNav from "./BottomTabNav";

const Root = createStackNavigator();

const Router = () => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen component={BottomTabNav} name="BottomTabNav" />
    </Root.Navigator>
  );
};

export default Router;
