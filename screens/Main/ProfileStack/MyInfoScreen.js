import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components";
import { User } from "../../../AWS/src/models";
import colors from "../../../colors";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ProfileContainer = styled.View`
  width: ${width * 416}px;
  height: ${height * 226}px;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.View``;

const ProfileRightContainer = styled.View`
  justify-content: flex-start;
  margin-left: ${width * 12}px;
`;

const ProfileInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 7};
`;

const ButtonBounder = styled.View`
  background-color: white;
  align-items: center;
  margin-top: ${height * 8}px;
`;

const ProfileButtonContainer = styled.Pressable`
  width: ${width * 416}px;
  height: ${height * 57}px;
  background-color: white;
  justify-content: center;
`;

const DistributionLine = styled.View`
  width: ${364 * width}px;
  height: ${height * 1}px;
  background-color: ${colors.blueGray2};
`;

const NameText = styled.Text`
  font-size: ${width * 17};
  font-family: "gothic-medium";
  include-font-padding: false;
  text-align-vertical: center;
`;

const UserNameText = styled.Text`
  font-size: ${width * 17};
  font-family: "gothic-medium";
  margin-top: ${height * 21}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const InfoText = styled.Text`
  font-size: ${width * 14};
  font-family: "gothic-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const ButtonName = styled.Text`
  font-family: "gothic-medium";
  font-size: ${width * 17};
  margin-left: ${width * 24}px;
`;

export default ({ navigation }) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [userImgUri, setUserImgUri] = useState("");
  const [userHalfMoney, setUserHalfMoney] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Auth.currentAuthenticatedUser().then(setAuthUser);
      const currentUserInfo = await Auth.currentUserInfo();
      setCollege(currentUserInfo.attributes["custom:college"]);
      setSchool(currentUserInfo.attributes["custom:school"]);
    };
    fetchUserData();
  }, []);

  const fetchImageUri = async () => {
    const user = await DataStore.query(User, authUser.attributes.sub);
    setUserImgUri(user?.imageUri);
    setUserHalfMoney(user?.halfmoney);
  };
  fetchImageUri();

  return (
    <Container>
      <ProfileContainer>
        <Image
          source={require("../../../assets/images/default_prf_img.png")}
          style={{
            height: height * 105,
            width: width * 105,
            resizeMode: "contain",
          }}
        />
        <Image
          source={require("../../../assets/images/add_profile_image.png")}
          style={{
            height: height * 28,
            width: width * 28,
            resizeMode: "contain",
            position: "absolute",
            top: height * 103,
            left: width * 235,
          }}
        />
        <UserNameText>김지우</UserNameText>
        <ProfileInfoContainer>
          <InfoText>{school} 캠퍼스</InfoText>
          <InfoText> {college}</InfoText>
        </ProfileInfoContainer>
      </ProfileContainer>
      <ButtonBounder>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("UpdateAccountScreen")}
        >
          <ButtonName>나의 계정 관리</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("UpdateSchoolScreen")}
        >
          <ButtonName>학과 정보 관리</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("UpdateBankScreen")}
        >
          <ButtonName>금융 정보 관리</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer onPress={() => alert("2")}>
          <ButtonName>알림설정</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("AccountScreen")}
        >
          <ButtonName>하프딜리버리 계정</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
    </Container>
  );
};
