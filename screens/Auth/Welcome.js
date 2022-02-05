import React, { useState } from "react";
import { Image, ImageBackground, Text } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import colors from "../../colors";
import SignInModal from "../../components/Auth/SignInModal";
import loginbackground from "../../assets/images/loginbackground.png";
import Btn from "../../components/Auth/Btn";
import DropDownPicker from "react-native-dropdown-picker";
import { height, width } from "../../utils";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const WelcomeContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 24}px;
`;

const BodyContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${height * 53}px;
`;

const ExplainContainer = styled.View`
  flex-direction: row;
  margin-top: ${height * 19}px;
  justify-content: space-between;
`;

const TouchContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-left: ${width * 49}px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: ${height * 10}px;
`;

const SecondContainer = styled.View`
  margin-top: ${height * 20}px;
`;

const WelcomeText = styled.Text`
  font-family: "nunito-regular";
  font-size: 40px;
  font-weight: bold;
  color: ${colors.mainBlue};
`;

const WelcomeTextKR = styled.Text`
  font-family: "noto-regular";
  font-size: 20px;
  font-weight: bold;
  color: ${colors.mainBlue};
`;

const BlackText = styled.Text`
  font-family: "noto-regular";
  font-size: 15px;
  margin-right: auto;
  margin-left: ${width * 49}px;
`;

const BlueText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  margin-left: ${width * 8}px;
  color: ${colors.mainBlue};
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 12px;
  color: ${colors.blueGrey};
`;

export default ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [data, setData] = useState([{ label: "한양대학교 ERICA", value: "1" }]);

  return (
    <Container>
      <ImageBackground
        source={loginbackground}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="stretch"
      >
        <LogoContainer>
          <Image
            source={require("../../assets/images/halfLogo.png")}
            style={{ width: 83, height: 120 }}
          />
        </LogoContainer>
        <WelcomeContainer>
          <WelcomeText>Welcome</WelcomeText>
          <WelcomeTextKR>어서오세요, 하프디 입니다 !</WelcomeTextKR>
        </WelcomeContainer>
        <BodyContainer>
          <Btn
            onPress={() => setIsModalVisible(true)}
            text="로그인"
            accent={true}
          />
          <SecondContainer>
            <Btn
              onPress={() => navigation.navigate("SignUpAuth")}
              text="회원가입"
              accent={true}
            />
          </SecondContainer>
          <ExplainContainer>
            <TouchableOpacity onPress={() => navigation.navigate("FindId")}>
              <ExplainText>아이디 찾기 </ExplainText>
            </TouchableOpacity>
            <ExplainText> | </ExplainText>
            <TouchableOpacity
              onPress={() => navigation.navigate("FindPassword")}
            >
              <ExplainText> 비밀번호 찾기</ExplainText>
            </TouchableOpacity>
          </ExplainContainer>
        </BodyContainer>
        <SignInModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        />
        <Footer>
          <ExplainText>
            하프딜리버리는1인가구 배달음식 주문을 도와주는 서비스 입니다
          </ExplainText>
        </Footer>
      </ImageBackground>
    </Container>
  );
};
