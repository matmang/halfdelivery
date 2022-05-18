import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import FindPasswordModal from "../../components/Auth/FindPasswordModal";
import DismissKeyboard from "../../components/DismissKeyboard";
import { width, height, validPassword } from "../../utils";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const LogoConatainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const NameContainer = styled.View`
  margin-top: ${height * 68}px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
`;

const ConfirmContainer = styled.View`
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

const SubTitleText = styled.Text`
  font-family: "gothic-regular";
  font-size: 14px;
  margin-left: ${width * 24};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation, route: { params } }) => {
  const [userName, setUserName] = useState(params?.userName);
  const [authCode, setAuthCode] = useState(params?.authCode);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConfirmErrorMessage] =
    useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
      <Container>
        <LogoConatainer>
          <Image
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </LogoConatainer>
        <TitleText>본인인증을 진행해 주세요</TitleText>
        <SubTitleText>
          가입 시 입력된 핸드폰 번호로 인증번호를 발송했습니다.{" "}
        </SubTitleText>
        <NameContainer>
          <NameText>새 비밀번호</NameText>
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
        </NameContainer>
        <ConfirmContainer>
          <NameText>새 비밀번호 확인</NameText>
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
        </ConfirmContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent == true}
            onPress={() => {
              confirmFindId();
            }}
          />
        </ButtonContainer>
        <FindPasswordModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          navigation={navigation}
        />
      </Container>
    </DismissKeyboard>
  );
};
