import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import colors from "../../../colors";
import { Auth } from "aws-amplify";
// import { logOut } from "../../../redux/usersSlice";

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const logOut = () => {
    Auth.signOut();
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>임시 홈 화면</Text>
      {/* 기능 테스트 스크린으로 이동 */}
      <Pressable
        style={styles.logOutContainer}
        onPress={() => {
          navigation.navigate("TestScreen");
        }}
      >
        <Text>테스트 스크린</Text>
      </Pressable>

      {/* 계정 로그아웃*/}
      <Pressable style={styles.logOutContainer} onPress={logOut}>
        <Text>로그아웃</Text>
      </Pressable>
    </View>
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
});
