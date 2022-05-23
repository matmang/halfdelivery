import { View, Text, Pressable, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import StoreCategory from "../../StoreCategory";
import { width, height } from "../../../utils";
import logos from "../../../images";

const StoreInfoSelectPlatform = ({
  storeInfo,
  category,
  DlvTipsArray,
  style,
}) => {
  const [isModal, setIsModal] = useState(false);

  // const { baeminDlvTip } = storeInfo;
  // const { baeminOrderPrice } = storeInfo;
  // const { baeminUri } = storeInfo;
  // const { coupangDlvTip } = storeInfo;
  // const { coupangOrderPrice } = storeInfo;
  // const { coupangUri } = storeInfo;
  // const { yogiyoDlvTip } = storeInfo;
  // const { yogiyoOrderPrice } = storeInfo;
  // const { yogiyoUri } = storeInfo;
  // const { backgroundImgUri } = storeInfo;
  const { logoImgUri } = storeInfo;
  const { name } = storeInfo;
  // const { location } = storeInfo;
  // const { openHours } = storeInfo;
  // const { storecategoryID } = storeInfo;

  return (
    <Root style={style}>
      <StoreRoomBox
        // onPress={() => {
        //   // ? nested screen 상태에선, navigation 방법이 조금 다르다.
        //   // 참조: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
        //   navigation.navigate("StoreStack", {
        //     screen: "SelectMenuScreen",
        //     params: {
        //       storeInfo,
        //       isHost: true,
        //     },
        //   });
        // }}
        onPress={() => {
          setIsModal(true);
          // alert("s");
          // return <StoreModal isModal={true} setIsModal={setIsModal} />;
        }}
      >
        {isModal && (
          <SelectPlatform
            isModal={isModal}
            setIsModal={setIsModal}
            storeInfo={storeInfo}
            category={category}
          />
        )}
        <ImageRoot
          resizeMode="cover"
          source={
            // logos.halfLogo
            // { uri: logoImgUri }
            logoImgUri == null ? logos.halfLogo : { uri: logoImgUri }
          }
        />
        <InfoRoot>
          {/* //? 카테고리와 식당명 */}
          <Row0>
            <StoreCategory category={category} />
            <StoreText>{name}</StoreText>
          </Row0>

          {/* //? 최소주문금액 표기 */}
          {DlvTipsArray.length === 1 ? (
            <Row1>
              <InfoText>최소주문금액</InfoText>
              <Price4>
                {DlvTipsArray[DlvTipsArray.length - 1][0]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price4>
              <Won2>원</Won2>
            </Row1>
          ) : (
            <Row1>
              <InfoText>최소주문금액</InfoText>
              <Price1>
                {DlvTipsArray[0][0]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price1>
              <Won1>원</Won1>
              <Wave>~</Wave>
              <Price2>
                {DlvTipsArray[DlvTipsArray.length - 1][0]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price2>
              <Won2>원</Won2>
            </Row1>
          )}

          {/* //? 배달비 표기 */}
          {DlvTipsArray.length === 1 ? (
            <Row2>
              <InfoText>배달비</InfoText>
              <Price4>
                {" "}
                {DlvTipsArray[0][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price4>
              <Won3>원</Won3>
            </Row2>
          ) : (
            <Row2>
              <InfoText>배달비</InfoText>
              <Price1>
                {" "}
                {DlvTipsArray[DlvTipsArray.length - 1][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price1>
              <Won1>원</Won1>
              <Wave>~</Wave>
              <Price3>
                {" "}
                {DlvTipsArray[0][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Price3>
              <Won2>원</Won2>
            </Row2>
          )}
        </InfoRoot>
      </StoreRoomBox>
      <HorizontalLine />
    </Root>
  );
};

const Root = styled.View`
  width: ${width * 332}px;
  height: ${height * 72}px;
  margin-top: -1.5px;
`;

const StoreRoomBox = styled.Pressable`
  width: ${width * 332}px;
  height: ${height * 72}px;
  flex-direction: row;
  align-items: center;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: ${height * 1.5}px;
`;

const ImageRoot = styled.Image`
  border-radius: 16px;
  width: ${width * 72}px;
  height: ${height * 72}px;
  border-width: 1px;
  border-color: black;
`;

const InfoRoot = styled.View`
  padding-left: ${width * 12}px;
  width: ${width * (332 - 72)}px;
  height: ${height * 72}px;
  opacity: 0.8;
`;

const Row0 = styled.View`
  width: ${width * 248}px;
  height: auto;
  flex-direction: row;
  align-items: center;
`;

const Row1 = styled.View`
  width: ${width * 248}px;
  height: auto;
  flex-direction: row;
  margin-top: ${height * 8}px;
`;

const Row2 = styled(Row1)`
  margin-top: ${height * 4}px;
  margin-bottom: ${height * 19}px;
`;

const Price1 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  text-align: right;
  margin-left: auto;
`;

const Price2 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  text-align: right;
  margin-left: ${width * 8}px;
`;

const Price3 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  text-align: right;
  margin-left: ${width * 16}px;
`;

const Price4 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  text-align: right;
  margin-left: auto;
`;

const Won1 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothic-regular";
  margin-left: ${width * 2}px;
`;

const Won2 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothic-regular";
  margin-left: ${width * 2}px;
`;

const Won3 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothic-regular";
  margin-left: ${width * 2}px;
`;

const Wave = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  margin-left: ${width * 16}px;
`;

const StoreText = styled.Text`
  font-size: ${height * 14}px;
  margin-left: ${width * 4}px;
  font-family: "gothic-medium";
`;

const InfoText = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothic-regular";
  text-align: left;
`;

export default StoreInfoSelectPlatform;
