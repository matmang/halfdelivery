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
  align-items: center;
  background-color: white;
  width: 100%;
  height: ${height * 82}px;
  margin-top: auto;
  bottom: -18px;
`;

const GotoContainer = styled.View`
  width: 100%;
  margin-left: auto;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin-top: ${height * 104}px;
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

const GotoText = styled.Text`
  font-family: "noto-medium";
  font-size: 14px;
  margin-right: ${width * 24};
  color: ${colors.captionGray};
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
      userName &&
        authCode &&
        password &&
        passwordConfirm &&
        !passwordErrorMessage &&
        !passwordConfirmErrorMessage
    );
  }, [
    userName,
    authCode,
    password,
    passwordConfirm,
    passwordErrorMessage,
    passwordConfirmErrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let passwordError = "";
      let passwordConfirmError = "";
      if (password.length < 6) {
        passwordError = "비밀번호는 6자리 이상이어야 합니다.";
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
  });

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
              <NameText>비밀번호</NameText>
              <BarInput
                placeholder={"변경할 비밀번호를 입력해주세요"}
                stateFn={setPassword}
                value={password}
                isValued={password ? true : false}
                error={passwordErrorMessage ? true : false}
              />
              <ErrorMessage message={passwordErrorMessage} />
            </NameContainer>
            <PasswordContainer>
              <NameText>비밀번호 확인</NameText>
              <BarInput
                placeholder={"변경할 비밀번호를 확인해주세요"}
                stateFn={setPasswordConfirm}
                value={passwordConfirm}
                isValued={passwordConfirm ? true : false}
                error={passwordConfirmErrorMessage ? true : false}
              />
              <ErrorMessage message={passwordConfirmErrorMessage} />
            </PasswordContainer>
            <GotoContainer>
              <Ionicons
                color={accent ? "#FFFFFF" : colors.blueGray}
                size={15}
                name={
                  Platform.OS === "android"
                    ? "md-arrow-forward"
                    : "ios-arrow-forward"
                }
                style={{ marginRight: width * 6 }}
              />
              <GotoText>아이디 찾기 바로가기</GotoText>
            </GotoContainer>
            <ButtonContainer>
              <Btn
                text={"설정완료"}
                accent={accent == true}
                onPress={() => {
                  confirmFindId();
                }}
              />
            </ButtonContainer>
          </Container>
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
