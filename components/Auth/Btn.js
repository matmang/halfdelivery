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
  width: ${width * 338}px;
  height: ${height * 48}px;
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.blueGray2};
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.blueGray2)};
  font-family: "nunito-regular";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#FFFFFF" : colors.blueGray)};
  font-weight: 600;
  font-size: 14px;
  font-family: "nunito-regular";
`;

const Btn = ({ onPress, text, accent = false, icon = false }) => (
  <TouchableOpacity onPress={onPress} disabled={!accent}>
    <Button accent={accent}>
      {icon ? (
        <Ionicons
          color={accent ? "#FFFFFF" : colors.blueGray}
          size={15}
          name={
            Platform.OS === "android" ? "md-arrow-forward" : "ios-arrow-forward"
          }
          style={{ marginRight: width * 6 }}
        />
      ) : null}
      <Text accent={accent}>{text}</Text>
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
