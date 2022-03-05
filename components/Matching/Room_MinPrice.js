import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { EnterMatching } from "./Modals";
import { DataStore } from "aws-amplify";
import { Store } from "../../AWS/src/models";

export default ({ matchingInfo }) => {
  const {
    matchingInfoStoreCategoryId,
    matchingInfoStoreId,
    platform,
    requiredPersons,
    setTime,
    type,
  } = matchingInfo;

  const navigation = useNavigation();
  const [isModal, setIsModal] = useState(false);
  const [store, setStore] = useState(null);

  useLayoutEffect(() => {
    const fetchStore = async () => {
      const store = await DataStore.query(Store, matchingInfoStoreId);
      setStore(store);
      console.log(store);
    };

    fetchStore();
  }, []);

  let category = "-";
  switch (matchingInfoStoreCategoryId) {
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

  if (!store) {
    return <ActivityIndicator />;
  }

  const onPress = () => {
    setIsModal(true);
  };

  return (
    <Pressable style={styles.root} onPress={onPress}>
      {isModal && (
        <EnterMatching
          isModal={isModal}
          setIsModal={setIsModal}
          matchingInfo={matchingInfo}
          storeInfo={store}
        />
      )}
      <Image style={styles.image} source={{ uri: store.storeImgUri }} />

      <InfoRoot>
        <Header>
          <PlatformIcon platform={platform} />
          <Noto14medium style={{ marginLeft: width * 8 }}>
            {store.store}
          </Noto14medium>
          <Timer
            style={{ marginLeft: "auto", marginRight: width * 24 }}
            simple={true}
            time={setTime}
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
                {parseInt(store.minOrdPrice)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </Nunito12right>
              <Noto12left style={{ flex: 1 }}>{"  "}원</Noto12left>
            </TopLeft>

            <TopRight>
              <Noto12left style={{ flex: 4, color: colors.primaryBlue }}>
                필요주문금액
              </Noto12left>
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
              <Noto12left
                style={{
                  flex: 1,
                  color: colors.primaryBlue,
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
                {parseInt(11000)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
                2 / {requiredPersons}
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
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Noto12left = styled.Text`
  font-size: ${width * 12}px;
  /* font-size: 12px; */
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Nunito12right = styled(Noto12left)`
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;
