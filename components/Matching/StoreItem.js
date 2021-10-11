import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
import { setStore } from "../../redux/orderSlice";

export default ({ storeInfo }) => {
  // console.log(useContext(SelectStoreScreenContext));
  // const { category, category2, category3 } = useContext(
  //   SelectStoreScreenContext
  // );
  // console.log("StoreItem =>", category);

  // storeInfo.image =
  //   "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bd0e340-f08c-41e4-98f3-dbc9904abe8e/Logo_72dpi-01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210906T080723Z&X-Amz-Expires=86400&X-Amz-Signature=9cfe0ac4ac1b99ad3e195573772038d7f328eaf41f7ecd2e31c1381569afe07e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_72dpi-01.png%22";
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
