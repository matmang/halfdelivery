import React, { useEffect, useRef, useState } from "react";
import { Image, Pressable } from "react-native";
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
import { height, width } from "../../utils";

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
  margin-top: ${height * 24}px;
  height: ${height * 56}px;
`;

const IDContainer = styled.View`
  margin-top: ${height * 74}px;
  margin-left: ${width * 23}px;
  margin-right: auto;
  justify-content: flex-start;
  z-index: 10;
`;

const CheckboxContainer = styled.View`
  margin-top: ${height * 25}px;
  flex-direction: row;
  align-items: center;
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

const Distributionline = styled.View`
  height: 0;
  width: ${width * 364}px;
  margin-top: ${height * 8}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryBlue};
`;

const PhaseText = styled.Text`
  font-family: "noto-medium";
  font-size: 22px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  color: #3c3c3c;
  margin-top: ${height * 10}px;
  include-font-padding: false;
  text-align-vertical: center;
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
            source={require("../../assets/images/SignUp4.png")}
            style={{ width: width * 42, height: height * 42 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>약관동의</PhaseText>
          <ExplainText>
            하프딜리버리 회원가입을 위해 약관에 동의해주세요
          </ExplainText>
        </PhaseContainer>
        <IDContainer>
          <CheckboxContainer>
            <Pressable
              onPress={() => {
                setTermAllCheck(!termAllCheck);
                setTermService(!termAllCheck);
                setTermPersonal(!termAllCheck);
                setTermAd(!termAllCheck);
              }}
            >
              {termAllCheck ? (
                <Image
                  source={require("../../assets/images/circle_checkbox_on.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/circle_checkbox_off.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
            </Pressable>
          </CheckboxContainer>
          <Distributionline></Distributionline>
          <CheckboxContainer>
            {termService ? (
              <Image
                source={require("../../assets/images/circle_checkbox_on.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            ) : (
              <Image
                source={require("../../assets/images/circle_checkbox_off.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            )}
          </CheckboxContainer>
          <CheckboxContainer>
            {termPersonal ? (
              <Image
                source={require("../../assets/images/circle_checkbox_on.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            ) : (
              <Image
                source={require("../../assets/images/circle_checkbox_off.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            )}
          </CheckboxContainer>
          <CheckboxContainer>
            {termAd ? (
              <Image
                source={require("../../assets/images/circle_checkbox_on.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            ) : (
              <Image
                source={require("../../assets/images/circle_checkbox_off.png")}
                style={{
                  width: width * 20,
                  height: height * 20,
                  resizeMode: "contain",
                }}
              />
            )}
          </CheckboxContainer>
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
