import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import logos from "../../images";
import { MaterialIcons } from "@expo/vector-icons";
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
  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState(null);

  console.log(storeInfo);

  useEffect(() => {
    switch (storeInfo.storecategoryID) {
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
  }, [storeInfo.storecategoryID]);

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
          category={storeInfo.storecategoryID}
        />
      )}
      <Img
        resizeMode="cover"
        source={
          // logos.halfLogo
          // { uri: storeInfo.storeImgUri }
          storeInfo.storeImgUri !== undefined
            ? { uri: storeInfo.storeImgUri }
            : logos.halfLogo
        }
      />
      <NonImgBox>
        <InfoView>
          <StoreCategory category={category} />
          <StoreText>{storeInfo.store}</StoreText>
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
                {storeInfo.minOrdPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </NunitoText>
              원
            </InfoText>
            <InfoText numberOfLines={1}>
              {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
              {/* //? Conditional components 를 다루는 법이다. */}
              {storeInfo.maxDlvTip && (
                <InfoText>
                  <NunitoText>
                    {/*  //! minDlvTip 자리*/}
                    {storeInfo.maxDlvTip
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </NunitoText>
                  원{"   "}~{"   "}
                  <NunitoText>
                    {storeInfo.maxDlvTip
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </NunitoText>
                  원
                </InfoText>
              )}
            </InfoText>
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
