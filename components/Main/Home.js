import React, { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components";
import colors from "../../colors";
import Auth from "@aws-amplify/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logOut } from "../../redux/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
import { height, width } from "../../utils";
import Btn from "../Auth/Btn";
import { useRecoilState } from "recoil";
import { loginState } from "../../recoil/atoms/loginAtom";

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: ${height * 57}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBlue};
`;

const SearchContanier = styled.View`
  width: ${width * 365}px;
  height: ${height * 41}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 41px;
`;

const NoneBox = styled.View`
  width: ${width * 162}px;
  height: ${height * 162}px;
  margin-top: ${height * 208}px;
  background-color: white;
  border-width: 1px;
`;

const SearchText = styled.Text`
  font-family: "noto-regular";
  margin-left: ${width * 17}px;
  color: ${colors.unselectedGrey};
`;

const StartText = styled.Text`
  font-family: "noto-regular";
  margin-top: ${height * 46}px;
  color: ${colors.unselectedGrey};
  font-size: ${width * 17}px;
`;

const Home = ({ stores, navigation, isModalVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);

  const logOutPress = () => {
    Auth.signOut();
    setLoggedIn(false);
  };

  useEffect(() => {
    setIsVisible(!isVisible);
  }, [isModalVisible]);

  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <SearchContanier>
            <Image
              source={require("../../assets/images/glasses.png")}
              style={{
                width: width * 20,
                height: height * 20,
                marginLeft: width * 13,
                resizeMode: "contain",
              }}
            />
            <SearchText>원하는 식당/메뉴를 검색하세요</SearchText>
          </SearchContanier>
        </TouchableOpacity>
      </HeaderContainer>
      <Pressable onPress={() => logOutPress()}>
        <NoneBox></NoneBox>
      </Pressable>
      <StartText>매칭을 시작해주세요</StartText>
      <ProfileModal
        isModalVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      />
    </Container>
  );
};

export default Home;
