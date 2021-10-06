import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import colors from "../../../colors";
import { Auth, DataStore } from "aws-amplify";
import { Store, Menu } from "../../../AWS/src/models";
import BottomDrawer from "react-native-bottom-drawer-view";

const TAB_BAR_HEIGHT = 49;
const HEADER_HEIGHT = 60;
const ADDITIONAL_HEIGHT = 20;

const TestScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{ backgroundColor: "yellow", flex: 1 }}>
      <BottomDrawer
        containerHeight={300}
        offset={TAB_BAR_HEIGHT + HEADER_HEIGHT + ADDITIONAL_HEIGHT}
        startUp={false}
        backgroundColor="red"
        borderRadius={500}
        borderTopLeftRadius={500}
        borderTopRightRadius={500}
        shadow={true}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.text}>테스트</Text>
        </View>
      </BottomDrawer>
    </View>

    // <View
    //   style={{
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "space-evenly",
    //   }}
    // >
    //   <Text style={{ fontSize: 40, fontWeight: "bold" }}>테스트 스크린</Text>

    //   {/* 테스트 */}
    //   <Pressable style={styles.logOutContainer} onPress={() => {}}>
    //     <Text>테스트 실행</Text>
    //   </Pressable>
    // </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 100,
    marginBottom: 100,
    marginVertical: 10,
    paddingTop: 10,
  },
  logOutContainer: {
    backgroundColor: colors.mainPink,
    height: 30,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    // backgroundColor: "blue",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  text: {
    paddingHorizontal: 5,
  },
});

export default TestScreen;
