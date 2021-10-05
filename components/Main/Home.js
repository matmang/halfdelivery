import React, { useState } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import Auth from "@aws-amplify/auth";
import SearchBar from "./SearchBar";
import Btn from "../Auth/Btn";
import Popular from "./Popular";
import Swiper from "react-native-swiper";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const SwipeContanier = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.coal};
  border-radius: 5px;
`;

const SubTitle = styled.Text`
  font-family: "noto-regular";
  font-size: 20px;
  color: ${colors.mainBlue};
  font-weight: 600;
`;

const NowPopularContainer = styled.View`
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.coal};
  border-radius: 5px;
`;

const SearchContanier = styled.View`
  width: ${width / 1.1}px;
  height: 60px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.mainBlue};
  border-radius: 50px;
`;

const SearchText = styled.Text`
  font-family: "noto-regular";
  color: ${colors.moon};
`;

const Home = ({ stores, navigation }) => {
  const searchPress = () => {
    alert("검색기능 제작중");
  };
  const [search, setSearch] = useState("");
  const logOut = () => {
    Auth.signOut();
  };
  return (
    <Container>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        style={{ height: 140 }}
      >
        <SwipeContanier>
          <Text>첫번째 페이지입니다!</Text>
        </SwipeContanier>
        <SwipeContanier>
          <Text>두번째 페이지입니다!</Text>
        </SwipeContanier>
        <SwipeContanier>
          <Text>세번째 페이지입니다!</Text>
        </SwipeContanier>
      </Swiper>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <SearchContanier>
          <Ionicons
            color={colors.mainBlue}
            size={32}
            name={Platform.OS === "android" ? "md-search" : "ios-search"}
          />
          <SearchText>원하는 식당/메뉴를 검색하세요</SearchText>
        </SearchContanier>
      </TouchableOpacity>
      <SubTitle>실시간 매칭 요청 많은 식당</SubTitle>
      <NowPopularContainer>
        <FlatList
          data={stores}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => <Popular storeInfo={item} />}
          windowSize={2}
        />
      </NowPopularContainer>
      <Btn text={"Log Out"} accent onPress={logOut} />
    </Container>
  );
};

export default Home;
