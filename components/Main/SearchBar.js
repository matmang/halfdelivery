import React from "react";
import { Dimensions, Platform, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const SearchContanier = styled.View`
  height: 50px;
  width: 80%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  border: 2px solid ${colors.mainBlue};
  border-radius: 50px;
`;

const Search = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 50px;
  justify-content: center;
  padding-left: 10px;
`;

const SearchBar = ({ value, stateFn, autoCapitalize, searchFn }) => (
  <SearchContanier>
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
  </SearchContanier>
);

SearchBar.propTypes = {
  stateFn: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  searchFn: PropTypes.func,
};

export default SearchBar;
