import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { height, width } from "../../../utils";
import colors from "../../../colors";
import BarInput from "../../../components/Auth/BarInput";
import Btn from "../../../components/Auth/Btn";
import ConfirmBtn from "../../../components/Auth/ConfirmBtn";
import DismissKeyboard from "../../../components/DismissKeyboard";
import ErrorMessage from "../../../components/Auth/ErrorMessage";

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
  margin-top: ${height * 25.7}px;
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
  margin-bottom: ${height * 21}px;
`;

const PhaseText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 22px;
  include-font-padding: false;
  text-align-vertical: center;
  margin-bottom: ${height * 10}px;
`;

const ExplainText = styled.Text`
  font-family: "gothica1-regular";
  font-size: 14px;
  color: #3c3c3c;
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

const UnAccentedText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 15px;
  color: ${colors.unselectedGrey};
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
  const [name, setName] = useState("김지우");
  const [phonenumber, setPhonenumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [phonenumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      phonenumber &&
        authCode &&
        !phonenumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [phonenumber, authCode, phonenumberErrorMessage, authCodeErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let authCodeError = "";
      let phonenumberError = "";
      if (!phonenumber) {
        phonenumberError = "전화번호를 입력해주세요.";
      } else if (authCode.length !== 6) {
        authCodeError = "인증번호 6자리를 입력해주세요.";
      } else {
        authCodeError = "";
      }
      setAuthCodeErrorMessage(authCodeError);
      setPhoneNumberErrorMessage(phonenumberError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = async () => {
    try {
      Auth.verifyCurrentUserAttributeSubmit("phone_number", authCode)
        .then(async () => {
          console.log("phone_number verified");
          const user = await Auth.currentAuthenticatedUser();
          await Auth.updateUserAttributes(user, {
            phone_number: "+82" + phonenumber.slice(1, 11),
          });
          console.log("phone_number changed");
          navigation.goBack();
        })
        .catch((e) => {
          console.log("failed with error", e);
          alert("변경에 실패했습니다.");
        });
    } catch (error) {
      console.log("Error find password...", error);
    }
  };

  const confirmFindId = () => {
    Auth.verifyCurrentUserAttribute("phone_number")
      .then(() => {
        console.log("a verification code is sent");
      })
      .catch((e) => {
        console.log("failed with error", e);
      });
    alert("새로운 전화번호로 인증문자가 전송되었습니다.");
  };

  return (
    <DismissKeyboard>
      <OuterContainer>
        <ScrollView>
          <Container>
            <LogoConatainer>
              <Image
                source={require("../../../assets/images/halfSmallLogo.png")}
                style={{ width: 40, height: 58 }}
              />
            </LogoConatainer>
            <PhaseContainer>
              <PhaseText>연락처 수정</PhaseText>
              <ExplainText>본인 명의의 개인정보를 입력해주세요.</ExplainText>
              <ExplainText>
                안전한 거래를 위해서 사용되는 정보입니다.
              </ExplainText>
            </PhaseContainer>
            <NameContainer>
              <AuthContainer>
                <UnAccentedText>이름</UnAccentedText>
              </AuthContainer>
              <BarInput
                placeholder={name}
                stateFn={setName}
                value={name}
                disabled={true}
                error={false}
              />
            </NameContainer>
            <PasswordContainer>
              <AuthContainer>
                <NameText>새 휴대폰 번호</NameText>
                <ConfirmBtn
                  onPress={confirmFindId}
                  text={"인증번호 요청"}
                  accent={false}
                />
              </AuthContainer>
              <BarInput
                placeholder={"- 구분 없이 입력해주세요"}
                stateFn={setPhonenumber}
                value={phonenumber}
                isValued={phonenumber ? true : false}
                error={phonenumberErrorMessage ? true : false}
              />
              <ErrorMessage message={phonenumberErrorMessage} />
            </PasswordContainer>
            <PasswordContainer>
              <AuthContainer>
                <NameText>인증번호</NameText>
              </AuthContainer>
              <BarInput
                placeholder={"인증번호 숫자 6자리 입력해주세요"}
                stateFn={setAuthCode}
                value={authCode}
                isValued={authCode ? true : false}
                error={authCodeErrorMessage ? true : false}
              />
              <ErrorMessage message={authCodeErrorMessage} />
            </PasswordContainer>
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
      </OuterContainer>
    </DismissKeyboard>
  );
};
