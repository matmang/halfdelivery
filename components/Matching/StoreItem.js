import React, { useState, useEffect } from "react";
import { View } from "react-native";
import logos from "../../images";
import styled from "styled-components";
import { SelectPlatform } from "../../components/Matching/Modals/";
import StoreCategory from "../StoreCategory";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../assets/constants";
import { width, height } from "../../utils";

const StoreItem = ({ storeInfo }) => {
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState(null);

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

  // console.log("baeminUri", baeminUri);
  console.log(storeInfo);

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
          category={storecategoryID}
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
                {baeminOrderPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </NunitoText>
              원
            </InfoText>
            <InfoText numberOfLines={1}>was storeInfo.maxDlvTip</InfoText>
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
  font-family: "noto-medium";
  include-font-padding: false;
  text-align-vertical: center;
  margin-left: 8px;
  margin-bottom: 6px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "noto-regular";
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
