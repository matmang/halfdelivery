import { View, Text, Pressable, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import StoreCategory from "../../StoreCategory";
import { width, height } from "../../../utils";
import logos from "../../../images";

const StoreInfoSelectPlatform = ({ storeInfo, category }) => {
  const { baeminDlvTip } = storeInfo;
  const { baeminOrderPrice } = storeInfo;
  const { baeminUri } = storeInfo;
  const { coupangDlvTip } = storeInfo;
  const { coupangOrderPrice } = storeInfo;
  const { coupangUri } = storeInfo;
  const { yogiyoDlvTip } = storeInfo;
  const { yogiyoOrderPrice } = storeInfo;
  const { yogiyoUri } = storeInfo;
  const { backgroundImgUri } = storeInfo;
  const { logoImgUri } = storeInfo;
  const { name } = storeInfo;
  const { location } = storeInfo;
  const { openHours } = storeInfo;
  const { storecategoryID } = storeInfo;

  return (
    <StoreRoomBox>
      <Img
        resizeMode="cover"
        source={
          logos.halfLogo
          // { uri: logoImgUri }
          // logoImgUri !== undefined ? { uri: logoImgUri } : logos.halfLogo
        }
      />
      <View style={{ flexDirection: "column" }}>
        <StoreNameRoot>
          <InfoView>
            <StoreCategory category={category} />
            <StoreText>{name}</StoreText>
          </InfoView>
        </StoreNameRoot>

        <NumberInfoRoot>
          <Text>최소주문금액과 배달비</Text>
          <NumberText>1000</NumberText>
          <NumberText>3000</NumberText>
          <InfoView></InfoView>
        </NumberInfoRoot>
      </View>
    </StoreRoomBox>
  );
};

const StoreRoomBox = styled.View`
  width: ${width * 324}px;
  flex-direction: row;
  background-color: rosybrown;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* margin-top: 20px; */
`;

const Img = styled.Image`
  /* margin-left: 24px; */
  /* margin-top: 10px; */
  border-radius: 16px;
  border-width: 1px;
  border-color: red;

  width: ${width * 72}px;
  height: ${height * 72}px;
  margin-bottom: ${height * 10}px;
`;

const StoreNameRoot = styled.View`
  margin-top: ${height * 2}px;
  margin-left: ${width * 20}px;
  background-color: red;
`;

const NumberInfoRoot = styled.View`
  margin-top: ${height * 2}px;
  margin-left: ${width * 20}px;
  background-color: yellowgreen;
`;

const InfoView = styled.View`
  flex-direction: row;
  /* align-items: center; */
  /* padding: 2px; */
`;

const InfoText = styled.Text`
  font-size: 13px;
  text-align: left;
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
  /* padding: 1px; */
`;

const NumberText = styled.Text`
  font-size: 13px;
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const StoreText = styled.Text`
  font-size: 14px;
  text-align: left;
  font-family: "gothica1-medium";
  include-font-padding: false;
  text-align-vertical: center;
  margin-left: 8px;
  /* margin-bottom: 3px; */
`;

export default StoreInfoSelectPlatform;
