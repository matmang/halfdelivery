import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import { height, width } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 229}px;
  background-color: white;
  border-radius: 10px;
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

const FindIdModal = ({
  isModalVisible,
  onBackdropPress,
  navigation,
  setIsModalVisible,
}) => {
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
    >
      <Container>
        <InfoConatiner>
          <TopInfoLineContainer>
            <UserInfoText>아이디를 잊으셨나요 ?</UserInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              하프딜리버리는 아이디를 대학교 학번으로 사용하고 있{"\n"}
              습니다. 본인의 대학 내 행정 문의를 통해 확인해 주시기{"\n"}
              바랍니다.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <BtnContainer>
          <TouchableOpacity
            onPress={() => {
              setIsModalVisible(false);
            }}
          >
            <ButtonText>확인</ButtonText>
          </TouchableOpacity>
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

FindIdModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default FindIdModal;
