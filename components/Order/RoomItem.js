import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import logos from "../../images";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";

const RoomItem = ({ chatRoomInfo }) => {
  const navigation = useNavigation();

  const storeInfo = chatRoomInfo.matchingInfo.storeNmenus.store;
  const menus = chatRoomInfo.matchingInfo.storeNmenus.menus;
  const timeNpersons = chatRoomInfo.matchingInfo.timeNpersons;

  const KOREAN_ID = "8314af0c-1d8e-4112-869b-15689debb495";
  const CHINESE_ID = "382f8bce-5182-4402-ab8d-564618a335fd";
  const JAPANESE_ID = "f9db956b-5bcb-4ddf-ba96-2010ae7c7ee5";
  const WESTERN_ID = "2634afad-acdb-4b9f-a5cc-feafbd9dbaa4";
  const CAFE_ID = "b26daa27-f6c3-4243-a73e-f9d9352d06e7";

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
    navigation.navigate("ChatRoomStack", {
      screen: "ChatRoomScreen",
      params: {
        chatRoomID: chatRoomInfo.id,
        storeInfo,
        menus,
        timeNpersons,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Image
        style={styles.image}
        source={
          storeInfo.storeImgUri !== undefined
            ? { uri: storeInfo.storeImgUri }
            : logos.halfLogo
        }
      />
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 20,
              borderRadius: 12,
              backgroundColor: "#E5E6E7",
              justifyContent: "center",
              marginBottom: 5,
            }}
          >
            <Text style={styles.categoryText} numberOfLines={1}>
              {category}
            </Text>
          </View>
          <Text style={styles.storeText} numberOfLines={1}>
            {storeInfo.store}
          </Text>
        </View>

        <Text style={styles.priceText} numberOfLines={1}>
          필요금액 {storeInfo.minOrdPrice.toLocaleString("ko-KR")} 원
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.personsContainer}>
            <Text style={styles.personsText} numberOfLines={1}>
              필요인원 {timeNpersons.persons}명
            </Text>
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText} numberOfLines={1}>
              남은시간 {timeNpersons.persons} 분분
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          marginLeft: 80,
          marginRight: 24,
          backgroundColor: "yellow",
        }}
      >
        <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
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
    padding: 5,
    marginLeft: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontFamily: "noto-regular",
    // fontWeight: "bold",
    textAlign: "right",
  },

  minPriceContainer: {
    justifyContent: "center",
    alignContent: "center",
    padding: 5,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 2,
  },
  personsContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  timeContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    fontSize: 15,
    lineHeight: 17,
    textAlign: "center",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "noto-regular",
  },
  storeText: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: "noto-regular",
    marginLeft: 8,
    marginBottom: 3,
  },
  priceText: {
    fontSize: 17,
    lineHeight: 20,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  personsText: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  timeText: {
    fontSize: 12,
    lineHeight: 14,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
});

export default RoomItem;
