import React, { useState } from "react";
import { Image, View, TouchableOpacity, Platform } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import Btn from "../Auth/Btn";

const ProfileHeader = styled.View`
  margin-top: 30px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid ${colors.mainBlue};
  border-radius: 30px;
`;

const HeaderColumn = styled.View``;

const ProfileStats = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const Stat = styled.View`
  align-items: center;
  margin-left: 40px;
`;

const Bold = styled.Text`
  font-weight: 600;
`;

const StatName = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: ${colors.mainBlue};
`;

const ProfileMeta = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;

const Bio = styled.Text``;

const ButtonContainer = styled.View`
  padding-vertical: 5px;
  border: 1px solid ${colors.mainBlue};
  flex-direction: row;
  margin-top: 30px;
`;

const Button = styled.View`
  width: 30px;
  align-items: center;
`;

const SquareContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

const UserProfile = ({ image, halfmoney, fullName }) => {
  const [isGrid, setIsGrid] = useState(true);
  const toggleGrid = () => setIsGrid((i) => !i);
  return (
    <View>
      <ProfileHeader>
        <Image
          style={{ height: 80, width: 80, borderRadius: 40 }}
          source={{ uri: image }}
        />
        <HeaderColumn>
          <ProfileStats>
            <Stat>
              <Bold>김지우</Bold>
              <StatName>소프트웨어학부</StatName>
            </Stat>
            <Stat>
              <Bold>{halfmoney}</Bold>
              <StatName>하프머니</StatName>
            </Stat>
          </ProfileStats>
        </HeaderColumn>
      </ProfileHeader>
      <ProfileMeta>
        <Btn
          text={"회원정보 수정"}
          accent
          onPress={() => alert("준비중입니다.")}
        />
        <Btn
          text={"하프머니 충전"}
          accent
          onPress={() => alert("준비중입니다.")}
        />
      </ProfileMeta>
      <ButtonContainer>
        <TouchableOpacity onPress={toggleGrid}>
          <Button>
            <Ionicons
              color={isGrid ? colors.mainBlue : colors.mainPink}
              size={32}
              name={Platform.OS === "ios" ? "ios-grid" : "md-grid"}
            />
          </Button>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleGrid}>
          <Button>
            <Ionicons
              color={!isGrid ? colors.mainBlue : colors.mainPink}
              size={32}
              name={Platform.OS === "ios" ? "ios-list" : "md-list"}
            />
          </Button>
        </TouchableOpacity>
      </ButtonContainer>
    </View>
  );
};

UserProfile.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  halfmoney: PropTypes.number.isRequired,
};

export default UserProfile;
