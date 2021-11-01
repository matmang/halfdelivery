import { useNavigation } from "@react-navigation/core";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import logos from "../../images";
import { useDispatch } from "react-redux";
// import { setStore } from "../../redux/orderSlice";

const StoreComponent = ({ storeInfo }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  // console.log(typeof storeInfo.storeImgUri);

  return (
    <View style={styles.root}>
      <Text style={styles.store}>{storeInfo.store}</Text>

      <Image
        style={styles.image}
        source={
          // storeInfo.storeImgUri !== undefined ? { uri: storeInfo.storeImgUri } : logos.halfLogo
          logos.halfLogo
        }
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          배달팁
          {/* //? JS Magic! storeInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {storeInfo.maxDlvTip && <Text style={styles.title}> {storeInfo.maxDlvTip.toLocaleString("ko-KR")}</Text>}원
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 193,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#fff",
  },
  store: {
    alignSelf: "center",
    marginTop: 20,
    fontSize: 17,
  },
  image: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 25,
    alignSelf: "center",
    width: 95,
    height: 82,
    resizeMode: "contain", //? Show whole Image (with white space)
  },
  infoContainer: {
    marginTop: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 15,
    fontFamily: "noto-regular",
    // fontWeight: "bold",
    textAlign: "right",
  },
});

export default StoreComponent;
