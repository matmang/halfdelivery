import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
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
  align-items: center;
  flex-direction: row;
`;

const InlineContainer = styled.View`
  flex-direction: row;
  margin-left: ${width * 24}px;
  justify-content: space-between;
`;

const DistributionLine = styled.View`
  width: ${364 * width}px;
  height: ${height * 1}px;
  background-color: ${colors.blueGray2};
`;

const NameText = styled.Text`
  font-size: ${width * 17};
  font-family: "noto-medium";
  include-font-padding: false;
  text-align-vertical: center;
`;

const ActiveNameText = styled.Text`
  font-size: ${width * 17};
  font-family: "noto-medium";
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const ButtonName = styled.Text`
  font-family: "noto-medium";
  font-size: ${width * 17};
`;

const InfoText = styled.Text`
  font-size: ${width * 14};
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const ButtonInfoText = styled.Text`
  font-size: ${width * 17};
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
  position: absolute;
  left: ${width * 134}px;
`;

export default ({ navigation }) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
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
      setBirthday(currentUserInfo.attributes["custom:birthday"]);
      setName(currentUserInfo.attributes["name"]);
      setPhoneNumber(currentUserInfo.attributes["phone_number"]);
      setUsername(currentUserInfo["username"]);
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
            height: height * 68,
            width: width * 68,
            marginLeft: width * 24,
            resizeMode: "contain",
          }}
        />
        <ProfileRightContainer>
          <ProfileInfoContainer>
            <NameText>{name}</NameText>
            <NameText> 님</NameText>
          </ProfileInfoContainer>
          <ProfileInfoContainer>
            <InfoText>{school} 캠퍼스</InfoText>
            <InfoText> {college}</InfoText>
          </ProfileInfoContainer>
        </ProfileRightContainer>
      </ProfileContainer>
      <ButtonBounder>
        <ProfileButtonContainer>
          <InlineContainer>
            <ButtonName>아이디</ButtonName>
            <ButtonInfoText>{username}</ButtonInfoText>
          </InlineContainer>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer>
          <InlineContainer>
            <ActiveNameText>비밀번호</ActiveNameText>
            <ButtonInfoText></ButtonInfoText>
          </InlineContainer>
          <Image
            source={require("../../../assets/images/active-arrow-right.png")}
            style={{
              height: height * 10.29,
              width: width * 4.73,
              marginLeft: "auto",
              marginRight: width * 24,
              resizeMode: "cover",
            }}
          />
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer>
          <InlineContainer>
            <ButtonName>이름</ButtonName>
            <ButtonInfoText>{name}</ButtonInfoText>
          </InlineContainer>
        </ProfileButtonContainer>
        <DistributionLine></DistributionLine>
        <ProfileButtonContainer>
          <InlineContainer>
            <ButtonName>생년월일</ButtonName>
            <ButtonInfoText>{birthday}</ButtonInfoText>
          </InlineContainer>
        </ProfileButtonContainer>
      </ButtonBounder>
      <ButtonBounder>
        <ProfileButtonContainer
          onPress={() => navigation.navigate("UpdatePhoneNumberScreen")}
        >
          <InlineContainer>
            <ActiveNameText>연락처</ActiveNameText>
            <ButtonInfoText>{"0" + phonenumber.slice(3, 13)}</ButtonInfoText>
          </InlineContainer>
          <Image
            source={require("../../../assets/images/active-arrow-right.png")}
            style={{
              height: height * 10.29,
              width: width * 4.73,
              marginLeft: "auto",
              marginRight: width * 24,
              resizeMode: "cover",
            }}
          />
        </ProfileButtonContainer>
      </ButtonBounder>
    </Container>
  );
};
