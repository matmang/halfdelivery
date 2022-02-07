import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import Auth from "@aws-amplify/auth";
import colors from "../../colors";
import ConfirmBtn from "../../components/Auth/ConfirmBtn";
import { height, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  justify-content: center;
  margin-top: ${height * 80};
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
  margin-top: ${height * -20}px;
`;

const NameText = styled.Text`
  font-family: "noto-regular";
  font-size: 15px;
  color: ${colors.primaryBlue};
`;

const AuthText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  text-decoration-line: underline;
  margin-left: auto;
  color: ${colors.subPink1};
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [IDerrorMessage, setIDErrorMessage] = useState("");
  const [PWerrorMessage, setPWErrorMessage] = useState("");
  const [PWCerrorMessage, setPWCErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      name &&
        birthday &&
        phoneNumber &&
        authCode &&
        !IDerrorMessage &&
        !PWerrorMessage &&
        !PWCerrorMessage
    );
  }, [
    name,
    birthday,
    phoneNumber,
    authCode,
    IDerrorMessage,
    PWerrorMessage,
    PWCerrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let IDerror = "";
      let PWerror = "";
      let PWCerror = "";
      if (!name) {
        IDerror = "실명을 입력해주세요.";
      } else if (birthday.length !== 6) {
        PWerror = "생년월일은 6자리여야합니다 ex) 980424";
      } else if (!phoneNumber) {
        PWCerror = "휴대폰 번호를 입력해주세요.";
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

  const handleSubmit = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          name: name,
          phone_number: "+82" + phoneNumber.slice(1, 11),
          "custom:birthday": birthday,
          "custom:school": "0000",
          "custom:college": "0000",
          "custom:bank": "0000",
          "custom:accountnumber": "0000",
        },
      });
      console.log("Sign-up Confirmed");
      alert("입력하신 핸드폰 번호로 인증번호가 전송되었습니다.");
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.log("code confirmed");
    } catch (error) {
      console.log("verification code dose not match.", error.code);
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
          <PhaseText>본인인증을 해주세요</PhaseText>
          <ExplainText>
            본인 확인 절차이며, 다른 용도로 사용되지 않습니다.
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <NameText>이름</NameText>
          <BarInput
            placeholder={"실명을 입력해주세요"}
            stateFn={setName}
            autoCapitalize="none"
            value={name}
            isValued={name ? true : false}
            error={IDerrorMessage ? true : false}
          />
          <ErrorMessage message={IDerrorMessage} />
        </IDContainer>
        <PasswordContainer>
          <NameText>생년월일</NameText>
          <BarInput
            placeholder={"6자리 입력 (ex. 980424)"}
            stateFn={setBirthday}
            value={birthday}
            isValued={birthday ? true : false}
            error={PWerrorMessage ? true : false}
          />
          <ErrorMessage message={PWerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <AuthContainer>
            <NameText>휴대폰 번호</NameText>
            <ConfirmBtn onPress={handleSubmit} text={"인증번호 요청"} />
          </AuthContainer>
          <BarInput
            placeholder={"'-'구분 없이 입력해주세요"}
            stateFn={setPhoneNumber}
            value={phoneNumber}
            isValued={phoneNumber ? true : false}
            error={PWCerrorMessage ? true : false}
          />
          <ErrorMessage message={PWCerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <NameText>인증번호</NameText>
          <BarInput
            placeholder={"인증번호 숫자 6자리를 입력해주세요"}
            stateFn={setAuthCode}
            isPassword={true}
            value={authCode}
            isValued={authCode ? true : false}
          />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={() => {
              confirmSignUp();
              Auth.signIn(username, password);
              navigation.navigate("SignUpSchool", { username, password });
            }}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
