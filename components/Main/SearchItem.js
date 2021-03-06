import React from "react";
import { Dimensions, Platform, Platfrom } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../colors";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 364px;
  height: 24px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 18px;
`;

const StoreName = styled.Text`
  font-family: "noto-regular";
  font-size: 17;
`;

const SearchItem = ({ navigation, storeInfo }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("SelectMenuScreen", {
        storeInfo,
      })
    }
  >
    <Container>
      <Ionicons
        color={colors.mainBlue}
        size={20}
        name={Platform.OS === "android" ? "md-search" : "ios-search"}
        style={{ marginRight: 11 }}
      />
      <StoreName>{storeInfo.store}</StoreName>
      <Feather
        name="arrow-up-right"
        size={20}
        color="black"
        style={{ marginLeft: "auto" }}
      />
    </Container>
  </TouchableOpacity>
);

export default SearchItem;
