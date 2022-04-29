import React, { useEffect, useState } from "react";
import { Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components";
import colors from "../../colors";
import SignInModal from "../../components/Auth/SignInModal";
import loginbackground from "../../assets/images/welcome.png";
import Btn from "../../components/Auth/Btn";
import { height, width } from "../../utils";
import { checkFirstLaunch } from "../../redux/checkFirstLaunch";

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

const Footer = styled.View`
  position: absolute;
  height: ${height * 65}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  bottom: 0;
  background-color: ${colors.blueGray2};
`;

const SecondContainer = styled.View`
  margin-top: ${height * 20}px;
`;

const WelcomeText = styled.Text`
  font-family: "nunito-semibold";
  font-size: 40px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const WelcomeTextKR = styled.Text`
  font-family: "noto-bold";
  font-size: 20px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const BlueTextER = styled.Text`
  font-family: "nunito-semibold";
  font-size: 17px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const BlueTextKR = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  font-family: "noto-medium";
  font-size: 12px;
  color: ${colors.captionGray};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    const checkIsFirst = async () => {
      const isFirstLaunch = await checkFirstLaunch();
      console.log(isFirstLaunch);
      if (isFirstLaunch) {
        alert("첫번째 실행입니다.");
      }
    };
    checkIsFirst();
  }, []);

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
            source={require("../../assets/images/halfd_logo.png")}
            style={{ width: width * 83.19, height: height * 120.64 }}
          />
        </LogoContainer>
        <WelcomeContainer>
          <WelcomeText>Welcome</WelcomeText>
          <WelcomeTextKR>어서오세요, 하프딜리버리 입니다 :D</WelcomeTextKR>
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
          navigation={navigation}
          setVisible={setIsModalVisible}
        />
        <Footer>
          <BlueTextER>HALF DELIVERY </BlueTextER>
          <BlueTextKR>사용가이드 바로가기</BlueTextKR>
        </Footer>
      </ImageBackground>
    </Container>
  );
};
