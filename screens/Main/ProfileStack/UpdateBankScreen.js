import { Auth } from "aws-amplify";
import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import colors from "../../../colors";
import BarInput from "../../../components/Auth/BarInput";
import Btn from "../../../components/Auth/Btn";
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
  margin-top: ${width * 41};
  width: 100%;
`;

const InputContainer = styled.View`
  margin-top: ${width * 45};
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
  include-font-padding: false;
  text-align-vertical: center;
`;

const NameText = styled.Text`
  font-family: "noto-medium";
  font-size: ${width * 17}px;
  color: ${colors.primaryBlue};
  margin-left: ${width * 24}px;
`;

export default ({ navigation }) => {
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
      const user = await Auth.currentAuthenticatedUser();
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
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <Container>
      <ExplainContainer>
        <ExplainText>본인 명의의 학과 정보를 입력해주세요.</ExplainText>
        <ExplainText>안전한 거래를 위해서 사용되는 정보입니다.</ExplainText>
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
            containerStyle={{ width: 336, marginLeft: 24, marginTop: 21 }}
            placeholder="은행을 선택해주세요"
          />
        </FirstContainer>
        <InputContainer>
          <NameText>계좌번호</NameText>
          <View style={{ marginLeft: 24 * width, marginTop: 19 * height }}>
            <BarInput
              placeholder={"'-'구분 없이 계좌번호를 입력해주세요"}
              stateFn={setaccountNumber}
              autoCapitalize="none"
              value={accountNumber}
              isValued={accountNumber ? true : false}
            />
          </View>
        </InputContainer>
      </InputAreaContainer>
      <ButtonContainer>
        <Btn text={"확인"} accent={true} onPress={handleSubmit} />
      </ButtonContainer>
    </Container>
  );
};
