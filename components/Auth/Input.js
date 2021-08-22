import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import {Dimensions} from 'react-native';
import colors from '../../colors';

const {width} = Dimensions.get('screen');

const Container = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid ${colors.mainBlue};
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-family: 'noto-regular';
`;

const Input = ({
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
    onChangeText={text => stateFn(text)}
  />
);

Input.proptypes = {
  value: Proptypes.string,
  placeholder: Proptypes.string,
  isPassword: Proptypes.bool,
  autoCapitalize: Proptypes.string,
  stateFn: Proptypes.func,
};

export default Input;
