import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import { height, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const NameContainer = styled.View`
  margin-top: ${height * 53}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const BirthdayContainer = styled.View`
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
  font-family: "noto-medium";
  font-size: 24px;
  margin-top: ${height * 22}px;
  margin-left: ${width * 24}px;
  line-height: 40px;
`;

const NameText = styled.Text`
  font-family: "noto-semibold";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [birthdayErrorMessage, setBirthdayErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(name && birthday && !nameErrorMessage && !birthdayErrorMessage);
  }, [name, birthday, nameErrorMessage, birthdayErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let nameError = "";
      let birthdayError = "";
      if (!name) {
        nameError = "이름을 입력해주세요.";
      } else if (birthday.length != 8) {
        birthdayError = "생년월일 8자리를 입력해주세요.";
      } else {
        nameError = "";
        birthdayError = "";
      }
      setNameErrorMessage(nameError);
      setBirthdayErrorMessage(birthdayError);
    } else {
      refDidMount.current = true;
    }
  }, [name, birthday]);

  const handleSubmit = () => {
    try {
      navigation.navigate("SignUpPassword", { name, birthday });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </ProgressContainer>
        <TitleText>{"환영합니다 !\n회원 정보를 입력해주세요"}</TitleText>
        <NameContainer>
          <NameText>이름</NameText>
          <BarInput
            placeholder={"실명을 입력해주세요"}
            stateFn={setName}
            autoCapitalize="none"
            value={name}
            isValued={name ? true : false}
            error={nameErrorMessage ? true : false}
          />
          <ErrorMessage message={nameErrorMessage} />
        </NameContainer>
        <BirthdayContainer>
          <NameText>생년월일</NameText>
          <BarInput
            placeholder={"생년월일을 입력해주세요     (ex. 19980216)"}
            stateFn={setBirthday}
            isbirthday={true}
            value={birthday}
            isValued={birthday ? true : false}
            error={birthdayErrorMessage ? true : false}
          />
          <ErrorMessage message={birthdayErrorMessage} />
        </BirthdayContainer>
        <ButtonContainer>
          <Btn text={"다음"} accent={accent} onPress={handleSubmit} />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
