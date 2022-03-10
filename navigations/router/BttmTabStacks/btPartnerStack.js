import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Image, Text, SafeAreaView, Button } from "react-native";
import logos from "../../../images";
import styled from "styled-components";
import colors from "../../../colors";
import { width, height } from "../../../utils";
import { MatchingWaitingScreenHeader } from "../../../screens/screenHeaders";
import MatchingListScreen from "../../../screens/Main/PartnerStack/MatchingListScreen";
import MatchingWaitingScreen from "../../../screens/Main/MatchingWaitingScreen";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MatchingListScreen">
    <Stack.Screen name="MatchingListScreen" component={MatchingListScreen} />
    <Stack.Screen
      name="MatchingWaitingScreen"
      component={MatchingWaitingScreen}
      options={{
        header: (props) => <MatchingWaitingScreenHeader />,
      }}
    />
  </Stack.Navigator>
);
