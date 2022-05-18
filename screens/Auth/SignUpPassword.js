import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import { height, validPassword, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 53}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordConfirmContainer = styled.View`
  margin-top: ${height * 13}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: ${height * 12}px;
  padding-bottom: ${height * 24}px;
  height: ${height * 82}px;
  bottom: 0;
`;

const TitleText = styled.Text`
  font-family: "gothic-medium";
  font-size: 24px;
  margin-top: ${height * 22}px;
  margin-left: ${width * 24}px;
  line-height: 40px;
`;

const NameText = styled.Text`
  font-family: "gothic-semibold";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ route: { params }, navigation }) => {
  const [name, setName] = useState(params?.name);
  const [birthday, setBirthday] = useState(params?.birthday);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      password &&
        passwordConfirm &&
        !passwordErrorMessage &&
        !passwordConfirmErrorMessage
    );
  }, [
    password,
    passwordConfirm,
    passwordErrorMessage,
    passwordConfirmErrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let passwordError = "";
      let passwordConfirmError = "";
      if (password.length < 8) {
        passwordError = "비밀번호는 8자리 이상이어야 합니다.";
      } else if (!validPassword(password)) {
        passwordError =
          "비밀번호는 최소 하나 이상의 영문자, 숫자, 특수문자를 포함해야합니다.";
      } else if (password !== passwordConfirm) {
        passwordConfirmError = "비밀번호 확인과 비밀번호가 다릅니다.";
      } else {
        passwordError = "";
        passwordConfirmError = "";
      }
      setPasswordErrorMessage(passwordError);
      setPasswordConfirmErrorMessage(passwordConfirmError);
    } else {
      refDidMount.current = true;
    }
  }, [password, passwordConfirm]);

  const handleSubmit = () => {
    try {
      navigation.navigate("SignUpAuthConfirm", { name, birthday, password });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </ProgressContainer>
        <TitleText>{`반가워요 ${name}님 !\n비밀번호를 입력해주세요`}</TitleText>
        <PasswordContainer>
          <NameText>비밀번호</NameText>
          <BarInput
            placeholder={"비밀번호를 입력해주세요"}
            stateFn={setPassword}
            autoCapitalize="none"
            value={password}
            isValued={password ? true : false}
            error={passwordErrorMessage ? true : false}
            isPassword
          />
          <ErrorMessage message={passwordErrorMessage} />
        </PasswordContainer>
        <PasswordConfirmContainer>
          <NameText>비밀번호 확인</NameText>
          <BarInput
            placeholder={"비밀번호를 확인해주세요"}
            stateFn={setPasswordConfirm}
            isbirthday={true}
            value={passwordConfirm}
            isValued={passwordConfirm ? true : false}
            error={passwordConfirmErrorMessage ? true : false}
            isPassword
          />
          <ErrorMessage message={passwordConfirmErrorMessage} />
        </PasswordConfirmContainer>
        <ButtonContainer>
          <Btn text={"다음"} accent={accent} onPress={handleSubmit} />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
