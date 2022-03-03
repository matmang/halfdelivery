import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import { height, width } from "../../utils";

const Container = styled.View`
  width: ${width * 324}px;
  height: ${height * 101.59}px;
  border: 1.5px;
  border-color: ${colors.blueGray};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const MatchingInfomation = ({ navigation }) => {
  return <Container></Container>;
};

export default MatchingInfomation;
