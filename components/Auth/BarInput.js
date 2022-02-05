import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Container = styled.TextInput`
  width: ${width * 364}px;
  height: ${height * 29}px;
  padding: ${height * 12.5}px ${width * 20}px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isValued }) =>
    isValued ? colors.mainBlue : colors.blueGrey};
  font-family: "nunito-regular";
  font-size: 14.5px;
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
    isValued={isValued}
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
