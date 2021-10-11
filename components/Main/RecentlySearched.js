import React from "react";
import { Dimensions, Platform, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";
import colors from "../../colors";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  height: 23px;
  width: 364px;
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StoreText = styled.Text`
  font-size: 17px;
  font-family: "noto-regular";
`;

const DateText = styled.Text`
  font-size: 17px;
  font-family: "nunito-regular";
`;

const RecentlySearched = ({ onPress, removeFn }) => {
  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Content>
          <Ionicons
            color={colors.mainBlue}
            size={20}
            name={Platform.OS === "android" ? "md-search" : "ios-search"}
          />
          <StoreText>샘플 텍스트</StoreText>
          <DateText>10.02</DateText>
        </Content>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeFn}>
        <Ionicons
          color={colors.mainBlue}
          size={22}
          name={
            Platform.OS === "android" ? "md-remove-circle" : "ios-remove-circle"
          }
        />
      </TouchableOpacity>
    </Container>
  );
};

RecentlySearched.propTypes = {
  onPress: PropTypes.func.isRequired,
  removeFn: PropTypes.func.isRequired,
};

export default RecentlySearched;
