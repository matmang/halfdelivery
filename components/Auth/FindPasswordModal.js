import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBtn from "./SmallBtn";
import { height, width } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 201}px;
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
  width: 100%;
`;

const BottomInfoContainer = styled.View`
  margin-top: ${height * 19}px;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: ${height * 31}px;
  margin-bottom: ${height * 14}px;
  justify-content: center;
  align-items: center;
`;

const Distributionline = styled.View`
  height: 0;
  width: ${width * 332}px;
  margin-top: ${height * 14}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.steelBlue};
`;

const UserInfoText = styled.Text`
  font-family: "gothic-regular";
  margin-left: ${width * 24}px;
  font-size: 17px;
`;

const BtInfoText = styled.Text`
  margin-left: ${width * 24}px;
  font-family: "gothic-regular";
  font-size: 14px;
  line-height: ${height * 24}px;
`;

const ButtonText = styled.Text`
  font-family: "gothic-regular";
  font-size: 17px;
  color: ${colors.primaryBlue};
`;

const FindPasswordModal = ({ isModalVisible, onBackdropPress, navigation }) => {
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <InfoConatiner>
          <TopInfoLineContainer>
            <UserInfoText>비밀번호 재설정이 완료되었습니다.</UserInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              개인 정보 보호를 위해 자동으로 로그아웃 되었습니다.{"\n"}
              새로운 비밀번호로 로그인 해주세요.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <BtnContainer>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          >
            <ButtonText>로그인 하기</ButtonText>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

FindPasswordModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default FindPasswordModal;
