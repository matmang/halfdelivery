import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components";
import { User } from "../../../AWS/src/models";
import colors from "../../../colors";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ProfileContainer = styled.Pressable`
  width: ${width * 416}px;
  height: ${height * 116}px;
  background-color: white;
  flex-direction: row;
  align-items: center;
`;

const ProfileRightContainer = styled.View`
  justify-content: flex-start;
  margin-left: ${width * 12}px;
`;

const ProfileInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
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
  font-family: "gothica1-medium";
  include-font-padding: false;
  text-align-vertical: center;
`;

const InfoText = styled.Text`
  font-size: ${width * 14};
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const ButtonName = styled.Text`
  font-family: "gothica1-medium";
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
      <ProfileContainer onPress={() => navigation.navigate("MyInfoScreen")}>
        <Image
          source={require("../../../assets/images/default_prf_img.png")}
          style={{
            height: height * 68,
            width: width * 68,
            marginLeft: width * 24,
            resizeMode: "contain",
          }}
        />
        <ProfileRightContainer>
          <ProfileInfoContainer>
            <NameText>김지우</NameText>
            <NameText> 님</NameText>
            <Image
              source={require("../../../assets/images/active-arrow-right.png")}
              style={{
                height: height * 10.29,
                width: width * 4.73,
                marginLeft: width * 4.5,
                resizeMode: "cover",
              }}
            />
          </ProfileInfoContainer>
          <ProfileInfoContainer>
            <InfoText>{school} 캠퍼스</InfoText>
            <InfoText> {college}</InfoText>
          </ProfileInfoContainer>
        </ProfileRightContainer>
      </ProfileContainer>
      <ButtonBounder>
        <ProfileButtonContainer onPress={() => alert("1")}>
          <ButtonName>매칭내역</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("AnnouncementScreen")}
        >
          <ButtonName>공지사항</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer onPress={() => alert("3")}>
          <ButtonName>자주 묻는 질문</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer onPress={() => alert("2")}>
          <ButtonName>차단 관리</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer onPress={() => alert("3")}>
          <ButtonName>신고 내역</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer onPress={() => alert("2")}>
          <ButtonName>약관 및 정책</ButtonName>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer onPress={() => alert("3")}>
          <ButtonName>현재 버전 0.0.0</ButtonName>
        </ProfileButtonContainer>
      </ButtonBounder>
    </Container>
  );
};
