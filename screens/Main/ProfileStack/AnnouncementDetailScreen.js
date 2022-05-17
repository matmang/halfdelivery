import React from "react";
import styled from "styled-components";
import colors from "../../../colors";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const DistributionLine = styled.View`
  width: ${364 * width}px;
  height: ${height * 1}px;
  background-color: ${colors.blueGray2};
  margin-top: ${height * 8}px;
  margin-left: ${width * 24}px;
`;

const Title = styled.Text`
  font-family: "gothica1-medium";
  font-size: ${width * 17};
  color: ${colors.primaryBlue};
  margin-top: ${height * 25}px;
  margin-left: ${width * 24}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const DateText = styled.Text`
  font-family: "nunito-regular";
  font-size: ${width * 14}px;
  color: ${colors.oxfordGray};
  margin-left: ${width * 24}px;
  margin-top: ${height * 12}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const BodyText = styled.Text`
  font-family: "gothica1-regular";
  font-size: ${width * 14};
  text-align: left;
  line-height: ${height * 24}px;
  margin-top: ${height * 20}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <Title>안녕하세요 하프딜리버리입니다</Title>
      <DateText>2022. 01. 01</DateText>
      <DistributionLine></DistributionLine>
      <BodyText>
        안녕하세요 저희 하프딜리버리를 이용해주셔서 감사합니다. 저희
        하프딜리버리는 배달비 및 최소주문금액의 부담을 줄이기 위한 매칭서비스를
        제공하고 있습니다. 정해진 인원수를 충족해 배달비 부담을 줄이고 싶으신
        분은 배달비 매칭 서비스를 이용해주시고, 최소주문금액만 충족시킨 후에
        빠르게 매칭을 진행하고 싶으신 분은 최소주문금액 매칭 서비스를
        이용해주세요. 늘 더 좋은 서비스를 제공할 수 있는 하프딜리버리가 되도록
        노력하겠습니다. 감사합니다.
      </BodyText>
    </Container>
  );
};
