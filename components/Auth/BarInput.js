import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Container = styled.TextInput`
  width: ${width * 364}px;
  height: ${height * 29}px;
  padding: 0px ${height * 8}px ${width * 20}px;
  padding-top: 0;
  padding-bottom: ${height * 8}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isValued, error }) =>
    error ? colors.errorPink : isValued ? colors.primaryBlue : colors.blueGray};
  font-family: "nunito-regular";
  font-size: 15px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const BarInput = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
  disabled = false,
  isValued = false,
  error = false,
}) => (
  <Container
    keyboardType={KeyboardType}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
    disabled={disabled}
    editable={disabled ? false : true}
    isValued={isValued}
    error={error}
  />
);

BarInput.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
  disabled: Proptypes.bool,
  isValued: Proptypes.bool,
};

export default BarInput;
