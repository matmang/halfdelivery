import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import colors from "../../../colors";
import { Auth, DataStore } from "aws-amplify";
import { Store, Menu } from "../../../AWS/src/models";

const TestScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // ? 예산닭갈
  const _storeID = "654defb7-914f-4bb5-9b45-564f0726a14b";

  // ? 가게저장하는 함수
  const saveStore = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const newMessage = await DataStore.save(
      new Store({
        // id: string;
        store: "테스트가게",
        minOrdPrice: 1,
        minDlvTime: 11,
        maxDlvTime: 111,
        maxDlvTip: 1111,
        openHours: "꺄르르",
      })
    );
    console.log("실행완료");
  };

  // ? 메뉴저장하는 함수
  const saveMenu = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const newMessage = await DataStore.save(
      new Menu({
        // id: string;
        menuCategory: "메뉴소개",
        menu: "1인순대곱창볶음메뉴",
        // menuImgUri?: ,
        // menuDetail?: ,
        price: 13000,
        storeID: _storeID,
      })
    );
    console.log("실행완료");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>테스트 스크린</Text>

      {/* 테스트 */}
      <Pressable style={styles.logOutContainer} onPress={alert("테스트")}>
        <Text>테스트 실행</Text>
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

export default TestScreen;
