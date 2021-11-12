import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBarInput from "./SmallBarInput";
import SmallBtn from "./SmallBtn";
import { isEmail } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/usersSlice";

const Container = styled.View`
  width: 336px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.View`
  padding-left: 283px;
  padding-right: 21px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 21px;
`;

const IDContainer = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const PasswordContainer = styled.View`
  margin-top: 36px;
  justify-content: center;
  align-items: center;
`;

const FindTextContainer = styled.View`
  margin-top: 30px;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

const FindText = styled.Text`
  font-family: "noto-regular";
  color: ${colors.moon};
  font-size: 14;
  text-decoration-line: underline;
  margin-left: auto;
  margin-right: 10px;
`;

const SignInModal = ({ isModalVisible, onBackdropPress }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accent, setAccent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    setAccent(username && password);
  }, [username, password]);

  const isFormValid = () => {
    if (username === "" || password === "") {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return false;
    }
    if (!isEmail(username)) {
      alert("이메일 형식이 정확하지 않습니다.");
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
              color={colors.mainBlue}
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
