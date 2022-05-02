import React from "react";
import { Image, ImageBackground } from "react-native";
import styled from "styled-components";
import loginbackground from "../../assets/images/welcome.png";
import { height, width } from "../../utils";
import LoginBtn from "../../components/Auth/LoginBtn";
import SignUpBtn from "../../components/Auth/SignUpBtn";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 241.8}px;
`;

const WelcomeContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${height * 32}px;
`;

const BodyContainer = styled.View`
  width: 100%;
  margin-left: ${width * 24}px;
  margin-top: ${height * 226.4}px;
`;

const SecondContainer = styled.View`
  margin-top: ${height * 40}px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <ImageBackground
        source={loginbackground}
        style={{
          width: "100%",
          height: "100%",
        }}
        resizeMode="stretch"
      >
        <LogoContainer>
          <Image
            source={require("../../assets/images/halfd_logo.png")}
            style={{ width: width * 60, height: height * 87.02 }}
          />
        </LogoContainer>
        <WelcomeContainer>
          <Image
            source={require("../../assets/images/font_logo.png")}
            style={{
              width: width * 203.06,
              height: height * 20.72,
              resizeMode: "stretch",
            }}
          />
        </WelcomeContainer>
        <BodyContainer>
          <LoginBtn
            onPress={() => navigation.navigate("SignIn")}
            text="로그인"
          />
          <SecondContainer>
            <SignUpBtn
              onPress={() => navigation.navigate("SignUpAuth")}
              text="회원가입"
            />
          </SecondContainer>
        </BodyContainer>
      </ImageBackground>
    </Container>
  );
};
