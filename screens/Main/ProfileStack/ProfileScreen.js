import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import { User } from "../../../AWS/src/models";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const ProfileContainer = styled.View`
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

const PrifileInfoContainer = styled.View`
  flex-direction: row;
`;

const NameText = styled.Text`
  font-size: ${width * 17};
  font-family: "noto-medium";
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [userImgUri, setUserImgUri] = useState("");
  const [userHalfMoney, setUserHalfMoney] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Auth.currentAuthenticatedUser().then(setAuthUser);
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
          <PrifileInfoContainer>
            <NameText>김지우</NameText>
            <NameText>님</NameText>
          </PrifileInfoContainer>
          <PrifileInfoContainer>
            <NameText>김지우</NameText>
            <NameText>님</NameText>
          </PrifileInfoContainer>
        </ProfileRightContainer>
      </ProfileContainer>
    </Container>
  );
};
