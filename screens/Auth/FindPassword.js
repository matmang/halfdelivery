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

export default ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      userName &&
        phoneNumber &&
        authCode &&
        password &&
        passwordConfirm &&
        !userNameErrorMessage &&
        !phoneNumberErrorMessage &&
        !authCodeErrorMessage &&
        !passwordErrorMessage &&
        !passwordConfirmErrorMessage
    );
  }, [
    userName,
    phoneNumber,
    authCode,
    password,
    passwordConfirm,
    phoneNumberErrorMessage,
    userNameErrorMessage,
    authCodeErrorMessage,
    passwordErrorMessage,
    passwordConfirmErrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let userNameError = "";
      let phoneNumberError = "";
      let authCodeError = "";
      let passwordError = "";
      let passwordConfirmError = "";
      if (!userName) {
        userNameError = "실명을 입력해주세요.";
      } else if (!phoneNumber) {
        phoneNumberError = "휴대폰 번호를 입력해주세요.";
      } else if (authCode.length !== 6) {
        authCodeError = "인증번호 6자리를 입력해주세요.";
      } else if (password.length < 6) {
        passwordError = "비밀번호는 6자리 이상이어야 합니다.";
      } else if (password !== passwordConfirm) {
        passwordConfirmError = "비밀번호 확인과 비밀번호가 다릅니다.";
      } else {
        userNameError = "";
        phoneNumberError = "";
        authCodeError = "";
        passwordError = "";
        passwordConfirmError = "";
      }
      setUserNameErrorMessage(userNameError);
      setPhoneNumberErrorMessage(phoneNumberError);
      setAuthCodeErrorMessage(authCodeError);
      setPasswordErrorMessage(passwordError);
      setPasswordConfirmErrorMessage(passwordConfirmError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = () => {
    Auth.forgotPassword(userName)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
              <NameText>아이디</NameText>
              <BarInput
                placeholder={"비밀번호를 찾고자 하는 아이디를 입력해주세요"}
                stateFn={setUserName}
                value={userName}
                isValued={userName ? true : false}
              />
              <ErrorMessage message={userNameErrorMessage} />
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
              <ErrorMessage message={phoneNumberErrorMessage} />
            </PhoneNumberContainer>
            <PhoneNumberContainer>
              <NameText>인증번호</NameText>
              <BarInput
                placeholder={"인증번호 숫자 6자리를 입력해주세요"}
                stateFn={setAuthCode}
                value={authCode}
                isValued={authCode ? true : false}
              />
              <ErrorMessage message={authCodeErrorMessage} />
            </PhoneNumberContainer>
            <PasswordContainer>
              <NameText>새로운 비밀번호</NameText>
              <BarInput
                placeholder={"변경할 비밀번호를 입력해주세요"}
                stateFn={setPassword}
                value={password}
                isValued={password ? true : false}
                isPassword={true}
              />
              <ErrorMessage message={passwordErrorMessage} />
            </PasswordContainer>
            <PasswordContainer>
              <NameText>새로운 비밀번호 확인</NameText>
              <BarInput
                placeholder={"변경할 비밀번호를 한번 더 입력해주세요"}
                stateFn={setPasswordConfirm}
                value={passwordConfirm}
                isValued={password ? true : false}
                isPassword={true}
              />
              <ErrorMessage message={passwordConfirmErrorMessage} />
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
