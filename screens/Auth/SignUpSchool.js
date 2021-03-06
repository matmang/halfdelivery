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
  bottom: 30;
`;

const PhaseText = styled.Text`
  font-family: "noto-regular";
  font-size: 22;
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  color: #3c3c3c;
  margin-top: -20px;
`;

const NameText = styled.Text`
  font-family: "noto-regular";
  font-size: 15;
  color: ${colors.mainBlue};
`;

export default ({ route: { params }, navigation }) => {
  const [username, setusername] = useState(params?.username);
  const [password, setPassword] = useState(params?.password);
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [accent, setAccent] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(school && college);
  }, [school, college]);

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {
        "custom:school": school,
        "custom:college": college,
      });
      console.log("Update Complete");
      const currentUserInfo = await Auth.currentUserInfo();
      console.log(
        currentUserInfo.attributes["custom:school"],
        currentUserInfo.attributes["custom:college"],
        currentUserInfo.attributes["custom:birthday"]
      );
      navigation.navigate("SignUpBank", { username, password });
    } catch (error) {
      console.log("Error signing up...", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/SignUp2.png")}
            style={{ width: 180, height: 45 }}
          />
        </ProgressContainer>
        <PhaseContainer>
          <PhaseText>??????????????? ??????????????????</PhaseText>
          <ExplainText>????????? ????????? ????????? ???????????? ???????????????.</ExplainText>
        </PhaseContainer>
        <IDContainer>
          <NameText>??????</NameText>
          <BarInput
            placeholder={"????????? ??????????????????"}
            stateFn={setSchool}
            autoCapitalize="none"
            value={school}
          />
        </IDContainer>
        <PasswordContainer>
          <NameText>????????????</NameText>
          <BarInput
            placeholder={"??????????????? ??????????????????"}
            stateFn={setCollege}
            autoCapitalize="none"
            value={college}
          />
        </PasswordContainer>
        <ButtonContainer>
          <Btn
            text={"??????"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
      </Container>
    </DismissKeyboard>
  );
};
