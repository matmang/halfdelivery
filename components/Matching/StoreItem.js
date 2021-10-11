import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
import { setStore } from "../../redux/orderSlice";

export default ({ storeInfo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log(typeof storeInfo.storeImgUri);

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        // ? 선택한 매장정보 redux 로 저장.
        dispatch(setStore(storeInfo.store));

        navigation.navigate("SelectMenuScreen", {
          storeInfo,
        });
      }}
    >
      <Image
        style={styles.image}
        source={
          // { uri: storeInfo.storeImgUri }
          storeInfo.storeImgUri !== undefined ? { uri: storeInfo.storeImgUri } : logos.halfLogo
        }
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {storeInfo.store} | 최소주문금액 {storeInfo.minOrdPrice}원
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {storeInfo.category} | 배달시간 {storeInfo.maxDlvTime} 분
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          배달팁
          {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {storeInfo.maxDlvTip && <Text style={styles.title}> {storeInfo.maxDlvTip}</Text>}원
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    marginLeft: 3,
    flex: 1,
    height: "auto",
    resizeMode: "contain", //? Show whole Image (with white space)
  },
  rightContainer: {
    padding: 10,
    backgroundColor: "white",
    justifyContent: "flex-end",
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontFamily: "noto-regular",
    // fontWeight: "bold",
    textAlign: "right",
  },
});
