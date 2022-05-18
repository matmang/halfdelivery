import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import logos from "../../images";
import styled from "styled-components";
import StoreCategory from "../StoreCategory";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../assets/constants";
import { width, height } from "../../utils";
import { SelectPlatform } from "./Modals";

/*   Store {
    "_deleted": null,
    "_lastChangedAt": 1649084860404,
    "_version": 2,
    "backgroundImgUri": null,
    "baeminDlvTip": Object {
      "12000": 2000,
    },
    "baeminOrderPrice": 12000,
    "baeminUri": "https://baemin.me/n_PfMUXGr",
    "coupangDlvTip": null,
    "coupangOrderPrice": null,
    "coupangUri": null,
    "createdAt": "2022-03-29T11:41:38.598Z",
    "id": "c02d26e1-ad08-4848-b982-fc89a3170747",
    "location": null,
    "logoImgUri": null,
    "name": "도스마스 한양대점",
    "openHours": Object {
      "Fri": "11:00~23:00",
      "Mon": "11:00~23:00",
      "Sat": "11:00~23:00",
      "Sun": "11:00~23:00",
      "Thu": "11:00~23:00",
      "Tue": "11:00~23:00",
      "Wed": "11:00~23:00",
    },
    "storecategoryID": "0deb571b-4d3f-4164-8e25-f44ba725fb77",
    "updatedAt": "2022-04-04T15:07:40.334Z",
    "yogiyoDlvTip": null,
    "yogiyoOrderPrice": null,
    "yogiyoUri": null,
  } */

const StoreItem = ({ storeInfo }) => {
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState(null);
  const [DlvTipsArray, setDlvTipsArray] = useState([]);
  const [priceExceptions, setpriceExceptions] = useState([]);

  const { baeminOrderPrice } = storeInfo;
  const { baeminDlvTip } = storeInfo;
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

  useEffect(() => {
    const _baeminDlvTip = { ...baeminDlvTip };
    setDlvTipsArray(makeDlvTipsArray(_baeminDlvTip));
  }, []);

  // ? 개같은 우리 DB 주문금엑/배달비 순서쌍 JSON 데이터를, 이중배열 자료형으로 바꿔준다.
  const makeDlvTipsArray = (DlvTipsObject) => {
    /*  //? BEFORE
      const baeminDlvTip =  {
      "14000": 2500,
      "35000": 0,
      "8500": 3500,
      "법정공휴일": "+1000",
    
      //? AFTER
      Array [
        Array [
          8500,
          3500,
        ],
        Array [
          14000,
          2500,
        ],
        Array [
          35000,
          0,
        ],
      ]  */

    const keys = Object.keys(DlvTipsObject);
    const values = Object.values(DlvTipsObject);
    const targetPrices = keys
      .map((price) => parseInt(price))
      .filter((price) => !isNaN(price));
    const priceExceptions = keys.filter((price) => isNaN(parseInt(price)));
    const dlvTips = values.filter((tip) => typeof tip !== "string");
    const dlvTipsExceptions = values.filter((tip) => typeof tip == "string");

    priceExceptions.forEach((value) => {
      delete DlvTipsObject[value];
    });

    // ? 예외처리
    if (priceExceptions.length !== 0) {
      // priceExceptions.push(dlvTipsExceptions[0]);
      // setpriceExceptions(priceExceptions);
    }

    if (dlvTipsExceptions.length !== 0) {
    }

    const DlvTipsArray = Object.entries(DlvTipsObject);
    DlvTipsArray.forEach((ele) => (ele[0] = parseInt(ele[0])));
    console.log(DlvTipsArray);

    return DlvTipsArray;
  };

  useEffect(() => {
    switch (storecategoryID) {
      case KOREAN_ID:
        setCategory("한식");
        break;
      case CHINESE_ID:
        setCategory("중식");
        break;
      case JAPANESE_ID:
        setCategory("일식");
        break;
      case WESTERN_ID:
        setCategory("양식");
        break;
      case CAFE_ID:
        setCategory("카페");
        break;
      default:
        setCategory("-");
        break;
    }
  }, [storecategoryID]);

  if (DlvTipsArray.length === 0) {
    return <ActivityIndicator />;
  }

  return (
    <Root>
      <HorizontalLine />
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
  width: 100%;
  height: ${height * 108}px;
  background-color: #e6edf3;
  margin-top: -1.5px;
`;

const StoreRoomBox = styled.Pressable`
  width: 100%;
  height: ${height * 105}px;
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

const HorizontalLine = styled.View`
  width: 100%;
  height: ${height * 1.5}px;
  background-color: #e6edf3;
`;

const ImageRoot = styled.Image`
  margin-left: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  width: ${width * 72}px;
  height: ${height * 72}px;

  border-width: 1px;
  border-color: black;
`;

const InfoRoot = styled.View`
  padding-left: ${width * 20}px;
  width: ${width * 316}px;

  background-color: pink;
`;

const Row0 = styled.View`
  background-color: lightblue;
  width: ${width * 316}px;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 19}px;
`;

const Row1 = styled.View`
  background-color: yellow;
  width: ${width * 316}px;
  height: auto;
  flex-direction: row;
  margin-top: ${height * 8}px;
`;

const Row2 = styled(Row1)`
  background-color: orange;
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
  font-family: "gothica1-regular";
  margin-left: ${width * 2}px;
`;

const Won2 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothica1-regular";
  margin-left: ${width * 2}px;
  margin-right: ${width * 58}px;
`;

const Won3 = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothica1-regular";
  margin-left: ${width * 2}px;
  margin-right: ${width * 58}px;
`;

const Wave = styled.Text`
  font-size: ${height * 13}px;
  font-family: "nunito-regular";
  margin-left: ${width * 16}px;
`;

const StoreText = styled.Text`
  font-size: ${height * 14}px;
  margin-left: ${width * 4}px;
  font-family: "gothica1-medium";
`;

const InfoText = styled.Text`
  font-size: ${height * 13}px;
  font-family: "gothica1-regular";
  text-align: left;
`;

const NunitoText = styled.Text`
  font-size: ${height * 14}px;
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;

export default StoreItem;
