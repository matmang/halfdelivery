import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import { height, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 110};
  justify-content: center;
  align-items: center;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 22}px;
  height: ${height * 56}px;
`;

const IDContainer = styled.View`
  margin-top: ${height * 74}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 15}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  align-items: center;
  background-color: white;
  width: 100%;
  height: ${height * 82}px;
  margin-top: ${height * 40}px;
  position: absolute;
  bottom: 0px;
`;

const PhaseText = styled.Text`
  font-family: "noto-medium";
  font-size: 22px;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: ${height * -20}px;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: 15px;
  color: ${colors.primaryBlue};
`;

export default ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [IDerrorMessage, setIDErrorMessage] = useState("");
  const [PWerrorMessage, setPWErrorMessage] = useState("");
  const [PWCerrorMessage, setPWCErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      username &&
        password &&
        passwordConfirm &&
        !IDerrorMessage &&
        !PWerrorMessage &&
        !PWCerrorMessage
    );
  }, [
    username,
    password,
    passwordConfirm,
    IDerrorMessage,
    PWerrorMessage,
    PWCerrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let IDerror = "";
      let PWerror = "";
      let PWCerror = "";
      if (!username) {
        IDerror = "아이디를 입력해주세요.";
      } else if (password.length < 8) {
        PWerror = "비밀번호는 8자리 이상이어야 합니다.";
      } else if (password !== passwordConfirm) {
        PWCerror = "비밀번호 확인과 비밀번호가 다릅니다.";
      } else {
        IDerror = "";
        PWerror = "";
        PWCerror = "";
      }
      setIDErrorMessage(IDerror);
      setPWErrorMessage(PWerror);
      setPWCErrorMessage(PWCerror);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = () => {
    try {
      console.log("Sign-up Confirmed");
      navigation.navigate("SignUpAuthConfirm", { username, password });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/SignUp1.png")}
            style={{ width: width * 180, height: height * 44 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>회원 정보를 입력해주세요</PhaseText>
          <ExplainText>
            본인 확인 절차이며, 다른 용도로 사용되지 않습니다.
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <NameText>아이디</NameText>
          <BarInput
            placeholder={"아이디를 입력해주세요"}
            stateFn={setusername}
            autoCapitalize="none"
            value={username}
            isValued={username ? true : false}
            error={IDerrorMessage ? true : false}
          />
          <ErrorMessage message={IDerrorMessage} />
        </IDContainer>
        <PasswordContainer>
          <NameText>비밀번호</NameText>
          <BarInput
            placeholder={"비밀번호를 입력해주세요"}
            stateFn={setPassword}
            isPassword={true}
            value={password}
            isValued={password ? true : false}
            error={PWerrorMessage ? true : false}
          />
          <ErrorMessage message={PWerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <NameText>비밀번호 확인</NameText>
          <BarInput
            placeholder={"비밀번호를 확인해주세요"}
            stateFn={setPasswordConfirm}
            isPassword={true}
            value={passwordConfirm}
            isValued={passwordConfirm ? true : false}
            error={PWCerrorMessage ? true : false}
          />
          <ErrorMessage message={PWCerrorMessage} />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
