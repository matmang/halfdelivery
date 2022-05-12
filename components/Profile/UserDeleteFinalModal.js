import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import { height, width } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { Auth } from "aws-amplify";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginAtom";
import { deleteUser } from "../../AWS/src/graphql/mutations";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 198}px;
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

const UserDeleteFinalModal = ({
  isModalVisible,
  onBackdropPress,
  navigation,
  setIsModalVisible,
}) => {
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const handleSubmit = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser()
        .then(
          (user) =>
            new Promise((resolve, reject) => {
              user.deleteUser((error) => {
                if (error) {
                  return reject(error);
                }
                if (this.props.onSessionChange) {
                  this.props.onSessionChange();
                }
                document.location.href = "/login";

                resolve();
              });
            })
        )
        .catch(this.onError);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

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
            <UserInfoText>계정이 영구적으로 삭제될 예정입니다</UserInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              앞으로 30일 이내에 하프딜리버리에 로그인 할 경우 계정
              {"\n"}삭제를 취소하고 기존 서비스 이용정보를 가져옵니다.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <BtnContainer>
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
              setLoggedIn(false);
            }}
          >
            <ButtonText>계정 삭제</ButtonText>
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

UserDeleteFinalModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
  setIsModalVisible: Proptypes.func,
  setNextModalVisible: Proptypes.func,
};

export default UserDeleteFinalModal;
