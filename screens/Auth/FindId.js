import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { Store, User } from "../../AWS/src/models";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const LogoConatainer = styled.View`
  margin-top: 62px;
  justify-content: center;
  align-items: center;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  height: 56px;
`;

const NameContainer = styled.View`
  margin-top: 74px;
  margin-left: 23px;
  margin-right: auto;
  justify-content: flex-start;
`;

const PhoneNumberContainer = styled.View`
  margin-top: 15px;
  margin-left: 23px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  margin-top: 40px;
  position: absolute;
  bottom: 30px;
`;

const AuthContainer = styled.View`
  flex-direction: row;
`;

const PhaseText = styled.Text`
  font-family: "noto-regular";
  font-size: 22px;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: -20px;
`;

const NameText = styled.Text`
  font-family: "noto-regular";
  font-size: 15px;
  color: ${colors.mainBlue};
`;

const AuthText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  text-decoration-line: underline;
  margin-left: auto;
  color: ${colors.subPink1};
`;

const AuthTouch = styled.TouchableOpacity`
  margin-left: auto;
`;

export default () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      name &&
        phoneNumber &&
        authCode &&
        !nameErrorMessage &&
        !phoneNumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [
    name,
    phoneNumber,
    authCode,
    phoneNumberErrorMessage,
    nameErrorMessage,
    authCodeErrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let nameError = "";
      let phoneNumberError = "";
      let authCodeError = "";
      if (!name) {
        nameError = "실명을 입력해주세요.";
      } else if (!phoneNumber) {
        phoneNumberError = "휴대폰 번호를 입력해주세요.";
      } else if (authCode !== 4) {
        authCodeError = "인증번호 4자리를 입력해주세요.";
      } else {
        nameError = "";
        phoneNumberError = "";
        authCodeError = "";
      }
      setNameErrorMessage(nameError);
      setPhoneNumberErrorMessage(phoneNumberError);
      setAuthCodeErrorMessage(authCodeError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = () => {
    const userData = DataStore.query(User);
    console.log(userData);
  };

  const confirmFindId = () => {};

  return (
    <DismissKeyboard>
      <Container>
        <LogoConatainer>
          <Image
            source={require("../../assets/images/halfSmallLogo.png")}
            style={{ width: 40, height: 58 }}
          />
        </LogoConatainer>
        <PhaseContainer>
          <PhaseText>아이디 찾기</PhaseText>
          <ExplainText>회원정보에 등록된 휴대폰 번호를 사용하여</ExplainText>
          <ExplainText>본인확인을 진행합니다.</ExplainText>
        </PhaseContainer>
        <NameContainer>
          <NameText>이름</NameText>
          <BarInput
            placeholder={"실명을 입력해주세요"}
            stateFn={setName}
            value={name}
            isValued={name ? true : false}
          />
          <ErrorMessage message={nameErrorMessage} />
        </NameContainer>
        <PhoneNumberContainer>
          <AuthContainer>
            <NameText>휴대폰 번호</NameText>
            <AuthTouch onPress={handleSubmit}>
              <AuthText>인증번호 요청</AuthText>
            </AuthTouch>
          </AuthContainer>
          <BarInput
            placeholder={"'-'구분 없이 입력해주세요"}
            stateFn={setPhoneNumber}
            value={phoneNumber}
            isValued={phoneNumber ? true : false}
          />
        </PhoneNumberContainer>
        <PhoneNumberContainer>
          <NameText>인증번호</NameText>
          <BarInput
            placeholder={"인증번호 숫자 4자리를 입력해주세요"}
            stateFn={setAuthCode}
            value={authCode}
            isValued={authCode ? true : false}
          />
        </PhoneNumberContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent == true}
            onPress={() => {
              confirmFindId();
            }}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
