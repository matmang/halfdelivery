import React, { Component } from "react";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 100,
      }}
    >
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>내정보</Text>
      </View>
      <Button
        style={styles.buttonStyle}
        title="홈으로 돌아가기"
        onPress={() => {
          navigation.navigate("TempHome");
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
