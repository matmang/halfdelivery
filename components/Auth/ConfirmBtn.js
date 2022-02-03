import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled, { createGlobalStyle } from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  padding: 12.5px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 97px;
  height: 25px;
  background-color: ${(props) =>
    props.accent ? colors.subPink3 : colors.unAccent};
  color: ${(props) => (props.accent ? colors.mainBlue : colors.coal)};
  font-family: "nunito-regular";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? colors.mainBlue : colors.coal)};
  font-weight: 600;
  font-size: 12px;
  font-family: "noto-regular";
`;

const ConfirmBtn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress} disabled={accent}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

ConfirmBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default ConfirmBtn;
