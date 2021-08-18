import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MatchingSuccess = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center', // 가로 정렬
        justifyContent: 'center', // 세로 정렬
        paddingVertical: 100,
      }}>
      <Text>매칭에 성공했어요</Text>
      <Text>| 주문 결과 창 |</Text>
      <Text>| 채팅하기 |</Text>
      <Text>내가 결제할 금액 0000원</Text>
      <Button
        style={styles.buttonStyle}
        title="예치금 송금하기"
        onPress={() => {}}
      />
      <Button
        style={styles.buttonStyle}
        title="매칭 나가기"
        onPress={() => {
          navigation.goBack();
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

export default MatchingSuccess;
