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
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.lightGray};
  font-family: "nunito-semibold";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#FFFFFF" : colors.mediumGray)};
  font-size: 17px;
  font-family: "gothica1-medium";
`;

const Btn = ({ onPress, text, accent = false, textStyle }) => (
  <TouchableOpacity onPress={onPress} disabled={!accent}>
    <Button accent={accent}>
      <Text accent={accent} style={textStyle}>
        {text}
      </Text>
    </Button>
  </TouchableOpacity>
);

Btn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default Btn;
