import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, Text } from "react-native";
import styled from "styled-components";
import Btn from "../../components/Auth/Btn";
import BarInput from "../../components/Auth/BarInput";
import ErrorMessage from "../../components/Auth/ErrorMessage";
import DismissKeyboard from "../../components/DismissKeyboard";
import colors from "../../colors";
import { height, width } from "../../utils";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginAtom";
import { Auth } from "aws-amplify";
import FindIdModal from "../../components/Auth/FindIdModal";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

const ProgressContainer = styled.View`
  margin-top: ${height * 133}px;
  justify-content: center;
  align-items: center;
`;

const IDContainer = styled.View`
  margin-top: ${height * 92.3}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 21}px;
  margin-left: ${width * 24}px;
  margin-right: auto;
  justify-content: flex-start;
`;

const ButtonContainer = styled.View`
  margin-top: ${height * 32}px;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
`;

const NameText = styled.Text`
  font-family: "gothic-semibold";
  font-size: 17px;
  margin-bottom: ${height * 21}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [IDerrorMessage, setIDErrorMessage] = useState("");
  const [PWerrorMessage, setPWErrorMessage] = useState("");
  const [accent, setAccent] = useState(false);
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refDidMount = useRef(null);

  useEffect(() => {
    //? !!! == not !!
    //? !! == undefined, "", 0 값을 false 로 강제 형변환 함
    //? accent type 이 boolean 이어야 하는데, string 으로 들어가서 생기는 warning message 해결을 위해 추가함
    setAccent(username && password && !IDerrorMessage && !!!PWerrorMessage);
  }, [username, password, IDerrorMessage, PWerrorMessage]);

  useEffect(() => {
    if (refDidMount.current) {
      let IDerror = "";
      let PWerror = "";
      if (!username) {
        IDerror = "아이디를 입력해주세요.";
      } else if (password.length < 8) {
        PWerror = "비밀번호는 8자리 이상이어야 합니다.";
      } else {
        IDerror = "";
        PWerror = "";
      }
      setIDErrorMessage(IDerror);
      setPWErrorMessage(PWerror);
    } else {
      refDidMount.current = true;
    }
  }, [username, password]);

  const userLogin = async () => {
    try {
      const data = await Auth.signIn(username, password);
      console.log(data);
      setLoggedIn(true);
    } catch (e) {
      alert("학번 혹은 비밀번호가 잘못되었습니다.");
    }
  };

  const handleSubmit = () => {
    try {
      userLogin();
    } catch (error) {
      console.log("로그인 에러 발생.", error);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <ProgressContainer>
          <Image
            source={require("../../assets/images/font_logo_blue.png")}
            style={{
              width: width * 203.06,
              height: height * 20.72,
              resizeMode: "contain",
            }}
          />
        </ProgressContainer>
        <IDContainer>
          <NameText>아이디</NameText>
          <BarInput
            placeholder={"아이디를 입력해주세요"}
            stateFn={setusername}
            autoCapitalize="none"
            value={username}
            isValued={username ? true : false}
            error={IDerrorMessage ? true : false}
          />
          <ErrorMessage message={IDerrorMessage} />
        </IDContainer>
        <PasswordContainer>
          <NameText>비밀번호</NameText>
          <BarInput
            placeholder={"비밀번호를 입력해주세요"}
            stateFn={setPassword}
            isPassword={true}
            value={password}
            isValued={password ? true : false}
            error={PWerrorMessage ? true : false}
          />
          <ErrorMessage message={PWerrorMessage} />
        </PasswordContainer>
        <Pressable onPress={() => setIsModalVisible(true)}>
          <Text>아이디 찾기</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("FindPassword")}>
          <Text>비밀번호 찾기</Text>
        </Pressable>
        <ButtonContainer>
          <Btn
            text={"다음"}
            accent={accent}
            onPress={handleSubmit}
            icon={true}
          />
        </ButtonContainer>
        <FindIdModal
          isModalVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
          navigation={navigation}
          setIsModalVisible={setIsModalVisible}
        />
      </Container>
    </DismissKeyboard>
  );
};
