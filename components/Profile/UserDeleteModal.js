import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import { height, width } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 300}px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const InfoConatiner = styled.View`
  margin-top: ${height * 28}px;
  width: 100%;
`;

const TopInfoLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const BottomInfoContainer = styled.View`
  margin-top: ${height * 19}px;
  justify-content: space-evenly;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: ${height * 31}px;
  width: 100%;
  margin-bottom: ${height * 14}px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
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
  border-bottom-color: ${colors.error};
`;

const UserInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
`;

const BtInfoText = styled.Text`
  margin-left: ${width * 24}px;
  font-family: "noto-regular";
  font-size: 14px;
  line-height: ${height * 24}px;
`;

const ButtonText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  color: ${colors.primaryBlue};
`;

const CancelText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  color: ${colors.error};
`;

const UserDeleteModal = ({
  isModalVisible,
  onBackdropPress,
  navigation,
  setIsModalVisible,
}) => {
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <InfoConatiner>
          <TopInfoLineContainer>
            <Image
              source={require("../../assets/images/caution.png")}
              style={{
                height: height * 18,
                width: width * 22,
                marginRight: width * 8,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
            <UserInfoText>정말로 탈퇴 하시겠습니까?</UserInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              회원님의 계정을 영구적으로 삭제합니다. 회원탈퇴를 요{"\n"}청한
              후에는 계정을 다시 활성화하고 탈퇴를 취소할 수{"\n"}있는 30일의
              유예 기간이 주어집니다.
            </BtInfoText>
            <BtInfoText>
              회원탈퇴를 하시면 해당 아이디 및 비밀번호를 사용하여{"\n"}서비스를
              이용하실 수 없으며, 아이디와 함께 제공하신{"\n"}
              개인정보가 모두 삭제됩니다.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <BtnContainer>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <ButtonText>탈퇴</ButtonText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <CancelText>취소</CancelText>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

UserDeleteModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
  setIsModalVisible: Proptypes.func,
  setNextModalVisible: Proptypes.func,
};

export default UserDeleteModal;
