import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ConfirmBtn from "../../components/Auth/ConfirmBtn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import FindPasswordModal from "../../components/Auth/FindPasswordModal";
import DismissKeyboard from "../../components/DismissKeyboard";
import { width, height } from "../../utils";
import { Ionicons } from "@expo/vector-icons";

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
  margin-top: ${height * 92}px;
  justify-content: center;
  align-items: center;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 22}px;
  height: ${height * 56}px;
`;

const NameContainer = styled.View`
  margin-top: ${height * 74}px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 15}px;
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

const AuthContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GotoContainer = styled.View`
  width: 100%;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: ${height * 180}px;
`;

const PhaseText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 22px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  font-family: "gothica1-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: ${height * 9}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 15px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const GotoText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 14px;
  margin-right: ${width * 24};
  color: ${colors.captionGray};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      userName && authCode && !userNameErrorMessage && !authCodeErrorMessage
    );
  }, [userName, authCode, userNameErrorMessage, authCodeErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let userNameError = "";
      let authCodeError = "";
      if (!userName) {
        userNameError = "가입한 아이디를 입력해주세요.";
      } else if (authCode.length !== 6) {
        authCodeError = "인증번호 6자리를 입력해주세요.";
      } else {
        userNameError = "";
        authCodeError = "";
      }
      setUserNameErrorMessage(userNameError);
      setAuthCodeErrorMessage(authCodeError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = () => {
    try {
      console.log("Password Confirmed");
      navigation.navigate("FindPasswordConfirm", { userName, authCode });
    } catch (error) {
      console.log("Error find password...", error);
    }
  };

  const confirmFindId = () => {
    Auth.forgotPassword(userName)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    alert("회원가입시 입력한 전화번호로 인증문자가 전송되었습니다.");
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
                <NameText>아이디</NameText>
                <ConfirmBtn
                  onPress={confirmFindId}
                  text={"인증번호 요청"}
                  accent={false}
                />
              </AuthContainer>
              <BarInput
                placeholder={"아이디를 입력해주세요"}
                stateFn={setUserName}
                value={userName}
                isValued={userName ? true : false}
                error={userNameErrorMessage ? true : false}
              />
              <ErrorMessage message={userNameErrorMessage} />
            </NameContainer>
            <PasswordContainer>
              <NameText>인증번호</NameText>
              <BarInput
                placeholder={"인증번호 숫자 6자리 입력해주세요"}
                stateFn={setAuthCode}
                value={authCode}
                isValued={authCode ? true : false}
                error={authCodeErrorMessage ? true : false}
              />
              <ErrorMessage message={authCodeErrorMessage} />
            </PasswordContainer>
            <GotoContainer>
              <Ionicons
                color={accent ? "#FFFFFF" : colors.captionGray}
                size={width * 15}
                name={
                  Platform.OS === "android"
                    ? "md-arrow-forward"
                    : "ios-arrow-forward"
                }
                style={{ marginRight: width * 6 }}
              />
              <GotoText>아이디 찾기 바로가기</GotoText>
            </GotoContainer>
          </Container>
          <ButtonContainer>
            <Btn
              text={"다음"}
              accent={accent == true}
              onPress={() => {
                handleSubmit();
              }}
            />
          </ButtonContainer>
        </ScrollView>
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
