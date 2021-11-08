import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        justifyContent: "center", // 세로 정렬
        paddingVertical: 100,
      }}
    >
      <Text>매칭에 실패했어요</Text>
      <Text>| 주문 결과 창 |</Text>
      <Button
        style={styles.buttonStyle}
        title="홈으로 돌아가기"
        onPress={() => {
          navigation.navigate("TempHome");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭방 만들기"
        onPress={() => {
          navigation.navigate("MakeMatching");
        }}
      />
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
});
