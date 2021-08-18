import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Linking, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../assets/Styles2';

const TempSendMsg = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [texts, setTexts] = useState('empty haha');

  return (
    <View style={Styles.centerize}>
      <TextInput
        style={Styles.textInput}
        value={text}
        onChangeText={setText}
        maxLength={100}
      />
      <Button
        title="전송"
        onPress={() => {
          setText('');
        }}
      />
    </View>
  );
};

export default TempSendMsg;
