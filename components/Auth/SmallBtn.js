import React from "react";
import { TouchableOpacity } from "react-native";
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
  width: ${width * 324}px;
  height: ${height * 48}px;
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.blueGray2};
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.blueGray2)};
  font-family: "nunito-regular";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#ffffff" : colors.blueGray)};
  font-size: 14px;
  font-family: "gothica1-medium";
`;

const SmallBtn = ({ onPress, text, accent = false, icon = false }) => (
  <TouchableOpacity onPress={onPress} disabled={!accent}>
    <Button accent={accent}>
      {icon ? (
        <Ionicons
          color={accent ? colors.palePink : colors.blueGray}
          size={13}
          name={
            Platform.OS === "android" ? "md-arrow-forward" : "ios-arrow-forward"
          }
          style={{ marginRight: 8 }}
        />
      ) : null}
      <Text accent={accent}>{text}</Text>
    </Button>
  </TouchableOpacity>
);

SmallBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default SmallBtn;
