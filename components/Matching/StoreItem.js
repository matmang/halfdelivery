import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components";

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  text-align: right;
`;

const StoreItem = ({ storeInfo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        // ? nested screen 상태에선, navigation 방법이 조금 다르다.
        // 참조: https://reactnavigation.org/docs/nesting-navigators/#navigating-to-a-screen-in-a-nested-navigator
        navigation.navigate("StoreStack", {
          screen: "SelectMenuScreen",
          params: {
            storeInfo,
            isHost: true
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
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.storeText} numberOfLines={1}>
            {storeInfo.store}
          </Text>

          <View
            style={{
              justifyContent: "center",
              marginLeft: 12,
              backgroundColor: "red",
            }}
            // onPress={() => alert("테스트")}
          >
            <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.leftBox}>
            <Text style={styles.priceText} numberOfLines={1}>
              최소주문금액
            </Text>
            <Text style={styles.delivTipText} numberOfLines={1}>
              배달팁
            </Text>
          </View>

          <View style={styles.rightBox}>
            <Text style={styles.priceText} numberOfLines={1}>
              <NunitoText>
                {storeInfo.minOrdPrice.toLocaleString("ko-KR")}
              </NunitoText>{" "}
              원
            </Text>
            <Text style={styles.priceText} numberOfLines={1}>
              {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
              {/* //? Conditional components 를 다루는 법이다. */}
              {storeInfo.maxDlvTip && (
                <Text style={styles.priceText}>
                  <NunitoText>
                    {storeInfo.maxDlvTip.toLocaleString("ko-KR")}
                  </NunitoText>{" "}
                  원
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
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
  infoContainer: {
    // backgroundColor: "yellow",
    padding: 5,
    marginLeft: 20,
    justifyContent: "center",
  },
  leftBox: {
    // backgroundColor: "red",
  },
  rightBox: {
    // backgroundColor: "blue",
    marginLeft: 18,
  },

  storeText: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: "noto-regular",
    marginBottom: 3,
  },
  priceText: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  delivTipText: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
});

export default StoreItem;
