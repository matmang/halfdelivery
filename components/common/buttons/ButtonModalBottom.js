import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../../colors";
import { height, width } from "../../../utils";

const ButtonModalBottom = ({ onPress, text, accent = false, textStyle }) => {
  if (typeof accent !== "boolean") {
    accent = !!accent;
  }

  return (
    <TouchableOpacity onPress={onPress} disabled={!accent}>
      <Button accent={accent}>
        <Text accent={accent} style={textStyle}>
          {text}
        </Text>
      </Button>
    </TouchableOpacity>
  );
};

ButtonModalBottom.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

const Button = styled.View`
  justify-content: center;
  align-items: center;
  width: ${width * 332}px;
  height: ${height * 48}px;
  border-radius: 41px;
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.lightGray};
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#FFFFFF" : colors.mediumGray)};
  font-size: 17px;
  font-family: "gothic-medium";
`;

export default ButtonModalBottom;
