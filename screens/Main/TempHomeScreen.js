import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/usersSlice";

export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Button
        style={styles.buttonStyle}
        title="메시지 테스트"
        onPress={() => {
          navigation.navigate("TempSendMsgScreen");
        }}
      />
      {/* <Button
        style={styles.buttonStyle}
        title="채널"
        onPress={() => {
          navigation.navigate("ChannelScreen");
        }}
      /> */}
      <Button
        style={styles.buttonStyle}
        title="매칭 리스트"
        onPress={() => {
          navigation.navigate("MatchingListScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭방 만들기"
        onPress={() => {
          navigation.navigate("CreateMatchingScreen");
        }}
      />
      {/* <Button
        style={styles.buttonStyle}
        title="매칭 요청중 - Host"
        onPress={() => {
          navigation.navigate("MatchingRequestHostScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 요청하기 - Client"
        onPress={() => {
          navigation.navigate("MatchingRequestClientScreen");
        }}
      /> */}
      <Button
        style={styles.buttonStyle}
        title="매칭 성공"
        onPress={() => {
          navigation.navigate("MatchingSuccessScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 실패"
        onPress={() => {
          navigation.navigate("MatchingFailedScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="공지사항"
        onPress={() => {
          navigation.navigate("InfoBoardScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="약관 및 정책"
        onPress={() => {
          navigation.navigate("PoliciesBoardScreen");
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="로그아웃"
        onPress={() => dispatch(logOut())}
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
