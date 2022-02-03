import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { Store, User } from "../../AWS/src/models";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ConfirmBtn from "../../components/Auth/ConfirmBtn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import FindPasswordModal from "../../components/Auth/FindPasswordModal";
import DismissKeyboard from "../../components/DismissKeyboard";

const OuterContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

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
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
`;

const PhoneNumberContainer = styled.View`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordContainer = styled.View`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  bottom: 30px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
`;

const AuthContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const GotoText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: ${colors.blueGrey};
  margin-top: 53px;
`;

const AuthTouch = styled.TouchableOpacity`
  margin-left: auto;
`;

export default ({ navigation, route: { params } }) => {
  const [userName, setUserName] = useState(params?.userName);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState(params?.password);
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      userName &&
        phoneNumber &&
        authCode &&
        password &&
        !phoneNumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [
    userName,
    phoneNumber,
    authCode,
    password,
    phoneNumberErrorMessage,
    authCodeErrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let phoneNumberError = "";
      let authCodeError = "";
      if (!phoneNumber) {
        phoneNumberError = "휴대폰 번호를 입력해주세요.";
      } else if (authCode.length !== 6) {
        authCodeError = "인증번호 6자리를 입력해주세요.";
      } else {
        phoneNumberError = "";
        authCodeError = "";
      }
      setPhoneNumberErrorMessage(phoneNumberError);
      setAuthCodeErrorMessage(authCodeError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = () => {
    Auth.forgotPassword(userName)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    alert("회원가입시 입력한 전화번호로 인증문자가 전송되었습니다.");
  };

  const confirmFindId = () => {
    Auth.forgotPasswordSubmit(userName, authCode, password)
      .then((data) => {
        console.log(data);
        setIsModalVisible(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <DismissKeyboard>
      <OuterContainer>
        <ScrollView>
          <Container>
            <LogoConatainer>
              <Image
                source={require("../../assets/images/halfSmallLogo.png")}
                style={{ width: 40, height: 58 }}
              />
            </LogoConatainer>
            <PhaseContainer>
              <PhaseText>비밀번호 찾기/재설정</PhaseText>
              <ExplainText>
                비밀번호 변경 시 다른 아이디나 사이트에서
              </ExplainText>
              <ExplainText>
                사용한 적 없는 안전한 비밀번호로 변경해주세요
              </ExplainText>
            </PhaseContainer>
            <NameContainer>
              <AuthContainer>
                <NameText>휴대폰 번호</NameText>
                <ConfirmBtn onPress={handleSubmit} text={"인증번호 요청"} />
              </AuthContainer>
              <BarInput
                placeholder={"'-'구분 없이 입력해주세요"}
                stateFn={setPhoneNumber}
                value={phoneNumber}
                isValued={phoneNumber ? true : false}
              />
              <ErrorMessage message={phoneNumberErrorMessage} />
            </NameContainer>
            <PasswordContainer>
              <NameText>인증번호</NameText>
              <BarInput
                placeholder={"인증번호 숫자 6자리 입력해주세요"}
                stateFn={setAuthCode}
                value={authCode}
                isValued={authCode ? true : false}
              />
              <ErrorMessage message={authCodeErrorMessage} />
            </PasswordContainer>
            <GotoText>아이디 찾기 바로가기</GotoText>
          </Container>
        </ScrollView>
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
        <FindPasswordModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          userName={userName}
          navigation={navigation}
        />
      </OuterContainer>
    </DismissKeyboard>
  );
};
