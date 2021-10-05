import React from "react";
import { Dimensions, Platform, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width / 1.1}px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.mainBlue};
  border-radius: 50px;
`;

const Search = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  background-color: ${colors.snow};
  font-family: "noto-regular";
`;

const SearchBar = ({ value, stateFn, autoCapitalize, searchFn }) => (
  <Container>
    <Search
      value={value}
      placeholder="원하는 식당/메뉴를 검색하세요"
      onChangeText={(text) => stateFn(text)}
      autoCapitalize={autoCapitalize}
    />
    <TouchableOpacity onPress={searchFn}>
      <Ionicons
        color={colors.mainBlue}
        size={32}
        name={Platform.OS === "android" ? "md-search" : "ios-search"}
      />
    </TouchableOpacity>
  </Container>
);

SearchBar.propTypes = {
  stateFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  searchFn: PropTypes.func,
};

export default SearchBar;
