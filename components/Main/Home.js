import React, { useState } from "react";
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

const { width } = Dimensions.get("screen");

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeaderContainer = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
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
  background-color: ${colors.snow};
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

const Home = ({ stores, navigation }) => {
  const dispatch = useDispatch();
  const logOutPress = () => {
    Auth.signOut();
    dispatch(logOut());
  };
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
            <SearchText>????????? ??????/????????? ???????????????</SearchText>
          </SearchContanier>
        </TouchableOpacity>
        <MapText>????????? ?????? ??????</MapText>
      </HeaderContainer>
      <SubTitle>????????? ?????? ??????</SubTitle>
      <NowPopularContainer>
        <FlatList
          data={stores}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <Popular storeInfo={item} navigation={navigation} />
          )}
          windowSize={2}
          style={{ backgroundColor: "white" }}
        />
      </NowPopularContainer>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        style={{ width: 364, height: 128 }}
      >
        <SwipeContanier>
          <Text>????????? ??????????????????!</Text>
        </SwipeContanier>
        <SwipeContanier>
          <Text>????????? ??????????????????!</Text>
        </SwipeContanier>
        <SwipeContanier>
          <Text>????????? ??????????????????!</Text>
        </SwipeContanier>
      </Swiper>
      <Btn text={"Log Out"} accent onPress={logOutPress} />
    </Container>
  );
};

export default Home;
