import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";
import StoreModal from "./StoreModal";
import StoreCategory from "../StoreCategory";

const StoreRoomBox = styled.Pressable`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const Img = styled.Image`
  border-color: black;
  border-width: 1px;
  margin-left: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  height: 72px;
  width: 72px;
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
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  font-family: "noto-regular";
  margin-left: 8px;
  margin-bottom: 3px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "noto-regular";
  padding: 2px;
`;

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  text-align: right;
`;

const StoreItem = ({ storeInfo, category }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);

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
        <StoreModal
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
          <MaterialIcons
            name="arrow-forward-ios"
            size={12}
            color="black"
            style={{ marginLeft: 12, marginBottom: 6 }}
          />
        </InfoView>

        <InfoView>
          <View>
            <InfoText numberOfLines={1}>최소주문금액</InfoText>
            <InfoText numberOfLines={1}>배달팁</InfoText>
          </View>

          <View style={{ marginLeft: 18 }}>
            <InfoText numberOfLines={1}>
              <NunitoText>
                {storeInfo.minOrdPrice.toLocaleString("ko-KR")}
              </NunitoText>
              원
            </InfoText>
            <InfoText numberOfLines={1}>
              {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
              {/* //? Conditional components 를 다루는 법이다. */}
              {storeInfo.maxDlvTip && (
                <InfoText>
                  <NunitoText>
                    {storeInfo.maxDlvTip.toLocaleString("ko-KR")}
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

export default StoreItem;
