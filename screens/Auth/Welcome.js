import React, { useState } from "react";
import { Image, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import colors from "../../colors";
import SignInModal from "../../components/Auth/SignInModal";
import loginbackground from "../../assets/images/loginbackground.png";

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
  margin-top: 23px;
`;

const BodyContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 73px;
`;

const ExplainContainer = styled.View`
  flex-direction: row;
  margin-right: auto;
`;

const TouchContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-right: auto;
  margin-left: 49px;
`;

const Footer = styled.View`
  position: absolute;
  bottom: 10px;
`;

const WhiteCircle = styled.View`
  width: 27px;
  height: 27px;
  border-radius: 50px;
  margin-left: 35px;
  background-color: white;
  position: absolute;
`;

const SecondContainer = styled.View`
  margin-right: auto;
  margin-top: 20px;
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
  margin-left: 49px;
`;

const BlueText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  margin-left: 8px;
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
          <ExplainContainer>
            <WhiteCircle></WhiteCircle>
            <BlackText>또 만나서 반가워요!</BlackText>
          </ExplainContainer>
          <TouchContainer onPress={toggleModal}>
            <Ionicons
              color={colors.mainBlue}
              size={15}
              name={
                Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
              }
            />
            <BlueText>기존 아이디 로그인</BlueText>
          </TouchContainer>
          <TouchContainer>
            <Ionicons
              color={colors.mainBlue}
              size={15}
              name={
                Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
              }
            />
            <BlueText>카카오 계정 로그인</BlueText>
          </TouchContainer>
          <SecondContainer>
            <ExplainContainer>
              <WhiteCircle></WhiteCircle>
              <BlackText>하프디가 처음이라면</BlackText>
            </ExplainContainer>
            <TouchContainer onPress={() => navigation.navigate("SignUpAuth")}>
              <Ionicons
                color={colors.mainBlue}
                size={15}
                name={
                  Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
                }
              />
              <BlueText>NEW 회원가입</BlueText>
            </TouchContainer>
            <TouchContainer>
              <Ionicons
                color={colors.mainBlue}
                size={15}
                name={
                  Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
                }
              />
              <BlueText>카카오 계정 회원가입</BlueText>
            </TouchContainer>
          </SecondContainer>
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
