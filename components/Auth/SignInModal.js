import React, { useState, useEffect } from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBarInput from "./SmallBarInput";
import SmallBtn from "./SmallBtn";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/usersSlice";
import { height, width } from "../../utils";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 332}px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const IDContainer = styled.View`
  margin-top: ${height * 30}px;
  justify-content: center;
  align-items: center;
`;

const PasswordContainer = styled.View`
  margin-top: ${height * 36}px;
  justify-content: center;
  align-items: center;
`;

const ExplainContainer = styled.View`
  flex-direction: row;
  margin-top: ${height * 19}px;
  justify-content: space-between;
`;

const BtnContainer = styled.View`
  margin-top: ${height * 39}px;
  justify-content: center;
  align-items: center;
`;

const ExplainText = styled.Text`
  font-family: "gothica1-medium";
  font-size: 12px;
  color: ${colors.captionGray};
`;

const SignInModal = ({
  isModalVisible,
  onBackdropPress,
  navigation,
  setVisible,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accent, setAccent] = useState(false);
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  // const dispatch = useDispatch();

  useEffect(() => {
    setAccent(username && password ? true : false);
  }, [username, password]);

  const isFormValid = () => {
    if (username === "" || password === "") {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    // dispatch(userLogin(username, password));
    setLoggedIn(true);
  };

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <Pressable
          onPress={() => {
            setVisible(false);
          }}
        >
          <Image
            source={require("../../assets/images/delete.png")}
            style={{
              width: 17.22,
              height: 17.22,
              marginLeft: width * 323,
              marginRight: width * 12.5,
              marginTop: height * 7,
            }}
          />
        </Pressable>
        <IDContainer>
          <SmallBarInput
            placeholder={"아이디"}
            stateFn={setUsername}
            value={username}
            isValued={username ? true : false}
            autoCapitalize="none"
          />
        </IDContainer>
        <PasswordContainer>
          <SmallBarInput
            placeholder={"비밀번호"}
            stateFn={setPassword}
            value={password}
            isPassword={true}
            isValued={password ? true : false}
          />
        </PasswordContainer>
        <BtnContainer>
          <SmallBtn onPress={handleSubmit} text={"로그인"} accent={accent} />
        </BtnContainer>
        <ExplainContainer>
          <Pressable
            onPress={() => {
              setVisible(false);
              navigation.navigate("FindId");
            }}
          >
            <ExplainText>아이디 찾기 </ExplainText>
          </Pressable>
          <ExplainText> | </ExplainText>
          <Pressable
            onPress={() => {
              setVisible(false);
              navigation.navigate("FindPassword");
            }}
          >
            <ExplainText> 비밀번호 찾기</ExplainText>
          </Pressable>
        </ExplainContainer>
      </Container>
    </ReactNativeModal>
  );
};

SignInModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default SignInModal;
