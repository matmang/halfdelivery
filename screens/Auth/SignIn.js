import CheckBox from "@react-native-community/checkbox";
import React, { useState } from "react";
import { KeyboardAvoidingView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import colors from "../../colors";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { userLogin } from "../../redux/usersSlice";
import { isEmail } from "../../utils";
import SignUp from "./SignUp";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const InputContainer = styled.View``;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
`;

const CheckboxContainer = styled.View`
  margin-bottom: 32px;
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-left: 49px;
`;

const SignupContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 17px;
  margin-right: 13px;
`;

const LoginText = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  margin-left: 13px;
`;

export default ({ route: { params }, navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const goToSignUp = () => navigation.navigate("SignUp");
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
    return true;
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(userLogin(email, password));
  };
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <LogoContainer>
            <Image
              source={require("../../assets/images/halfLogo.png")}
              style={{ width: 62.2, height: 90.21 }}
            />
          </LogoContainer>
          <InputContainer>
            <Input
              value={email}
              placeholder="?????????"
              KeyboardType="email-address"
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="????????????"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
        </KeyboardAvoidingView>
        <CheckboxContainer>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <LoginText>????????? ?????? ??????</LoginText>
        </CheckboxContainer>
        <Btn text={"?????????"} accent onPress={handleSubmit} />
        <SignupContainer>
          <LoginText>????????? ??????</LoginText>
          <LoginText>|</LoginText>
          <LoginText>???????????? ??????</LoginText>
          <LoginText>|</LoginText>
          <TouchableOpacity onPress={goToSignUp}>
            <LoginText>?????? ??????</LoginText>
          </TouchableOpacity>
        </SignupContainer>
      </Container>
    </DismissKeyboard>
  );
};
