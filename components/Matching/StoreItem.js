import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import logos from "../../images";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import { SelectPlatform } from "../../components/Matching/modals/";
import StoreCategory from "../StoreCategory";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../assets/constants";
import { width, height } from "../../utils";

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

      <Img
        resizeMode="cover"
        source={
          // logos.halfLogo
          // { uri: logoImgUri }
          logoImgUri == null ? logos.halfLogo : { uri: logoImgUri }
        }
      />
      <NonImgBox>
        <InfoView>
          <StoreCategory category={category} />
          <StoreText>{name}</StoreText>
          {/* <MaterialIcons
            name="arrow-forward-ios"
            size={12}
            color="black"
            style={{ marginLeft: 12, marginBottom: 6 }}
          /> */}
        </InfoView>

        <InfoView>
          <View>
            <InfoText numberOfLines={1}>최소주문금액</InfoText>
            <InfoText numberOfLines={1}>배달비</InfoText>
          </View>

          <View style={{ marginLeft: 18 }}>
            <InfoText numberOfLines={1}>
              <NunitoText>
                {DlvTipsArray[0][0]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Text style={{ fontFamily: "gothica1-regular" }}> 원</Text>
                {"   "}~{"   "}
                {DlvTipsArray[DlvTipsArray.length - 1][0]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Text style={{ fontFamily: "gothica1-regular" }}> 원</Text>
              </NunitoText>
            </InfoText>

            {DlvTipsArray.length !== 1 ? (
              <InfoText numberOfLines={1}>
                {DlvTipsArray[DlvTipsArray.length - 1][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Text style={{ fontFamily: "gothica1-regular" }}> 원</Text>
                {"   "}~{"   "}
                {DlvTipsArray[0][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Text style={{ fontFamily: "gothica1-regular" }}> 원</Text>
              </InfoText>
            ) : (
              <InfoText numberOfLines={1}>
                {DlvTipsArray[0][1]
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                <Text style={{ fontFamily: "gothica1-regular" }}> 원</Text>
              </InfoText>
            )}
          </View>
        </InfoView>
      </NonImgBox>
    </StoreRoomBox>
  );
};

const StoreRoomBox = styled.Pressable`
  width: 100%;
  height: ${height * 100}px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  /* margin-top: 2px; */
  margin-bottom: 2px;
`;

const Img = styled.Image`
  margin-left: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  width: ${width * 72}px;
  height: ${height * 72}px;
`;

const NonImgBox = styled.View`
  padding: 5px;
  margin-left: 20px;
  justify-content: center;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px;
`;

const StoreText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  text-align: left;
  font-family: "gothica1-medium";
  include-font-padding: false;
  text-align-vertical: center;
  margin-left: 8px;
  margin-bottom: 6px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
  padding: 2px;
`;

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;

export default StoreItem;
