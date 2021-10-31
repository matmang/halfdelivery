import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import logos from "../../images";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ chatRoomInfo }) => {
  const store = chatRoomInfo.matchingInfo.storeNmenus.store;
  const menus = chatRoomInfo.matchingInfo.storeNmenus.menus;
  const timeNpersons = chatRoomInfo.matchingInfo.timeNpersons;

  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={
          logos.halfLogo
          // { uri: storeInfo.storeImgUri }
          // store.storeImgUri !== undefined ? { uri: store.storeImgUri } : logos.halfLogo
        }
      />
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{ width: 44, height: 20, borderRadius: 12, backgroundColor: "#E5E6E7", justifyContent: "center" }}
          >
            <Text style={styles.categoryText} numberOfLines={1}>
              카테
            </Text>
          </View>
          <Text style={styles.storeText} numberOfLines={1}>
            {store.store}
          </Text>
        </View>

        <Text style={styles.priceText} numberOfLines={1}>
          필요금액 {store.minOrdPrice.toLocaleString("ko-KR")} 원
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

      <TouchableOpacity
        style={{ justifyContent: "center", marginRight: 20, backgroundColor: "red" }}
        onPress={() => alert("테스트")}
      >
        <MaterialIcons name="arrow-forward-ios" size={12} color="black" />
      </TouchableOpacity>
    </View>
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
    flex: 1,
  },
  timeContainer: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "noto-regular",
  },
  storeText: {
    fontSize: 17,
    textAlign: "left",
    fontFamily: "noto-regular",
    marginLeft: 8,
    marginBottom: 3,
  },
  priceText: {
    fontSize: 17,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  personsText: {
    fontSize: 14,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
  timeText: {
    fontSize: 12,
    textAlign: "left",
    fontFamily: "noto-regular",
  },
});
