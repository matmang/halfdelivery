import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Button = styled.View`
  padding: ${height * 12.5}px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: ${width * 97}px;
  height: ${height * 25}px;
  background-color: ${(props) =>
    props.accent ? colors.palePink : colors.coolGray};
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.oxfordGray)};
  font-family: "nunito-regular";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.oxfordGray)};
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
