import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import colors from "../../colors";
import BarInput from "../../components/Auth/BarInput";
import Btn from "../../components/Auth/Btn";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import FindPasswordModal from "../../components/Auth/FindPasswordModal";
import DismissKeyboard from "../../components/DismissKeyboard";
import { width, height } from "../../utils";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const LogoConatainer = styled.View`
  margin-top: ${height * 109}px;
  margin-left: ${width * 24}px;
`;

const NameContainer = styled.View`
  margin-top: ${height * 68}px;
  margin-left: auto;
  margin-right: auto;
  justify-content: flex-start;
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

const TitleText = styled.Text`
  font-family: "noto-medium";
  font-size: 24px;
  margin-top: ${height * 22}px;
  margin-left: ${width * 24}px;
  line-height: 40px;
`;

const NameText = styled.Text`
  font-family: "noto-semibold";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SubTitleText = styled.Text`
  font-family: "noto-regular";
  font-size: 14px;
  margin-left: ${width * 24};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    setAccent(userName && !userNameErrorMessage);
  }, [userName, userNameErrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let userNameError = "";
      if (!userName) {
        userNameError = "가입한 아이디를 입력해주세요.";
      } else {
        userNameError = "";
      }
      setUserNameErrorMessage(userNameError);
    } else {
      refDidMount.current = true;
    }
  }, [userName]);

  return (
    <DismissKeyboard>
      <Container>
        <LogoConatainer>
          <Image
            source={require("../../assets/images/halfd_color_logo.png")}
            style={{
              width: width * 40,
              height: height * 58.01,
              resizeMode: "contain",
            }}
          />
        </LogoConatainer>
        <TitleText>비밀번호를 잊어버리셨나요?</TitleText>
        <SubTitleText>
          소중한 개인정보 보호를 위해 본인 확인을 진행합니다.
        </SubTitleText>
        <NameContainer>
          <NameText>아이디</NameText>
          <BarInput
            placeholder={"아이디를 입력해주세요"}
            stateFn={setUserName}
            value={userName}
            isValued={userName ? true : false}
            error={userNameErrorMessage ? true : false}
          />
          <ErrorMessage message={userNameErrorMessage} />
        </NameContainer>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent == true}
            onPress={() => {
              navigation.navigate("FindPasswordConfirm", { userName });
            }}
          />
        </ButtonContainer>
        <FindPasswordModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          userName={userName}
          navigation={navigation}
        />
      </Container>
    </DismissKeyboard>
  );
};
