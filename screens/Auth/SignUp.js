import React, { useEffect, useRef, useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isusername, isPhoneNum, isEmail } from "../../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import Auth from "@aws-amplify/auth";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
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
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [school, setSchool] = useState("");
  const [domitory, setDomitory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const refDidMount = useRef(null);

  useEffect(() => {
    setDisabled(
      !(
        username &&
        password &&
        passwordConfirm &&
        school &&
        domitory &&
        !errorMessage
      )
    );
  }, [username, password, passwordConfirm, domitory, school, errorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let error = "";
      if (!username) {
        error = "이메일을 입력해주세요.";
      } else if (!isEmail(username)) {
        error = "이메일을 다시 확인해주세요.";
      } else if (password.length < 6) {
        setEmail(username);
        error = "비밀번호는 6자리 이상이어야 합니다.";
      } else if (password !== passwordConfirm) {
        error = "비밀번호 확인과 비밀번호가 다릅니다.";
      } else if (!school) {
        error = "학교를 입력해주세요.";
      } else if (!domitory) {
        error = "기숙사를 입력해주세요.";
      } else {
        error = "";
      }
      setErrorMessage(error);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = async () => {
    try {
      await Auth.signUp({ username, password, attributes: { email } });
      console.log("Sign-up Confirmed");
      navigate("ConfirmSignUp");
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <KeyboardAwareScrollView extraScrollHeight={20}>
      <DismissKeyboard>
        <Container>
          <InputContainer>
            <BarInput
              value={username}
              placeholder="이메일"
              autoCapitalize="none"
              stateFn={setusername}
            />
            <BarInput
              value={password}
              placeholder="비밀번호"
              isPassword={true}
              stateFn={setPassword}
            />
            <BarInput
              value={passwordConfirm}
              placeholder="비밀번호 확인"
              isPassword={true}
              stateFn={setPasswordConfirm}
            />
            <BarInput
              value={school}
              placeholder="학교"
              autoCapitalize="none"
              stateFn={setSchool}
            />
            <BarInput
              value={domitory}
              placeholder="기숙사"
              autoCapitalize="none"
              stateFn={setDomitory}
            />
          </InputContainer>
          <ErrorMessage message={errorMessage} />
          <ButtonContainer>
            <Btn
              text={"다음"}
              accent
              onPress={handleSubmit}
              disabled={disabled}
            />
          </ButtonContainer>
        </Container>
      </DismissKeyboard>
    </KeyboardAwareScrollView>
  );
};
