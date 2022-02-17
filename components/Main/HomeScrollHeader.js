import React from "react";
import HeaderScrollView from "react-native-header-scroll-view";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../../colors";

const HeaderContainer = styled.View`
  width: ${width};
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-color: ${colors.primaryBlue};
`;

const MapText = styled.Text`
  font-family: "noto-regular";
  color: white;
  margin-top: 12px;
  margin-bottom: 16px;
  margin-left: auto;
  margin-right: 14px;
`;

const SearchContanier = styled.View`
  width: 364px;
  height: 41px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border: 2px solid ${colors.primaryBlue};
  border-radius: 50px;
  margin-top: 24px;
`;

const SearchText = styled.Text`
  font-family: "noto-regular";
  margin-left: 19px;
  color: ${colors.unselectedGrey};
`;

export default ({ navigation }) => {
  return (
    <HeaderScrollView>
      <HeaderContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <SearchContanier>
            <Ionicons
              color={colors.primaryBlue}
              size={32}
              name={Platform.OS === "android" ? "md-search" : "ios-search"}
              style={{ marginLeft: 22 }}
            />
            <SearchText>원하는 식당/메뉴를 검색하세요</SearchText>
          </SearchContanier>
        </TouchableOpacity>
        <MapText>지도로 식당 찾기</MapText>
      </HeaderContainer>
    </HeaderScrollView>
  );
};
