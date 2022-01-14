import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
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

const StoreRoomBox = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const NonImgBox = styled.View`
  padding: 5px;
  margin-left: 20px;
  justify-content: center;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StoreText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  font-family: "noto-regular";
  margin-bottom: 3px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "noto-regular";
`;

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  text-align: right;
`;

const StoreItem = ({ storeInfo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <StoreRoomBox
      onPress={() => {
        // ? nested screen 상태에선, navigation 방법이 조금 다르다.
        // 참조: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
        navigation.navigate("StoreStack", {
          screen: "SelectMenuScreen",
          params: {
            storeInfo,
            isHost: true,
          },
        });
      }}
    >
      <Image
        style={styles.image}
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

const styles = StyleSheet.create({
  image: {
    // marginLeft: 3,
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 24,
    marginVertical: 10,
    borderRadius: 10,
    height: 72,
    width: 72,

    resizeMode: "cover", // ? https://github.com/facebook/react-native/issues/17684#:~:text=resizeMode%3D%22contain%22&text=contain%20%3A%20Scale%20the%20image%20uniformly,the%20view%20(minus%20padding).
  },
});

export default StoreItem;
