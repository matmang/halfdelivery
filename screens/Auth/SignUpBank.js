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
import { logIn, userLogin } from "../../redux/usersSlice";

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
  bottom: 30px;
`;

const PhaseText = styled.Text`
  font-family: "noto-regular";
  font-size: 22px;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: -20px;
`;

const NameText = styled.Text`
  font-family: "noto-regular";
  font-size: 15px;
  color: ${colors.mainBlue};
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
  const [bank, setbank] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [accent, setAccent] = useState(false);

  const dispatch = useDispatch();

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(bank && accountNumber);
  }, [bank, accountNumber]);

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        "custom:bank": bank,
        "custom:accountnumber": accountNumber.toString(),
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:bank"],
        currentUserInfo.attributes["custom:accountnumber"]
      );
      dispatch(userLogin(username, password));
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
          <BarInput
            placeholder={"은행을 선택해주세요"}
            stateFn={setbank}
            autoCapitalize="none"
            value={bank}
            isValued={bank ? true : false}
          />
        </IDContainer>
        <PasswordContainer>
          <NameText>계좌번호</NameText>
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
