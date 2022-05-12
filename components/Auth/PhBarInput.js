import React from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";
import ConfirmBtn from "./ConfirmBtn";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${width * 364}px;
  height: ${height * 29}px;
  padding-left: ${width * 8}px;
  padding-top: 0;
  padding-bottom: ${height * 8}px;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ isValued, error }) =>
    error ? colors.errorPink : isValued ? colors.primaryBlue : colors.blueGray};
`;

const InputContainer = styled.TextInput`
  height: ${height * 29}px;
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 17px;
`;

const PhBarInput = ({
  value,
  placeholder,
  isPassword = false,
  autoCapitalize,
  stateFn,
  KeyboardType,
  disabled = false,
  isValued = false,
  error = false,
  style,
  onPress,
}) => (
  <Container isValued={isValued} error={error}>
    <InputContainer
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
      style={style}
    />
    <ConfirmBtn text="인증번호 요청" onPress={() => onPress()} />
  </Container>
);

PhBarInput.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
  disabled: Proptypes.bool,
  isValued: Proptypes.bool,
};

export default PhBarInput;
