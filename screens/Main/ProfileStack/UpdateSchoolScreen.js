import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styled from "styled-components";
import colors from "../../../colors";
import BarInput from "../../../components/Auth/BarInput";
import Btn from "../../../components/Auth/Btn";
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
  font-family: "gothic-regular";
  font-size: ${width * 14};
  text-align: center;
  line-height: 20px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "gothic-medium";
  font-size: ${width * 17}px;
  color: ${colors.primaryBlue};
`;

export default ({ navigation }) => {
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [accent, setAccent] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [authCodeErrorMessage, setAuthCodeErrorMessage] = useState("");
  const [phonenumberErrorMessage, setPhoneNumberErrorMessage] = useState("");
  const [value, setValue] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [schoolItems, setSchoolItems] = useState([
    { label: "한양대학교 ERICA", value: "ERICA" },
  ]);
  const [collegeItems, setCollegeItems] = useState([
    { label: "공학대학", value: "1" },
    { label: "소프트웨어융합대학", value: "2" },
    { label: "약학대학", value: "3" },
    { label: "과학기술융합대학", value: "4" },
    { label: "국제문화대학", value: "5" },
    { label: "언론정보대학", value: "6" },
    { label: "경상대학", value: "7" },
    { label: "디자인대학", value: "8" },
    { label: "예체능대학", value: "9" },
    { label: "창의융합교육원", value: "10" },
  ]);

  const [schoolPlaceholder, setSchoolPlaceholder] =
    useState("학교를 선택해주세요");
  const [collegePlaceholder, setCollegePlaceholder] =
    useState("단과대학을 선택해주세요");

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(
      school &&
        college &&
        phonenumber &&
        authCode &&
        confirmed &&
        !phonenumberErrorMessage &&
        !authCodeErrorMessage
    );
  }, [
    school,
    college,
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
      const user = await Auth.currentAuthenticatedUser();

      Auth.verifyCurrentUserAttributeSubmit("phone_number", authCode)
        .then(async () => {
          console.log("phone_number verified");
          await Auth.updateUserAttributes(user, {
            "custom:school": school.toString(),
            "custom:college": college.toString(),
          });
          alert("회원정보 변경에 성공했습니다.");
          navigation.goBack();
        })
        .catch((e) => {
          console.log("failed with error", e);
          alert("회원정보 변경에 실패했습니다.");
        });
    } catch (error) {
      console.log("Error update...", error);
    }
  };

  return (
    <Container>
      <ExplainContainer>
        <ExplainText>
          본인 명의의 학과 정보를 입력해주세요.{"\n"}안전한 거래를 위해서
          사용되는 정보입니다.
        </ExplainText>
      </ExplainContainer>
      <InputAreaContainer>
        <FirstContainer>
          <NameText>학교</NameText>
          <DropDownPicker
            open={schoolOpen}
            value={value}
            setOpen={setSchoolOpen}
            setValue={setValue}
            setItems={setSchoolItems}
            items={schoolItems}
            onSelectItem={(item) => {
              setSchool(item.label);
              setSchoolPlaceholder(item.label);
            }}
            containerStyle={{ width: 364, marginTop: 10 }}
            placeholder={schoolPlaceholder}
            zIndex={100}
          />
        </FirstContainer>
        <InputContainer>
          <NameText>단과대학</NameText>
          <DropDownPicker
            open={collegeOpen}
            value={value}
            setOpen={setCollegeOpen}
            setValue={setValue}
            setItems={setCollegeItems}
            items={collegeItems}
            onSelectItem={(item) => {
              setCollege(item.label);
              setCollegePlaceholder(item.label);
            }}
            containerStyle={{ width: 364, marginTop: 10 }}
            placeholder={collegePlaceholder}
            zIndex={100}
          />
        </InputContainer>
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
        </InputContainer>
      </InputAreaContainer>
      <ButtonContainer>
        <Btn text={"확인"} accent={accent} onPress={handleSubmit} />
      </ButtonContainer>
    </Container>
  );
};
