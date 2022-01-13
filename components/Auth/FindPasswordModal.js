import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBtn from "./SmallBtn";

const Container = styled.View`
  width: 336px;
  height: 330px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const InfoConatiner = styled.View`
  margin-top: auto;
  width: 100%;
`;

const TopInfoLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
  width: 100%;
`;

const BottomInfoContainer = styled.View`
  margin-top: 19px;
  width: 100%;
`;

const FindTextContainer = styled.View`
  margin-top: 30px;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: auto;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
`;

const Distributionline = styled.View`
  height: 0;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.mainBlue};
`;

const UserInfoText = styled.Text`
  font-family: "nunito-regular";
  margin-left: 28px;
  font-size: 17px;
`;

const TopInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
`;

const TopBlueInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  margin-left: 28px;
  color: ${colors.mainBlue};
`;

const BtInfoText = styled.Text`
  margin-left: 28px;
  font-family: "noto-regular";
  font-size: 14px;
`;

const FindPasswordModal = ({
  isModalVisible,
  onBackdropPress,
  userName,
  navigation,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accent, setAccent] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <InfoConatiner>
          <TopInfoLineContainer>
            <UserInfoText>{`User ${userName}`}</UserInfoText>
            <TopInfoText> 님의</TopInfoText>
          </TopInfoLineContainer>
          <TopInfoLineContainer>
            <TopBlueInfoText>비밀번호 재설정</TopBlueInfoText>
            <TopInfoText>이 완료되었습니다.</TopInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              변경한 비밀번호로 로그인 후 하프딜리버리에서{"\n"}
              함께 배달음식을 주문할 파트너를 만나보세요.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <BtnContainer>
          <SmallBtn
            onPress={() => navigation.navigate("Welcome")}
            text={"로그인 하러가기"}
            accent={true}
          />
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

FindPasswordModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
  userName: Proptypes.string.isRequired,
};

export default FindPasswordModal;
