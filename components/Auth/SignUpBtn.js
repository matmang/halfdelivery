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
  width: ${width * 364}px;
  height: ${height * 50}px;
  background-color: white;
`;

const Text = styled.Text`
  color: ${colors.primaryBlue};
  font-size: 17px;
  font-family: "gothica1-medium";
`;

const Circle = styled.View`
  width: ${width * 17}px;
  height: ${height * 17}px;
  border-radius: 30px;
  margin-left: ${width * 120}px;
  background-color: ${colors.primaryBlue};
`;

const SignUpBtn = ({ onPress, text, textStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text style={textStyle}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

SignUpBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default SignUpBtn;
