import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const TempHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center', // 가로 정렬
        justifyContent: 'space-evenly', // 세로 정렬
      }}>
      <Button
        style={styles.buttonStyle}
        title="메시지 테스트"
        onPress={() => {
          navigation.navigate('TempSendMsg');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭방 만들기"
        onPress={() => {
          navigation.navigate('MakeMatching');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 요청중 - Host"
        onPress={() => {
          navigation.navigate('MatchingRequestHost');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 요청하기 - Client"
        onPress={() => {
          navigation.navigate('MatchingRequestClient');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 성공"
        onPress={() => {
          navigation.navigate('MatchingSuccess');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 실패"
        onPress={() => {
          navigation.navigate('MatchingFailed');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="공지사항"
        onPress={() => {
          navigation.navigate('InfoBoard');
        }}
      />
      <Button
        style={styles.buttonStyle}
        title="약관 및 정책"
        onPress={() => {
          navigation.navigate('PoliciesBoard');
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

export default TempHome;
