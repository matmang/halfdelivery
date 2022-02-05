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
  margin-top: ${height * 80};
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
  z-index: 10;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 15}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  margin-top: ${height * 40}px;
  position: absolute;
  bottom: ${height * 30}px;
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
  color: ${colors.mainBlue};
`;

const AccountText = styled.Text`
  margin-top: ${height * 15}px;
  font-family: "noto-regular";
  font-size: 15px;
  color: ${colors.mainBlue};
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
            style={{ width: 180, height: 45 }}
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
          <AccountText>계좌번호</AccountText>
          <BarInput
            placeholder={"'-'구분 없이 계좌번호를 입력해주세요"}
            stateFn={setaccountNumber}
            autoCapitalize="none"
            value={accountNumber}
            isValued={accountNumber ? true : false}
          />
        </IDContainer>
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
