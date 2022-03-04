import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import logos from "../../images";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import StoreCategory from "../StoreCategory";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../assets/constants";
import styled from "styled-components";
import colors from "../../colors";
import { width, height } from "../../utils";
import PlatformIcon from "../PlatformIcon";
import Timer from "../Timer";

export default ({ chatRoomInfo }) => {
  const navigation = useNavigation();

  const storeInfo = chatRoomInfo.matchingInfo.storeNmenus.store;
  const menus = chatRoomInfo.matchingInfo.storeNmenus.menus;
  const timeNpersons = chatRoomInfo.matchingInfo.timeNpersons;

  let category = "-";

  switch (storeInfo.storecategoryID) {
    case KOREAN_ID:
      category = "한식";
      break;
    case CHINESE_ID:
      category = "중식";
      break;
    case JAPANESE_ID:
      category = "일식";
      break;
    case WESTERN_ID:
      category = "양식";
      break;
    case CAFE_ID:
      category = "카페";
      break;
    default:
      category = "-";
      break;
  }

  const onPress = () => {
    navigation.navigate("MatchingWaitingScreen", {
      screen: "MatchingWaitingScreen",
      params: {
        chatRoomID: chatRoomInfo.id,
        storeInfo,
        menus,
        timeNpersons,
      },
    });
  };

  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Image
        style={styles.image}
        source={
          storeInfo.storeImgUri !== undefined
            ? { uri: storeInfo.storeImgUri }
            : logos.halfLogo
        }
      />

      <InfoRoot>
        <Header>
          <PlatformIcon platfrom="배민" />
          <Noto14medium style={{ marginLeft: width * 8 }}>
            브라운돈까스 안산한양대점
          </Noto14medium>
          <Timer
            style={{ marginLeft: "auto", marginRight: width * 24 }}
            simple={true}
          />
        </Header>
        <InfoBox>
          <Top>
            <TopLeft>
              <Noto12left style={{ flex: 4 }}>최소주문금액</Noto12left>
              <Nunito12right
                style={{
                  flex: 0.2,

                  minWidth: 46 * width,
                  marginTop: height * 2,
                }}
              >
                {parseInt(11000).toLocaleString("ko-KR")}
              </Nunito12right>
              <Noto12left style={{ flex: 1 }}>{"  "}원</Noto12left>
            </TopLeft>

            <TopRight>
              <Noto12left style={{ flex: 4, color: colors.primaryBlue }}>
                1인 배달비
              </Noto12left>
              <Nunito12right
                style={{
                  flex: 0.2,
                  minWidth: 46 * width,
                  marginTop: height * 2,
                  color: colors.primaryBlue,
                }}
              >
                {parseInt(800).toLocaleString("ko-KR")}
              </Nunito12right>
              <Noto12left
                style={{
                  flex: 1,
                }}
              >
                {"  "}원
              </Noto12left>
            </TopRight>
          </Top>

          <Btm>
            <BtmLeft>
              <Noto12left style={{ flex: 4 }}>현재주문금액</Noto12left>
              <Nunito12right
                style={{
                  flex: 0.2,
                  minWidth: 46 * width,
                  marginTop: height * 2,
                }}
              >
                {parseInt(11000).toLocaleString("ko-KR")}
              </Nunito12right>
              <Noto12left style={{ flex: 1 }}>{"  "}원</Noto12left>
            </BtmLeft>

            <BtmRight>
              <Noto12left style={{ flex: 3 }}>매칭 대기 인원</Noto12left>
              <Nunito12right
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  marginTop: height * 2,
                }}
              >
                2 / 4
              </Nunito12right>
              <Noto12left
                style={{
                  flex: 0.6,
                }}
              >
                {"  "}명
              </Noto12left>
            </BtmRight>
          </Btm>
        </InfoBox>
      </InfoRoot>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    height: height * 100,
    backgroundColor: "#fff",
    marginVertical: height * 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    // marginLeft: 3,
    borderColor: "black",
    // borderWidth: 1,
    marginLeft: width * 24,
    marginRight: width * 12,
    marginVertical: height * 12,
    borderRadius: 10,
    width: width * 72,
    height: height * 72,
    resizeMode: "cover", // ? https://github.com/facebook/react-native/issues/17684#:~:text=resizeMode%3D%22contain%22&text=contain%20%3A%20Scale%20the%20image%20uniformly,the%20view%20(minus%20padding).
  },
});

const InfoRoot = styled.View`
  /* background-color: grey; */
  flex: 1;
  /* padding: 2px; */
`;

const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 14}px;
`;

const InfoBox = styled.View`
  /* background-color: white; */
  flex: 3;
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

const Noto14medium = styled.Text`
  font-size: ${width * 14}px;
  /* font-size: 12px; */
  font-family: "noto-medium";
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
`;

const Noto12left = styled.Text`
  font-size: ${width * 12}px;
  /* font-size: 12px; */
  font-family: "noto-regular";
  text-align: left;
  include-font-padding: false;
  text-align-vertical: center;
`;

const Nunito12right = styled(Noto12left)`
  font-family: "nunito-regular";
  text-align: right;
  include-font-padding: false;
  text-align-vertical: center;
`;
