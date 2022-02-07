import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import SmallBtn from "./SmallBtn";
import { height, width } from "../../utils";

const Container = styled.View`
  width: ${width * 336}px;
  height: ${height * 330}px;
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
  margin-top: ${height * -20}px;
  width: 100%;
`;

const BottomInfoContainer = styled.View`
  margin-top: ${height * 19}px;
  width: 100%;
`;

const FindTextContainer = styled.View`
  margin-top: ${height * 30}px;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: auto;
  margin-bottom: ${height * 20}px;
  justify-content: center;
  align-items: center;
`;

const Distributionline = styled.View`
  height: 0;
  width: ${width * 280}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryBlue};
`;

const UserInfoText = styled.Text`
  font-family: "nunito-regular";
  margin-left: ${width * 28}px;
  font-size: 17px;
`;

const TopInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
`;

const TopBlueInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  margin-left: ${width * 28}px;
  color: ${colors.primaryBlue};
`;

const BtInfoText = styled.Text`
  margin-left: ${width * 28}px;
  font-family: "noto-regular";
  font-size: 14px;
`;

const FindPasswordModal = ({
  isModalVisible,
  onBackdropPress,
  userName,
  navigation,
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
