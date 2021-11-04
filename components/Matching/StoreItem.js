import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
// import { setStore } from "../../redux/orderSlice";

const StoreItem = ({ storeInfo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() => {
        // ? 선택한 매장정보 redux 로 저장.
        // dispatch(setStore(storeInfo.store));
        navigation.navigate("SelectMenuScreen", {
          storeInfo,
        });
      }}
    >
      <Image
        style={styles.image}
        source={
          logos.halfLogo
          // { uri: storeInfo.storeImgUri }
          // storeInfo.storeImgUri !== undefined ? { uri: storeInfo.storeImgUri } : logos.halfLogo
        }
      />
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.storeText} numberOfLines={1}>
            {storeInfo.store} Nunito Test 1998
          </Text>
          <View
            style={{ justifyContent: "center", marginLeft: 12, backgroundColor: "red" }}
            // onPress={() => alert("테스트")}
          >
            <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.priceText} numberOfLines={1}>
            최소주문금액
          </Text>
          <Text style={styles.priceNums} numberOfLines={1}>
            {storeInfo.minOrdPrice.toLocaleString("ko-KR")}원
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.delivTipText} numberOfLines={1}>
            배달팁
          </Text>
          <Text style={styles.delivTipNums} numberOfLines={1}>
            {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
            {/* //? Conditional components 를 다루는 법이다. */}
            {storeInfo.maxDlvTip.toLocaleString("ko-KR") && (
              <Text style={styles.title}> {storeInfo.maxDlvTip.toLocaleString("ko-KR")}</Text>
            )}
            원
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    height: 100,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    // marginLeft: 3,
    borderWidth: 1,
    flex: 2,
    marginLeft: 24,
    marginVertical: 10,
    borderRadius: 15,
    height: "auto",
    width: "auto",
    resizeMode: "cover", // ? https://github.com/facebook/react-native/issues/17684#:~:text=resizeMode%3D%22contain%22&text=contain%20%3A%20Scale%20the%20image%20uniformly,the%20view%20(minus%20padding).
  },
  infoContainer: {
    padding: 5,
    marginLeft: 10,
    backgroundColor: "white",
    justifyContent: "center",
    flex: 5,
  },
  title: {
    fontSize: 15,
    fontFamily: "noto-regular",
    // fontWeight: "bold",
    textAlign: "right",
  },

  storeText: {
    fontSize: 17,
    textAlign: "left",
    fontFamily: "noto-regular",
    // fontFamily: "nunito-regular",
    // marginLeft: 8,
    marginBottom: 3,
  },
  priceText: {
    fontSize: 14,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  priceNums: {
    fontSize: 14,
    marginLeft: 29,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  delivTipText: {
    fontSize: 14,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  delivTipNums: {
    fontSize: 14,
    marginLeft: 64,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
});

export default StoreItem;
