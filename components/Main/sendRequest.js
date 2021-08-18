import {BackgroundColor} from 'chalk';
import React, {useState, t, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSetState} from 'react-use';
import {View, Text, Button, TouchableHighlight, Pressable} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Styles from '../../assets/Styles2';

import {dbService} from '../../firebase';

const sendRequest = () => {
  const [nweet, setNweet] = useState('');

  const onSubmut = async event => {
    await dbService.collection('nweets').add({
      nweet,
      createdAt: Date.now(),
    });
  };
};

export default sendRequest;
