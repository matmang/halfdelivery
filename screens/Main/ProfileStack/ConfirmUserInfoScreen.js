import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components";
import colors from "../../../colors";
import BarInput from "../../../components/Auth/BarInput";
import Btn from "../../../components/Auth/Btn";
import ErrorMessage from "../../../components/Auth/ErrorMessage";
import PhBarInput from "../../../components/Auth/PhBarInput";
import UserDeleteFinalModal from "../../../components/Profile/UserDeleteFinalModal";
import UserDeleteModal from "../../../components/Profile/UserDeleteModal";
import UserDeleteSurvey from "../../../components/Profile/UserDeleteSurvey";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ExplainContainer = styled.View`
  width: ${width * 416}px;
  height: ${height * 116}px;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

const InputAreaContainer = styled.View`
  background-color: white;
  width: 100%;
  margin-top: ${height * 8}px;
`;

const FirstContainer = styled.View`
  margin-top: ${height * 23}px;
  width: 100%;
  margin-left: ${width * 24}px;
`;

const InputContainer = styled.View`
  margin-top: ${height * 45}px;
  width: 100%;
  margin-left: ${width * 24}px;
`;

const AuthContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${height * 21}px;
  padding-right: ${width * 48}px;
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

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: ${width * 14};
  text-align: center;
  line-height: 20px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: ${width * 17}px;
  color: ${colors.primaryBlue};
`;

export default ({ navigation }) => {
  const [phonenumber, setPhonenumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [accent, setAccent] = useState(false);
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [phonenumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [authUser, setAuthUser] = useState(undefined);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSurveyVisible, setIsSurveyVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(true);
  const [name, setName] = useState("");

  const refDidMount = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Auth.currentAuthenticatedUser().then(setAuthUser);
      const currentUserInfo = await Auth.currentUserInfo();
      setName(currentUserInfo.attributes["name"]);
    };
    fetchUserData();
    console.log(isSurveyVisible);
  }, []);

  useEffect(() => {
    setAccent(
      phonenumber &&
        authCode &&
        confirmed &&
        !phonenumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [
    phonenumber,
    authCode,
    confirmed,
    phonenumberErrorMessage,
    authCodeErrorMessage,
  ]);

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
  }, [phonenumber, authCode]);

  const confirmFindId = () => {
    Auth.verifyCurrentUserAttribute("phone_number")
      .then(() => {
        setConfirmed(true);
        console.log("a verification code is sent");
      })
      .catch((e) => {
        console.log("failed with error", e);
      });
    alert("입력하신 전화번호로 인증문자가 전송되었습니다.");
  };

  const handleSubmit = async () => {
    try {
      setIsModalVisible(true);
    } catch (error) {
      console.log("Error update...", error);
    }
  };

  return (
    <Container>
      <ExplainContainer>
        <ExplainText>
          회원님의 소중한 정보 보호를 위해,{"\n"}하프딜리버리 계정의 회원정보를
          확인해 주세요.
        </ExplainText>
      </ExplainContainer>
      <InputAreaContainer>
        <FirstContainer>
          <AuthContainer>
            <NameText>이름</NameText>
          </AuthContainer>
          <BarInput
            placeholder={"이름을 입력해주세요"}
            stateFn={setAuthCode}
            value={name}
            isValued={name ? true : false}
            error={false}
            disabled
          />
        </FirstContainer>
        <InputContainer>
          <AuthContainer>
            <NameText>휴대폰 번호</NameText>
          </AuthContainer>
          <PhBarInput
            placeholder={"- 구분 없이 입력해주세요"}
            stateFn={setPhonenumber}
            value={phonenumber}
            isValued={phonenumber ? true : false}
            error={phonenumberErrorMessage ? true : false}
            onPress={confirmFindId}
          />
          <ErrorMessage>{phonenumberErrorMessage}</ErrorMessage>
        </InputContainer>
        <InputContainer>
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
          <ErrorMessage>{authCodeErrorMessage}</ErrorMessage>
        </InputContainer>
      </InputAreaContainer>
      <ButtonContainer>
        <Btn text={"확인"} accent={accent} onPress={handleSubmit} />
      </ButtonContainer>
      <UserDeleteModal
        isModalVisible={isModalVisible}
        onBackdropPress={() => setIsModalVisible(false)}
        navigation={navigation}
        setIsModalVisible={setIsModalVisible}
      />
      <UserDeleteSurvey
        isModalVisible={isSurveyVisible}
        onBackdropPress={() => setIsSurveyVisible(false)}
        navigation={navigation}
        setIsModalVisible={setIsSurveyVisible}
      />
      <UserDeleteFinalModal
        isModalVisible={isDeleteVisible}
        onBackdropPress={() => setIsDeleteVisible(false)}
        navigation={navigation}
        setIsModalVisible={setIsDeleteVisible}
      />
    </Container>
  );
};
