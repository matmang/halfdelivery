import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import colors from "../colors";

const StatusBox = styled.View`
  width: 76px;
  height: 25px;
  border-radius: 17px;
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
`;

const StatusText = styled.Text`
  font-family: "noto-regular";
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.color};
`;

const OnMatching = () => {
  return (
    <StatusBox color={colors.unAccent}>
      <StatusText color={colors.mainBlue}>매칭중</StatusText>
    </StatusBox>
  );
};

const Matched = () => {
  return (
    <StatusBox color={colors.mainBlue}>
      <StatusText color={colors.unAccent}>매칭완료</StatusText>
    </StatusBox>
  );
};

const Failed = () => {
  return (
    <StatusBox color={colors.failGrey}>
      <StatusText color={colors.blueGrey}>매칭실패</StatusText>
    </StatusBox>
  );
};

const OnTransfering = () => {
  return (
    <StatusBox color={colors.mainPink}>
      <StatusText color={colors.mainBlue}>이체중</StatusText>
    </StatusBox>
  );
};

const Transferred = () => {
  return (
    <StatusBox color={colors.mainBlue}>
      <StatusText color={colors.mainPink}>이체완료</StatusText>
    </StatusBox>
  );
};

export { OnMatching, Matched, Failed, OnTransfering, Transferred };
