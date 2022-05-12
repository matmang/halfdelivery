import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components";
import colors from "../../../colors";
import BarInput from "../../../components/Auth/BarInput";
import Btn from "../../../components/Auth/Btn";
import ConfirmBtn from "../../../components/Auth/ConfirmBtn";
import PhBarInput from "../../../components/Auth/PhBarInput";
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

const AuthContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${height * 21}px;
  padding-right: ${width * 24}px;
`;

const FirstContainer = styled.View`
  margin-top: ${width * 23};
  width: 100%;
`;

const InputContainer = styled.View`
  margin-top: ${width * 41};
  width: 100%;
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
  margin-left: ${width * 24}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [bank, setBank] = useState("");
  const [bankOpen, setBankOpen] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [value, setValue] = useState(null);
  const [accountNumber, setaccountNumber] = useState("");
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [phonenumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const [bankItems, setBankItems] = useState([
    { label: "KB국민은행", value: "1" },
    { label: "IBK기업은행", value: "2" },
    { label: "NH농협은행", value: "3" },
    { label: "신한은행", value: "4" },
    { label: "우리은행", value: "5" },
    { label: "KEB하나은행", value: "6" },
    { label: "씨티은행", value: "7" },
    { label: "DGB대구은행", value: "8" },
    { label: "BNK부산은행", value: "9" },
    { label: "SC제일은행", value: "10" },
    { label: "카카오뱅크", value: "11" },
  ]);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      bank &&
        accountNumber &&
        phonenumber &&
        authCode &&
        confirmed &&
        !phonenumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [
    bank,
    accountNumber,
    phonenumber,
    authCode,
    confirmed,
    phonenumberErrorMessage,
    authCodeErrorMessage,
  ]);

  useEffect(
    () => {
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
    },
    phonenumber,
    authCode
  );

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
      const user = await Auth.currentAuthenticatedUser();
      Auth.verifyCurrentUserAttributeSubmit("phone_number", authCode)
        .then(async () => {
          console.log("phone_number verified");
          await Auth.updateUserAttributes(user, {
            "custom:bank": bank.toString(),
            "custom:accountnumber": accountNumber.toString(),
          });
          alert("회원정보 변경에 성공했습니다.");
          navigation.goBack();
        })
        .catch((e) => {
          console.log("failed with error", e);
          alert("회원정보 변경에 실패했습니다.");
        });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <Container>
      <ExplainContainer>
        <ExplainText>
          본인 명의의 계좌번호를 입력해주세요.{"\n"}안전한 거래를 위해서
          사용되는 정보입니다.
        </ExplainText>
      </ExplainContainer>
      <InputAreaContainer>
        <FirstContainer>
          <NameText>은행명</NameText>
          <DropDownPicker
            open={bankOpen}
            value={value}
            setOpen={setBankOpen}
            setValue={setValue}
            setItems={setBankItems}
            items={bankItems}
            onSelectItem={(item) => {
              setBank(item.label);
            }}
            containerStyle={{ width: 364, marginLeft: 24, marginTop: 10 }}
            placeholder="은행을 선택해주세요"
          />
        </FirstContainer>
        <InputContainer>
          <NameText>계좌번호</NameText>
          <View style={{ marginLeft: 24 * width, marginTop: 21 * height }}>
            <BarInput
              placeholder={"'-'구분 없이 계좌번호를 입력해주세요"}
              stateFn={setaccountNumber}
              autoCapitalize="none"
              value={accountNumber}
              isValued={accountNumber ? true : false}
            />
          </View>
        </InputContainer>
        <InputContainer>
          <NameText>휴대폰 번호</NameText>
          <View style={{ marginLeft: 24 * width, marginTop: 21 * height }}>
            <PhBarInput
              placeholder={"'-'구분 없이 입력해주세요"}
              stateFn={setPhonenumber}
              autoCapitalize="none"
              value={phonenumber}
              isValued={phonenumber ? true : false}
              onPress={confirmFindId}
            />
          </View>
        </InputContainer>
        <InputContainer>
          <NameText>인증번호</NameText>
          <View style={{ marginLeft: 24 * width, marginTop: 19 * height }}>
            <BarInput
              placeholder={"인증번호 6자리를 입력해주세요"}
              stateFn={setAuthCode}
              autoCapitalize="none"
              value={authCode}
              isValued={authCode ? true : false}
            />
          </View>
        </InputContainer>
      </InputAreaContainer>
      <ButtonContainer>
        <Btn text={"확인"} accent={accent} onPress={handleSubmit} />
      </ButtonContainer>
    </Container>
  );
};
