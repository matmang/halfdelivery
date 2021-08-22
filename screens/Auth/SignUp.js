import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";

import { isEmail } from "../../utils";
// import {GoogleSignin} from '@react-native-community/google-signin';
// import {
//   GooglePress,
//   KakaoPress,
//   LoginNaver,
// } from '../../components/Auth/SocialLoginHandler';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { socialLogin } from "../../redux/usersSlice";
import { createAccount } from "../../api";

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

export default ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const validateForm = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return;
    }
    if (!isEmail(email)) {
      alert("Please add a valid email.");
      return;
    }
    if (password !== passwordConfirm) {
      alert("Password need to match");
      return;
    }
    if (password.length < 6) {
      alert("The password must contain 6 characters at least");
      return;
    }
  };
  const handleSubmit = async () => {
    validateForm();
    try {
      const data = await createAccount({
        email,
        email,
        phone_number: 1072441542,
        birthday: Date.now(),
        half_money: 10000,
        password,
      });
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <ScrollView>
      <KeyboardAwareScrollView extraScrollHeight={20}>
        <DismissKeyboard>
          <Container>
            <KeyboardAvoidingView behavior="position">
              <InputContainer>
                <Input
                  value={firstName}
                  placeholder="First Name"
                  stateFn={setFirstName}
                />
                <Input
                  value={lastName}
                  placeholder="Last Name"
                  stateFn={setLastName}
                />
                <Input
                  value={email}
                  placeholder="Email"
                  autoCapitalize="none"
                  stateFn={setEmail}
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
              <Btn text={"Sign Up"} accent onPress={handleSubmit} />
            </ButtonContainer>
          </Container>
        </DismissKeyboard>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
};
