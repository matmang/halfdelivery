import React from "react";
import styled from "styled-components";
import colors from "../../../colors";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
  align-items: center;
`;

const DistributionLine = styled.View`
  width: ${364 * width}px;
  height: ${height * 1}px;
  background-color: ${colors.blueGray2};
`;

const AnnouncementContainer = styled.Pressable`
  width: ${width * 416}px;
  height: ${height * 78}px;
  background-color: white;
  justify-content: center;
`;

const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${width * 24}px;
`;

const MustReadBubble = styled.View`
  background-color: ${colors.palePink};
  width: ${width * 40}px;
  height: ${height * 21}px;
  margin-right: ${width * 8}px;
  border-radius: 11px;
  align-items: center;
  justify-content: center;
`;

const ButtonBounder = styled.View`
  background-color: white;
  align-items: center;
`;

const TitleText = styled.Text`
  font-family: "gothic-regular";
  font-size: ${width * 17};
  include-font-padding: false;
  text-align-vertical: center;
`;

const MustReadText = styled.Text`
  font-family: "gothic-medium";
  font-size: ${width * 9};
  include-font-padding: false;
  text-align-vertical: center;
`;

const DateText = styled.Text`
  font-family: "nunito-regular";
  font-size: ${width * 14}px;
  color: ${colors.oxfordGray};
  margin-left: ${width * 24}px;
  margin-top: ${height * 4}px;
`;

export default ({ navigation }) => {
  return (
    <Container>
      <ButtonBounder>
        <AnnouncementContainer
          onPress={() => navigation.navigate("AnnouncementDetailScreen")}
        >
          <TopContainer>
            <MustReadBubble>
              <MustReadText>필독</MustReadText>
            </MustReadBubble>
            <TitleText>공지사항 워딩 샘플 텍스트입니다.</TitleText>
          </TopContainer>
          <DateText>2022. 01. 01</DateText>
        </AnnouncementContainer>
        <DistributionLine></DistributionLine>
        <AnnouncementContainer>
          <TopContainer>
            <MustReadBubble>
              <MustReadText>필독</MustReadText>
            </MustReadBubble>
            <TitleText>공지사항 워딩 샘플 텍스트입니다.</TitleText>
          </TopContainer>
          <DateText>2022. 01. 01</DateText>
        </AnnouncementContainer>
        <DistributionLine></DistributionLine>
        <AnnouncementContainer>
          <TopContainer>
            <TitleText>공지사항 워딩 샘플 텍스트입니다.</TitleText>
          </TopContainer>
          <DateText>2022. 01. 01</DateText>
        </AnnouncementContainer>
      </ButtonBounder>
    </Container>
  );
};
