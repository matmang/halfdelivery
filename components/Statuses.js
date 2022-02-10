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
  font-family: "noto-regular";
  font-size: 12px;
  /* line-height: 15px; */
  color: ${({ color }) => color};
`;

const OnMatching = ({ style }) => {
  return (
    <StatusBox color={colors.unAccent} style={style}>
      <StatusText color={colors.primaryBlue}>매칭중</StatusText>
    </StatusBox>
  );
};

const Matched = ({ style }) => {
  return (
    <StatusBox color={colors.primaryBlue} style={style}>
      <StatusText color={colors.unAccent}>매칭완료</StatusText>
    </StatusBox>
  );
};

const Failed = ({ style }) => {
  return (
    <StatusBox color={colors.failGrey} style={style}>
      <StatusText color={colors.blueGrey}>매칭실패</StatusText>
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
