import React, { useEffect, useState } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";
import Auth from "@aws-amplify/auth";
import Btn from "../Auth/Btn";
import Popular from "./Popular";
import Swiper from "react-native-swiper";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { logOut } from "../../redux/usersSlice";
import { useDispatch } from "react-redux";
import ProfileModal from "./ProfileModal";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeaderContainer = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainBlue};
`;

const SwipeContanier = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const SubTitle = styled.Text`
  font-family: "noto-regular";
  font-size: 20px;
  color: ${colors.mainBlue};
  font-weight: 600;
  margin-right: auto;
  margin-left: 24px;
`;

const MapText = styled.Text`
  font-family: "noto-regular";
  color: white;
  margin-top: 6px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: 14px;
  text-decoration-line: underline;
`;

const NowPopularContainer = styled.View`
  height: 320px;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 36px;
`;

const SearchContanier = styled.View`
  width: 364px;
  height: 41px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.mainBlue};
  border-radius: 50px;
`;

const SearchText = styled.Text`
  font-family: "noto-regular";
  margin-left: 19px;
  color: ${colors.moon};
`;

const Home = ({ stores, navigation, isModalVisible }) => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  const logOutPress = () => {
    Auth.signOut();
    dispatch(logOut());
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
            <Ionicons
              color={colors.mainBlue}
              size={32}
              name={Platform.OS === "android" ? "md-search" : "ios-search"}
              style={{ marginLeft: 22 }}
            />
            <SearchText>원하는 식당/메뉴를 검색하세요</SearchText>
          </SearchContanier>
        </TouchableOpacity>
        <MapText>지도로 식당 찾기</MapText>
      </HeaderContainer>
      <SubTitle>실시간 주문 랭킹</SubTitle>
      <NowPopularContainer>
        {stores.map((item, index) => {
          if (index < 5) {
            return (
              <Popular index={index} storeInfo={item} navigation={navigation} />
            );
          }
        })}
      </NowPopularContainer>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        style={{ width: 364, height: 128 }}
      >
        <SwipeContanier>
          <Text>첫번째 페이지입니다!</Text>
        </SwipeContanier>
        <SwipeContanier>
          <Text>두번째 페이지입니다!</Text>
        </SwipeContanier>
      </Swiper>
      <Btn text={"Log Out"} accent onPress={logOutPress} />
      <ProfileModal
        isModalVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      />
    </Container>
  );
};

export default Home;
