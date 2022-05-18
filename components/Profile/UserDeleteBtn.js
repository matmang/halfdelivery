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
  border-width: 1.5px;
  border-color: ${colors.error};
  width: ${width * 328}px;
  height: ${height * 48}px;
  background-color: white;
  font-family: "nunito-semibold";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? colors.error : colors.mediumGray)};
  font-size: 17px;
  font-family: "gothic-medium";
`;

const UserDeleteBtn = ({ onPress, text, accent = true, textStyle }) => (
  <TouchableOpacity onPress={onPress} disabled={!accent}>
    <Button accent={accent}>
      <Text accent={accent} style={textStyle}>
        {text}
      </Text>
    </Button>
  </TouchableOpacity>
);

UserDeleteBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default UserDeleteBtn;
