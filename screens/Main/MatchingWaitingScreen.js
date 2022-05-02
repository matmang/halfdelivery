import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components";
import colors from "../../colors";
import { width, height } from "../../utils";
import CollapsibleView from "../../components/CollapsableView";
import DeliveryInfo_DlvTip from "../../components/Matching/waiting/DeliveryInfo_DlvTip";
import {
  Participant,
  ParticipantEmpty,
  PriceReadyBoxHost,
  PriceReadyBoxPartner,
} from "../../components/Matching";
import Timer from "../../components/Timer";

const MatchingInfoRoot_HEIGHT = 456;

export default MatchingWaitingScreen = () => {
  const navigation = useNavigation();

  return (
    <Root>
      {/* 배달 정보 */}
      <CollapsibleView sectionTitle={"배달 정보"} maxheight={height * 109}>
        <DeliveryInfo_DlvTip />
      </CollapsibleView>

      {/* 매칭 정보 */}
      <CollapsibleView
        sectionTitle={"매칭 정보"}
        maxheight={height * MatchingInfoRoot_HEIGHT}
        style={{ marginTop: height * 4 }}
      >
        <MatchingInfoRoot>
          <MatchingInfoHeader>
            <Text
              style={{
                fontFamily: "gothica1-regular",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 12,
                color: "#3E3F41",
              }}
            >
              <View
                style={{
                  marginBottom: height * 1,
                }}
              >
                <Image
                  source={require("../../assets/images/right-arrow-deepgrey.png")}
                  style={{
                    width: width * 10,
                    height: height * 9.37,
                  }}
                />
              </View>
              {/* {매칭타입 === 최수주문금액 ? "  최소주문금액 매칭" : "  배달비 매칭"} */}
              {"  "}
              최소주문금액 매칭
            </Text>
            <Timer time={10} style={{ marginLeft: "auto" }} />
          </MatchingInfoHeader>
          <MatchingInfoRootRow>
            <Participant />
            <ParticipantEmpty
              style={{ marginLeft: width * 16, marginRight: "auto" }}
            />
          </MatchingInfoRootRow>
          <MatchingInfoRootRow
            style={{
              marginTop: height * 18,
              // paddingBottom: 10,
            }}
          >
            <ParticipantEmpty />
            <ParticipantEmpty
              style={{ marginLeft: width * 16, marginRight: "auto" }}
            />
          </MatchingInfoRootRow>
        </MatchingInfoRoot>
      </CollapsibleView>

      {/* 내/전체 주문금액 */}
      <PriceReadyBoxHost style={{ marginTop: "auto" }} />
    </Root>
  );
};

const Root = styled.View`
  width: 100%;
  height: 100%;
  background-color: #f5f6f6;
`;

const MatchingInfoRoot = styled.View`
  background-color: #f5f6f6;
  height: ${height * MatchingInfoRoot_HEIGHT}px;
`;

const MatchingInfoHeader = styled.View`
  background-color: #f5f6f6;
  /* background-color: olive; */
  flex-direction: row;
  align-items: center;
  height: ${height * 39}px;
  padding-left: ${width * 24}px;
  padding-right: ${width * 25}px;
`;

const MatchingInfoRootRow = styled.View`
  flex-direction: row;
  background-color: #f5f6f6;
  /* background-color: orange; */
  /* align-items: center; */
  /* justify-content: center; */
  padding-left: ${width * 24}px;
  padding-right: ${width * 24}px;
`;
