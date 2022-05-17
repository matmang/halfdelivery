import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import FindPasswordModal from "../../components/Auth/FindPasswordModal";
import DismissKeyboard from "../../components/DismissKeyboard";
import { Ionicons } from "@expo/vector-icons";
import { width, height } from "../../utils";
import PhBarInput from "../../components/Auth/PhBarInput";

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
  font-family: "gothica1-medium";
  font-size: 24px;
  margin-top: ${height * 22}px;
  margin-left: ${width * 24}px;
  line-height: 40px;
`;

const NameText = styled.Text`
  font-family: "gothica1-semibold";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;


const SubTitleText = styled.Text`
  font-family: "gothica1-regular";
  font-size: 14px;
  margin-left: ${width * 24};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation, route: { params } }) => {
  const [userName, setUserName] = useState(params?.userName);
  const [authCode, setAuthCode] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(userName && authCode && isConfirm && !authCodeErrorMessage);
  }, [userName, authCode, authCodeErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let authCodeError = "";
      if (authCode.length !== 6) {
        authCodeError = "인증번호는 6자리이어야 합니다.";
      } else {
        authCodeError = "";
      }
      setAuthCodeErrorMessage(authCodeError);
    } else {
      refDidMount.current = true;
    }
  }, [authCode]);

  const confirmFindPassword = () => {
    Auth.forgotPassword(userName)
      .then((data) => {
        setIsConfirm(true);
        console.log(data);
      })
      .catch((err) => console.log(err));
    alert("회원가입시 입력한 전화번호로 인증문자가 전송되었습니다.");
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
          <NameText>인증번호</NameText>
          <PhBarInput
            placeholder={"인증번호를 입력해주세요"}
            stateFn={setAuthCode}
            value={authCode}
            isValued={authCode ? true : false}
            error={authCodeErrorMessage ? true : false}
            onPress={confirmFindPassword}
          />
          <ErrorMessage message={authCodeErrorMessage} />
        </NameContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent == true}
            onPress={() => {
              navigation.navigate("FindPasswordReset", { userName, authCode });
            }}
          />
        </ButtonContainer>
        <FindPasswordModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          userName={userName}
          navigation={navigation}
        />
      </Container>
    </DismissKeyboard>
  );
};
