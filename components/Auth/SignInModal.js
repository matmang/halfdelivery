import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBarInput from "./SmallBarInput";
import SmallBtn from "./SmallBtn";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/usersSlice";
import { height, width } from "../../utils";

const Container = styled.View`
  width: ${width * 336}px;
  height: ${height * 330}px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View`
  padding-left: ${width * 283}px;
  padding-right: ${width * 21}px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: ${height * 21}px;
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

const FindTextContainer = styled.View`
  margin-top: ${height * 30}px;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: ${height * 20}px;
  justify-content: center;
  align-items: center;
`;

const FindText = styled.Text`
  font-family: "noto-regular";
  color: ${colors.captionGray};
  font-size: 14px;
  text-decoration-line: underline;
  margin-left: auto;
  margin-right: ${width * 10}px;
`;

const SignInModal = ({ isModalVisible, onBackdropPress }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accent, setAccent] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setAccent(username && password);
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
    dispatch(userLogin(username, password));
  };

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <IconContainer>
          <TouchableOpacity
            onPress={() => {
              console.log("error...");
            }}
          >
            <Ionicons
              color={colors.primaryBlue}
              size={20}
              name={
                Platform.OS === "android" ? "md-close-sharp" : "ios-close-sharp"
              }
            />
          </TouchableOpacity>
        </IconContainer>
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
        <FindTextContainer>
          <FindText>아이디/비밀번호 찾기</FindText>
        </FindTextContainer>
        <BtnContainer>
          <SmallBtn onPress={handleSubmit} text={"로그인"} accent={accent} />
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

SignInModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default SignInModal;
