import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import ConfirmBtn from "../../components/Auth/ConfirmBtn";
import { height, isPhoneNum, width } from "../../utils";
import { Auth } from "aws-amplify";
import PhBarInput from "../../components/Auth/PhBarInput";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const PhonenumberContainer = styled.View`
  margin-top: ${height * 68}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  justify-content: flex-start;
`;

const AuthCodeContainer = styled.View`
  margin-top: ${height * 24}px;
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
  include-font-padding: false;
  text-align-vertical: center;
`;

const SubTitleText = styled.Text`
  font-family: "gothic-regular";
  font-size: 14px;
  margin-left: ${width * 24}px;
  line-height: 40px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "gothic-medium";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ route: { params }, navigation }) => {
  const [password, setPassword] = useState(params?.password);
  const [name, setName] = useState(params?.name);
  const [birthday, setBirthday] = useState(params?.birthday);
  const [phonenumber, setPhonenumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [phonenumberErrorMessage, setPhonenumberErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(phonenumber && authCode && !phonenumberErrorMessage);
  }, [phonenumber, authCode, phonenumberErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let phonenumberError = "";
      if (!phonenumber) {
        phonenumberError = "휴대폰 번호를 입력해주세요.";
      } else if (!isPhoneNum(phonenumber)) {
        phonenumberError = "올바른 휴대폰 번호를 입력해주세요.";
      } else {
        phonenumberError = "";
      }
      setPhonenumberErrorMessage(phonenumberError);
    } else {
      refDidMount.current = true;
    }
  });

  const handleSubmit = async () => {
    try {
      await Auth.signUp({
        username: birthday,
        password,
        attributes: {
          name: name,
          phone_number: "+82" + phonenumber.slice(1, 11),
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
      await Auth.confirmSignUp(birthday, authCode);
      Auth.signIn(birthday, password);
      navigation.navigate("SignUpSchool", {
        name,
        birthday,
        password,
        phonenumber,
      });
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
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </ProgressContainer>
        <TitleText>본인인증을 진행해 주세요</TitleText>
        <SubTitleText>
          본인 확인 절차이며, 다른 용도로 사용되지 않습니다.
        </SubTitleText>
        <PhonenumberContainer>
          <NameText>휴대폰 번호</NameText>
          <PhBarInput
            placeholder={"'-'구분 없이 입력해주세요"}
            stateFn={setPhonenumber}
            value={phonenumber}
            isValued={phonenumber ? true : false}
            error={phonenumberErrorMessage ? true : false}
            onPress={handleSubmit}
          />
          <ErrorMessage message={phonenumberErrorMessage} />
        </PhonenumberContainer>
        <AuthCodeContainer>
          <NameText>인증번호</NameText>
          <BarInput
            placeholder={"인증번호 숫자 6자리를 입력해주세요"}
            stateFn={setAuthCode}
            isPassword={true}
            value={authCode}
            isValued={authCode ? true : false}
          />
        </AuthCodeContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={() => {
              confirmSignUp();
            }}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
