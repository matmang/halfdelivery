import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import styled, { createGlobalStyle } from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Button = styled.View`
  padding: 12.5px 0px;
  align-items: center;
  border-radius: 30px;
  border: 1px solid
    ${(props) => (props.accent ? "transparent" : colors.mainBlue)};
  width: ${width / 2}px;
  background-color: ${(props) =>
    props.accent ? colors.mainBlue : "transparent"};
  color: ${(props) => (props.accent ? colors.mainBlue : colors.mainPink)};
  font-family: "nunito-regular";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? colors.mainPink : colors.mainBlue)};
  font-weight: 600;
  font-size: 14px;
  font-family: "nunito-regular";
`;

const Btn = ({ onPress, text, accent = false }) => (
  <TouchableOpacity onPress={onPress}>
    <Button accent={accent}>
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
};

export default Btn;
