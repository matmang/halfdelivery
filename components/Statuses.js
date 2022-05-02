import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components";
import colors from "../colors";

const StatusBox = styled.View`
  width: 76px;
  height: 25px;
  border-radius: 17px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  font-family: "gothica1-regular";
  font-size: 12px;
  /* line-height: 15px; */
  color: ${({ color }) => color};
`;

const OnMatching = ({ style }) => {
  return (
    <StatusBox color={colors.blueGray2} style={style}>
      <StatusText color={colors.primaryBlue}>매칭중</StatusText>
    </StatusBox>
  );
};

const Matched = ({ style }) => {
  return (
    <StatusBox color={colors.primaryBlue} style={style}>
      <StatusText color={colors.blueGray2}>매칭완료</StatusText>
    </StatusBox>
  );
};

const Failed = ({ style }) => {
  return (
    <StatusBox color={colors.coolGray} style={style}>
      <StatusText color={colors.blueGray}>매칭실패</StatusText>
    </StatusBox>
  );
};

const OnTransfering = ({ style }) => {
  return (
    <StatusBox color={colors.primaryPink} style={style}>
      <StatusText color={colors.primaryBlue}>이체중</StatusText>
    </StatusBox>
  );
};

const Transferred = ({ style }) => {
  return (
    <StatusBox color={colors.primaryBlue} style={style}>
      <StatusText color={colors.primaryPink}>이체완료</StatusText>
    </StatusBox>
  );
};

export { OnMatching, Matched, Failed, OnTransfering, Transferred };
