import React from "react";
import { Image, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import colors from "../../colors";
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
  bottom: 10;
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
  font-size: 40;
  font-weight: bold;
  color: ${colors.mainBlue};
`;

const WelcomeTextKR = styled.Text`
  font-family: "noto-regular";
  font-size: 20;
  font-weight: bold;
  color: ${colors.mainBlue};
`;

const BlackText = styled.Text`
  font-family: "noto-regular";
  font-size: 15;
  margin-right: auto;
  margin-left: 49px;
`;

const BlueText = styled.Text`
  font-family: "noto-regular";
  font-size: 17;
  margin-left: 8;
  color: ${colors.mainBlue};
`;

const ExplainText = styled.Text`
  font-family: "noto-regular";
  font-size: 12;
  color: ${colors.blueGrey};
`;

export default ({ navigation }) => {
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
          <WelcomeTextKR>???????????????, ????????? ????????? !</WelcomeTextKR>
        </WelcomeContainer>
        <BodyContainer>
          <ExplainContainer>
            <WhiteCircle></WhiteCircle>
            <BlackText>??? ????????? ????????????!</BlackText>
          </ExplainContainer>
          <TouchContainer onPress={() => navigation.navigate("SignIn")}>
            <Ionicons
              color={colors.mainBlue}
              size={15}
              name={
                Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
              }
            />
            <BlueText>?????? ????????? ?????????</BlueText>
          </TouchContainer>
          <TouchContainer>
            <Ionicons
              color={colors.mainBlue}
              size={15}
              name={
                Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
              }
            />
            <BlueText>????????? ?????? ?????????</BlueText>
          </TouchContainer>
          <SecondContainer>
            <ExplainContainer>
              <WhiteCircle></WhiteCircle>
              <BlackText>???????????? ???????????????</BlackText>
            </ExplainContainer>
            <TouchContainer onPress={() => navigation.navigate("SignUpAuth")}>
              <Ionicons
                color={colors.mainBlue}
                size={15}
                name={
                  Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
                }
              />
              <BlueText>NEW ????????????</BlueText>
            </TouchContainer>
            <TouchContainer>
              <Ionicons
                color={colors.mainBlue}
                size={15}
                name={
                  Platform.OS === "android" ? "md-arrow-forward" : "ios-search"
                }
              />
              <BlueText>????????? ?????? ????????????</BlueText>
            </TouchContainer>
          </SecondContainer>
        </BodyContainer>
        <Footer>
          <ExplainText>
            ?????????????????????1????????? ???????????? ????????? ???????????? ????????? ?????????
          </ExplainText>
        </Footer>
      </ImageBackground>
    </Container>
  );
};
