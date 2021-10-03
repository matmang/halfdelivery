import React, { useState } from "react";
import { View, Text, Dimensions, ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import Auth from "@aws-amplify/auth";
import SearchBar from "./SearchBar";
import Btn from "../Auth/Btn";
import Swiper from "react-native-swiper";
import { FlatList } from "react-native-gesture-handler";

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

const NowPopularContainer = styled.View``;

const Home = ({ stores }) => {
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
      <SearchBar
        value={search}
        stateFn={setSearch}
        autoCapitalize="none"
        searchFn={searchPress}
      />
      <FlatList
        data={stores}
        keyExtractor={(store) => String(store.id)}
        onEndReachedThreshold={0.8}
        showsVerticalScrollIndicator={false}
      />
      <Btn text={"Log Out"} accent onPress={logOut} />
    </Container>
  );
};

export default Home;
