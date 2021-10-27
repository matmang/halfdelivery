import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { SafeAreaView } from "react-native";
import Input from "../../components/Auth/Input";
import Btn from "../../components/Auth/Btn";
import styled from "styled-components";
import colors from "../../colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
  margin-top: 100px;
`;

const Title = styled.Text`
  font-size: 20;
  color: ${colors.mainBlue};
  font-weight: 500;
`;

export default ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");

  const confirmSignUp = async () => {
    try {
      await Auth.confirmSignUp(email, authCode);
      console.log("code confirmed");
      navigation.navigate("SignIn");
    } catch (error) {
      console.log("verification code dose not match.", error.code);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Container>
        <InputContainer>
          <Title>인증 번호 확인</Title>
          <Input
            value={email}
            placeholder="이메일"
            autoCapitalize="none"
            stateFn={setEmail}
          />
          <Input
            value={authCode}
            placeholder="인증번호"
            autoCapitalize="none"
            stateFn={setAuthCode}
          />
        </InputContainer>
        <Btn text={"인증"} accent onPress={confirmSignUp} />
      </Container>
    </SafeAreaView>
  );
};
