import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Button = styled.View`
  padding: ${height * 12.5}px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: ${width * 338}px;
  height: ${height * 48}px;
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.blueGray2};
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.blueGray2)};
  font-family: "nunito-semibold";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#FFFFFF" : colors.blueGray)};
  font-size: 14px;
  font-family: "gothica1-medium";
`;

const Btn = ({ onPress, text, accent = false, icon = false, textStyle }) => (
  <TouchableOpacity onPress={onPress} disabled={!accent}>
    <Button accent={accent}>
      {icon ? (
        accent ? (
          <Image
            source={require("../../assets/images/right-arrow-accent.png")}
            style={{ width: 15, height: 12, marginRight: 6.2 }}
          />
        ) : (
          <Image
            source={require("../../assets/images/right-arrow.png")}
            style={{ width: 15, height: 12, marginRight: 6.2 }}
          />
        )
      ) : null}
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
