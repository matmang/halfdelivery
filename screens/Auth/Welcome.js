import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components';
import Btn from '../../components/Auth/Btn';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BtnContainer = styled.View`
  margin-top: 40px;
`;

export default ({navigation}) => {
  const goToSignUp = () => navigation.navigate('SignUp');
  const goToSignIn = () => navigation.navigate('SignIn');
  return (
    <Container>
      <BtnContainer>
        <Btn onPress={goToSignUp} text={'Sign Up'} accent={true} />
        <Btn onPress={goToSignIn} text={'Sign In'} />
      </BtnContainer>
      <StatusBar barStyle="light-content" />
    </Container>
  );
};
