import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Button = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  margin-left: auto;
  width: ${width * 104}px;
  height: ${height * 28}px;
  background-color: ${colors.lightPink};
`;

const Text = styled.Text`
  color: ${colors.darkGray};
  font-size: 12px;
  font-family: "noto-medium";
`;

const ConfirmBtn = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </TouchableOpacity>
);

ConfirmBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
};

export default ConfirmBtn;
