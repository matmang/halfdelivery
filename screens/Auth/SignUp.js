import React, {useEffect, useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';
import {signup} from '../../firebase';
import {isEmail} from '../../utils';
import {GoogleSignin} from '@react-native-community/google-signin';
import {
  GooglePress,
  KakaoPress,
  LoginNaver,
} from '../../components/Auth/SocialLoginHandler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {socialLogin} from '../../redux/usersSlice';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
  margin-top: 50px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({navigation: {navigate}}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [school, setSchool] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const socialGoogleConfigure = async () => {
      await GoogleSignin.configure({
        scopes: ['email'],
        webClientId:
          '271269689660-ql3c8s34ihsf3vvj4fdqec89uikupvge.apps.googleusercontent.com',
      });
    };
    socialGoogleConfigure();
  }, []);

  const validateForm = () => {
    if (email === '' || password === '') {
      alert('All fields are required.');
      return;
    }
    if (!isEmail(email)) {
      alert('Please add a valid email.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('Password need to match');
      return;
    }
    if (password.length < 6) {
      alert('The password must contain 6 characters at least');
      return;
    }
  };
  const handleSubmit = async () => {
    validateForm();
    try {
      const user = await signup({email, password, phoneNumber, name, school});
      navigate('SignIn', {email, password});
    } catch (e) {
      alert(e);
    }
  };
  const googleSubmit = async () => {
    const userToken = await GooglePress();
    dispatch(socialLogin(userToken));
  };
  // 1. android ios 각각 네이티브코드로 작성한다.
  // 2. restapi ex) django node.js
  // 3, 파이어베이스 버리고 django로 가자.
  return (
    <ScrollView>
      <KeyboardAwareScrollView extraScrollHeight={20}>
        <DismissKeyboard>
          <Container>
            <KeyboardAvoidingView behavior="position">
              <InputContainer>
                <Input value={name} placeholder="Name" stateFn={setName} />
                <Input
                  value={email}
                  placeholder="Email"
                  autoCapitalize="none"
                  stateFn={setEmail}
                />
                <Input
                  value={school}
                  placeholder="School"
                  autoCapitalize="none"
                  stateFn={setSchool}
                />
                <Input
                  value={phoneNumber}
                  placeholder="Phone Number"
                  stateFn={setPhoneNumber}
                />
                <Input
                  value={password}
                  placeholder="Password"
                  isPassword={true}
                  stateFn={setPassword}
                />
                <Input
                  value={passwordConfirm}
                  placeholder="Password Confirm"
                  isPassword={true}
                  stateFn={setPasswordConfirm}
                />
              </InputContainer>
            </KeyboardAvoidingView>
            <ButtonContainer>
              <Btn text={'Sign Up'} accent onPress={handleSubmit} />
              <Btn
                text={'Sign with google'}
                name="google"
                accent
                onPress={googleSubmit}
              />
              <Btn
                text={'Sign with Kakao'}
                name="kakao"
                accent
                onPress={KakaoPress}
              />
              <Btn
                text={'Sign with Naver'}
                name="naver"
                accent
                onPress={LoginNaver}
              />
            </ButtonContainer>
          </Container>
        </DismissKeyboard>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};
