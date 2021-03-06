import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import { Dimensions } from "react-native";
import colors from "../../colors";

const { width } = Dimensions.get("screen");

const Container = styled.TextInput`
  width: 338px;
  height: 48px;
  padding: 12.5px 20px;
  padding-top: 0;
  padding-bottom: 0;
  border: 1px solid ${colors.mainBlue};
  background-color: white;
  border-radius: 30px;
  margin-top: 20px;
  font-family: "noto-regular";
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Input = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
  disabled = false,
}) => (
  <Container
    KeyboardType={KeyboardType}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
    disabled={disabled}
    editable={disabled ? false : true}
  />
);

Input.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
  disabled: Proptypes.bool,
};

export default Input;
