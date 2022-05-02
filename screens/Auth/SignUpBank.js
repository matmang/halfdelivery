import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import DismissKeyboard from "../../components/DismissKeyboard";
import { height, width } from "../../utils";
import { useDispatch } from "react-redux";
import Auth from "@aws-amplify/auth";
import colors from "../../colors";
import DropDownPicker from "react-native-dropdown-picker";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 110}px;
`;

const PhaseContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 23}px;
  height: ${height * 56}px;
`;

const IDContainer = styled.View`
  margin-top: ${height * 74}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
  z-index: 10;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 46}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
  z-index: 1;
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

const PhaseText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 22px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  font-family: "gothica1-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: ${height * 10}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 15px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const AccountText = styled.Text`
  margin-bottom: ${height * 21}px;
  font-family: "gothica1-medium";
  font-size: 15px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
  const [bank, setBank] = useState("");
  const [bankOpen, setBankOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [accountNumber, setaccountNumber] = useState("");
  const [accent, setAccent] = useState(false);

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

  const dispatch = useDispatch();

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(bank && accountNumber);
  }, [bank, accountNumber]);

  const handleSubmit = async () => {
    try {
      const user = await Auth.signIn(params.username, params.password);
      await Auth.updateUserAttributes(user, {
        "custom:bank": bank.toString(),
        "custom:accountnumber": accountNumber.toString(),
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:bank"],
        currentUserInfo.attributes["custom:accountnumber"]
      );
      navigation.navigate("SignUpTerms", { username, password });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/SignUp3.png")}
            style={{ width: width * 180, height: height * 44 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>금융정보를 입력해주세요</PhaseText>
          <ExplainText>본인 명의의 계좌번호를 등록해주세요.</ExplainText>
          <ExplainText>안전한 거래를 위해서 사용되는 정보입니다.</ExplainText>
        </PhaseContainer>
        <IDContainer>
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
            containerStyle={{ width: 336 }}
            placeholder="은행을 선택해주세요"
          />
        </IDContainer>
        <PasswordContainer>
          <AccountText>계좌번호</AccountText>
          <BarInput
            placeholder={"'-'구분 없이 계좌번호를 입력해주세요"}
            stateFn={setaccountNumber}
            autoCapitalize="none"
            value={accountNumber}
            isValued={accountNumber ? true : false}
          />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
