import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, ScrollView } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import DismissKeyboard from "../../components/DismissKeyboard";
import { useDispatch } from "react-redux";
import colors from "../../colors";
import {
  toggleTermAd,
  toggleTermPersonal,
  toggleTermService,
  userLogin,
} from "../../redux/usersSlice";
import CircleCheckBox, { LABEL_POSITION } from "react-native-circle-checkbox";

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
  z-index: 10;
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

const Distributionline = styled.View`
  height: 0;
  width: 336px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.mainBlue};
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

const TermText = styled.Text`
  font-family: "noto-regular";
  font-size: 15px;
  color: ${colors.mainBlue};
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
  const [termAllCheck, setTermAllCheck] = useState(false);
  const [termService, setTermService] = useState(false);
  const [termPersonal, setTermPersonal] = useState(false);
  const [termAd, setTermAd] = useState(false);
  const [accent, setAccent] = useState(false);

  const dispatch = useDispatch();

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(termService && termPersonal);
  }, [termService, termPersonal]);

  const handleSubmit = async () => {
    try {
      dispatch(toggleTermService(termService));
      dispatch(toggleTermPersonal(termPersonal));
      dispatch(toggleTermAd(termAd));
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
          <PhaseText>약관동의</PhaseText>
          <ExplainText>
            하프딜리버리 회원가입을 위해 약관에 동의해주세요
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <CircleCheckBox
            checked={termAllCheck}
            onToggle={(checked) => {
              setTermAllCheck(checked);
              setTermAd(checked);
              setTermPersonal(checked);
              setTermService(checked);
            }}
            labelPosition={LABEL_POSITION.RIGHT}
            label="전체 동의하기"
            outerColor={colors.blueGrey}
            innerColor={colors.mainBlue}
            outerSize={20}
            filterSize={17}
            innerSize={10}
          />
          <Distributionline></Distributionline>
          <CircleCheckBox
            checked={termService}
            onToggle={(checked) => setTermService(checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label="(필수) 서비스 이용약관"
            outerColor={colors.blueGrey}
            innerColor={colors.mainBlue}
            outerSize={20}
            filterSize={17}
            innerSize={10}
            styleCheckboxContainer={{ marginTop: 25 }}
          />
          <CircleCheckBox
            checked={termPersonal}
            onToggle={(checked) => setTermPersonal(checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label="(필수) 개인정보 수집 및 이용동의"
            outerColor={colors.blueGrey}
            innerColor={colors.mainBlue}
            outerSize={20}
            filterSize={17}
            innerSize={10}
            styleCheckboxContainer={{ marginTop: 25 }}
          />
          <CircleCheckBox
            checked={termAd}
            onToggle={(checked) => setTermAd(checked)}
            labelPosition={LABEL_POSITION.RIGHT}
            label="(선택) 광고성 메일 수신동의"
            outerColor={colors.blueGrey}
            innerColor={colors.mainBlue}
            outerSize={20}
            filterSize={17}
            innerSize={10}
            styleCheckboxContainer={{ marginTop: 25 }}
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
