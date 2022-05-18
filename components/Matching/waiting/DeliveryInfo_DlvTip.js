import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../../assets/constants";
import styled from "styled-components";
import colors from "../../../colors";
import { width, height } from "../../../utils";
import PlatformIcon from "../../PlatformIcon";
import Timer from "../../Timer";

export default ({ chatRoomInfo }) => {
  const navigation = useNavigation();

  // const storeInfo = chatRoomInfo.matchingInfo.storeNmenus.store;
  // const menus = chatRoomInfo.matchingInfo.storeNmenus.menus;
  // const timeNpersons = chatRoomInfo.matchingInfo.timeNpersons;

  let category = "-";

  // switch (storeInfo.storecategoryID) {
  //   case KOREAN_ID:
  //     category = "한식";
  //     break;
  //   case CHINESE_ID:
  //     category = "중식";
  //     break;
  //   case JAPANESE_ID:
  //     category = "일식";
  //     break;
  //   case WESTERN_ID:
  //     category = "양식";
  //     break;
  //   case CAFE_ID:
  //     category = "카페";
  //     break;
  //   default:
  //     category = "-";
  //     break;
  // }

  const onPress = () => {
    alert("매장링크로 이동");
  };

  return (
    <Root>
      <Header>
        <PlatformIcon platform={platform} isLong={true} />

        <Gothic14medium
          style={{
            marginLeft: width * 8,
            color: colors.primaryBlue,
            textDecorationLine: "underline",
          }}
          onPress={onPress}
        >
          브라운돈까스 안산한양대점
        </Gothic14medium>

        <MaterialIcons
          name="arrow-forward-ios"
          size={12}
          color={colors.primaryBlue}
          style={{ marginLeft: width * 4 }}
        />
      </Header>
      <InfoBox>
        <Top>
          <TopLeft>
            <Gothic12left style={{ flex: 4 }}>최소주문금액</Gothic12left>
            <Nunito12right
              style={{
                flex: 0.2,
                minWidth: 46 * width,
                marginTop: height * 2,
                color: colors.primaryBlue,
              }}
            >
              {parseInt(11000)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Nunito12right>
            <Gothic12left style={{ flex: 1 }}>{"  "}원</Gothic12left>
          </TopLeft>

          <TopRight>
            <Gothic12left style={{ flex: 4 }}>기본 배달비</Gothic12left>
            <Nunito12right
              style={{
                flex: 0.2,
                minWidth: 46 * width,
                marginTop: height * 2,
                color: colors.primaryBlue,
              }}
            >
              {parseInt(3600)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Nunito12right>
            <Gothic12left
              style={{
                flex: 1,
              }}
            >
              {"  "}원
            </Gothic12left>
          </TopRight>
        </Top>

        <Btm>
          <BtmLeft>
            <Gothic12left style={{ flex: 4 }}>매칭 대기 인원</Gothic12left>
            <Nunito12right
              style={{
                flex: 1,
                backgroundColor: "white",
                marginTop: height * 2,
              }}
            >
              <Text
                style={{
                  color: colors.primaryBlue,
                }}
              >
                2{" "}
              </Text>
              / 4
            </Nunito12right>
            <Gothic12left
              style={{
                flex: 0.8,
              }}
            >
              {"  "}명
            </Gothic12left>
          </BtmLeft>

          <BtmRight>
            <Gothic12left style={{ flex: 4 }}>1인 배달비</Gothic12left>
            <Nunito12right
              style={{
                flex: 0.2,
                minWidth: 46 * width,
                marginTop: height * 2,
                color: colors.primaryBlue,
              }}
            >
              {parseInt(800)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Nunito12right>
            <Gothic12left
              style={{
                flex: 1,
              }}
            >
              {"  "}원
            </Gothic12left>
          </BtmRight>
        </Btm>
      </InfoBox>
    </Root>
  );
};

const Root = styled.View`
  background-color: white;
  width: ${width * 412}px;
  height: ${height * 109}px;

  /* padding: 2px; */
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 14}px;
  margin-left: ${width * 20}px;
`;

const InfoBox = styled.View`
  /* background-color: white; */
  flex: 3;
  margin-left: ${width * 20}px;
`;

const Top = styled.View`
  flex-direction: row;
  /* flex: 1; */
  height: ${height * 20}px;
  margin-top: ${height * 8}px;
`;

const TopLeft = styled.View`
  flex: 1;
  /* background-color: yellow; */
  flex-direction: row;
  align-items: center;
  /* margin-left: ${width * 2}px; */
  /* margin-right: ${width * 10}px; */
  /* justify-content: center; */
`;

const TopRight = styled.View`
  flex: 1;
  /* background-color: orange; */
  flex-direction: row;
  align-items: center;
  margin-left: ${width * 18}px;
  margin-right: ${width * 16}px;
  /* justify-content: center; */
`;

const Btm = styled(Top)`
  margin-top: 0px;
`;

const BtmLeft = styled(TopLeft)`
  /* background-color: cyan; */
`;

const BtmRight = styled(TopRight)`
  /* background-color: blue; */
`;

const Gothic14medium = styled.Text`
  font-size: ${width * 14}px;
  /* font-size: 12px; */
  font-family: "gothic-medium";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Gothic12left = styled.Text`
  font-size: ${width * 12}px;
  /* font-size: 12px; */
  font-family: "gothic-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Nunito12right = styled(Gothic12left)`
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;
