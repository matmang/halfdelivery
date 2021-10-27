import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";

const Container = styled.TextInput`
  width: 338px;
  height: 48px;
  padding: 12.5px 20px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1;
  border-bottom-color: #000000;
  margin-top: 32px;
  margin-bottom: 20px;
  font-family: "noto-regular";
`;

const BarInput = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
}) => (
  <Container
    KeyboardType={KeyboardType}
    value={value}
    placeholder={placeholder}
    secureTextEntry={isPassword ? true : false}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => stateFn(text)}
  />
);

BarInput.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
};

export default BarInput;
