import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch } from "react-redux";
import Auth from "@aws-amplify/auth";
import colors from "../../colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  height: 56px;
`;

const IDContainer = styled.View`
  margin-top: 74px;
  margin-left: 23px;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordContainer = styled.View`
  margin-top: 15px;
  margin-left: 23px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  margin-top: 40px;
  position: absolute;
  bottom: 30;
`;

const AuthContainer = styled.View`
  flex-direction: row;
`;

const PhaseText = styled.Text`
  font-family: "noto-regular";
  font-size: 22;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  color: #3c3c3c;
  margin-top: -20px;
`;

const NameText = styled.Text`
  font-family: "noto-regular";
  font-size: 15;
  color: ${colors.mainBlue};
`;

const AuthText = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  text-decoration-line: underline;
  margin-left: auto;
  color: ${colors.subPink1};
`;

const AuthTouch = styled.TouchableOpacity`
  margin-left: auto;
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
        IDerror = "????????? ??????????????????.";
      } else if (birthday.length !== 6) {
        PWerror = "??????????????? 6????????????????????? ex) 980424";
      } else if (!phoneNumber) {
        PWCerror = "????????? ????????? ??????????????????.";
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
          email: username,
          "custom:nickname": name,
          "custom:phonenumber": phoneNumber,
          "custom:birthday": birthday,
        },
      });
      console.log("Sign-up Confirmed");
      alert("??????????????? ?????????????????????.");
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
            style={{ width: 175, height: 42 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>??????????????? ????????????</PhaseText>
          <ExplainText>
            ?????? ?????? ????????????, ?????? ????????? ???????????? ????????????.
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <NameText>??????</NameText>
          <BarInput
            placeholder={"????????? ??????????????????"}
            stateFn={setName}
            autoCapitalize="none"
            value={name}
          />
          <ErrorMessage message={IDerrorMessage} />
        </IDContainer>
        <PasswordContainer>
          <NameText>????????????</NameText>
          <BarInput
            placeholder={"6?????? ?????? (ex. 980424)"}
            stateFn={setBirthday}
            value={birthday}
          />
          <ErrorMessage message={PWerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <AuthContainer>
            <NameText>????????? ??????</NameText>
            <AuthTouch onPress={handleSubmit}>
              <AuthText>???????????? ??????</AuthText>
            </AuthTouch>
          </AuthContainer>
          <BarInput
            placeholder={"'-'?????? ?????? ??????????????????"}
            stateFn={setPhoneNumber}
            value={phoneNumber}
          />
          <ErrorMessage message={PWCerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <NameText>????????????</NameText>
          <BarInput
            placeholder={"???????????? ?????? 6????????? ??????????????????"}
            stateFn={setAuthCode}
            isPassword={true}
            value={authCode}
          />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"??????"}
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
