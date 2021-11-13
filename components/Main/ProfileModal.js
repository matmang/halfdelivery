import React, { useState, useEffect } from "react";
import { Image, Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import Auth from "@aws-amplify/auth";

const Container = styled.View`
  width: 324px;
  height: 226px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const Triangle = styled.View`
  width: 0;
  height: 0;
  border-left-width: 30;
  border-right-width: 30;
  border-bottom-width: 60;
  border-style: solid;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: white;
  margin-bottom: -40px;
`;

const TopContainer = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: -20px;
`;

const Distributionline = styled.View`
  height: 0;
  width: 280px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 2px;
  border-bottom-color: ${colors.mainBlue};
  margin-top: -15px;
`;

const AuthContainer = styled.View`
  width: 76px;
  height: 25px;
  background-color: ${colors.mainPink};
  border-radius: 30px;
  margin-bottom: 11px;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const AccountTitleContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const AccountInfoContainer = styled.View`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: -10px;
`;

const AuthText = styled.Text`
  font-family: "noto-regular";
  font-size: 12;
  color: ${colors.mainBlue};
`;

const UserInformation = styled.Text`
  font-family: "noto-regular";
  font-size: 17;
  margin-left: -20px;
`;

const AccuontTitle = styled.Text`
  font-family: "noto-regular";
  font-size: 17;
  color: ${colors.mainBlue};
  margin-left: 28px;
`;

const CopyText = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  color: ${colors.moon};
  text-decoration: underline;
  margin-right: 28px;
`;

const AccountInfo = styled.Text`
  font-family: "noto-regular";
  font-size: 14;
  color: #121212;
`;

const ProfileModal = ({ isModalVisible, onBackdropPress }) => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUserInfo = await Auth.currentUserInfo();
      setName(currentUserInfo.attributes["custom:nickname"]);
      setSchool(currentUserInfo.attributes["custom:school"]);
      setCollege(currentUserInfo.attributes["custom:college"]);
      setBank(currentUserInfo.attributes["custom:bank"]);
      setAccountNumber(currentUserInfo.attributes["custom:accountnumber"]);
    };
    fetchUser();
  }, []);

  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center", top: "-27%" }}
    >
      <Triangle />
      <Container>
        <TopContainer>
          <UserInformation>
            {`
            ${name}님은
            ${school} 캠퍼스
            ${college}
            `}
          </UserInformation>
          <ImageContainer>
            <AuthContainer>
              <AuthText>인증완료</AuthText>
            </AuthContainer>
            <Image
              source={require("../../assets/images/location.png")}
              style={{ width: 35, height: 46 }}
            />
          </ImageContainer>
        </TopContainer>
        <Distributionline></Distributionline>
        <AccountTitleContainer>
          <AccuontTitle>나의 계좌번호</AccuontTitle>
          <CopyText>복사하기</CopyText>
        </AccountTitleContainer>
        <AccountInfoContainer>
          <AccountInfo>{bank}</AccountInfo>
          <AccountInfo>{name}</AccountInfo>
          <AccountInfo>{accountNumber}</AccountInfo>
        </AccountInfoContainer>
      </Container>
    </ReactNativeModal>
  );
};

ProfileModal.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default ProfileModal;
