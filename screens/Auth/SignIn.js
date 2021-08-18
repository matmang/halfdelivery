import React, {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Auth/Input';
import DismissKeyboard from '../../components/DismissKeyboard';
import {userLogin} from '../../redux/usersSlice';
import {isEmail} from '../../utils';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({route: {params}}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === '' || password === '') {
      alert('All fields are required.');
      return false;
    }
    if (!isEmail(email)) {
      alert('Email is invalid');
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        email: email,
        password: password,
      }),
    );
  };
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              KeyboardType="email-address"
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
        </KeyboardAvoidingView>
        <Btn text={'Sign In'} accent onPress={handleSubmit} />
      </Container>
    </DismissKeyboard>
  );
};
