import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { isEmail, isPhoneNum } from "../../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import { callsms, createAccount, verifysms } from "../../api";
import * as GoogleSignIn from "expo-google-sign-in";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
  margin-top: 100px;
`;

const ButtonContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNumber, setAuthNumber] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const validateForm = () => {
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      phoneNumber === ""
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Please add a valid email.");
      return false;
    }
    if (!isPhoneNum(phoneNumber)) {
      alert("Please add a valid phonenumber");
      return false;
    }
    if (!isVerified) {
      alert("Please authenticate your phone number");
      return false;
    }
    if (password !== passwordConfirm) {
      alert("Password need to match");
      return false;
    }
    if (password.length < 6) {
      alert("The password must contain 6 characters at least");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    try {
      const { status } = await createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        username: email,
        password,
      });
      if (status == 201) {
        alert("Account created. Sign in, please.");
        navigate("SignIn", { email, password });
      }
    } catch (e) {
      console.warn(e);
    }
  };
  const smsCall = async () => {
    if (phoneNumber === "") {
      alert("Please Input phoneNumber");
    }
    try {
      const { status } = await callsms({
        phone_number: phoneNumber,
      });
      if (status == 200) {
        alert("인증번호가 발송되었습니다.");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  const smsVerificate = async () => {
    if (phoneNumber === "" || authNumber === "") {
      alert("Please Input authNumber");
    }
    try {
      const { status } = await verifysms({
        phone_number: phoneNumber,
        auth_number: authNumber,
      });
      if (status == 200) {
        alert("인증이 완료되었습니다.");
        setIsVerified(true);
      } else {
        alert("인증번호가 잘못되었습니다.");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  return (
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
                value={phoneNumber}
                placeholder="Phonenumber"
                autoCapitalize="none"
                stateFn={setPhoneNumber}
              />
              <Btn text={"인증번호 발송"} accent onPress={smsCall} />
              <Input
                value={authNumber}
                placeholder="인증번호"
                stateFn={setAuthNumber}
              />
              <Btn text={"인증"} accent onPress={smsVerificate} />
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
  );
};
