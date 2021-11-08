import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

const Container = styled.TextInput`
  width: 338px;
  height: 33px;
  padding: 12.5px 20px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: #000000;
  font-family: "noto-regular";
  font-size: 17;
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

BarInput.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
  disabled: Proptypes.bool,
};

export default BarInput;
