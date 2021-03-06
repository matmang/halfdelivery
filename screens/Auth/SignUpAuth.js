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

export default ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [IDerrorMessage, setIDErrorMessage] = useState("");
  const [PWerrorMessage, setPWErrorMessage] = useState("");
  const [PWCerrorMessage, setPWCErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      username &&
        password &&
        passwordConfirm &&
        !IDerrorMessage &&
        !PWerrorMessage &&
        !PWCerrorMessage
    );
  }, [
    username,
    password,
    passwordConfirm,
    IDerrorMessage,
    PWerrorMessage,
    PWCerrorMessage,
  ]);

  useEffect(() => {
    if (refDidMount.current) {
      let IDerror = "";
      let PWerror = "";
      let PWCerror = "";
      if (!username) {
        IDerror = "???????????? ??????????????????.";
      } else if (!isEmail(username)) {
        IDerror = "???????????? ?????? ??????????????????.";
      } else if (password.length < 6) {
        PWerror = "??????????????? 6?????? ??????????????? ?????????.";
      } else if (password !== passwordConfirm) {
        PWCerror = "???????????? ????????? ??????????????? ????????????.";
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

  const handleSubmit = () => {
    try {
      // await Auth.signUp({
      //   username,
      //   password,
      // });
      console.log("Sign-up Confirmed");
      navigation.navigate("SignUpAuthConfirm", { username, password });
    } catch (error) {
      console.log("Error signing up...", error);
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
          <PhaseText>?????? ????????? ??????????????????</PhaseText>
          <ExplainText>
            ?????? ?????? ????????????, ?????? ????????? ???????????? ????????????.
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <NameText>?????????</NameText>
          <BarInput
            placeholder={"???????????? ??????????????????"}
            stateFn={setusername}
            autoCapitalize="none"
            value={username}
          />
          <ErrorMessage message={IDerrorMessage} />
        </IDContainer>
        <PasswordContainer>
          <NameText>????????????</NameText>
          <BarInput
            placeholder={"??????????????? ??????????????????"}
            stateFn={setPassword}
            isPassword={true}
            value={password}
          />
          <ErrorMessage message={PWerrorMessage} />
        </PasswordContainer>
        <PasswordContainer>
          <NameText>???????????? ??????</NameText>
          <BarInput
            placeholder={"??????????????? ??????????????????"}
            stateFn={setPasswordConfirm}
            isPassword={true}
            value={passwordConfirm}
          />
          <ErrorMessage message={PWCerrorMessage} />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"??????"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
