import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";

const Container = styled.TextInput`
  width: 296px;
  height: 33px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${({ isValued }) =>
    isValued ? colors.mainBlue : colors.blueGrey};
  font-family: "noto-regular";
  font-size: 17px;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const SmallBarInput = ({
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

SmallBarInput.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
  disabled: Proptypes.bool,
  isValued: Proptypes.bool,
};

export default SmallBarInput;
