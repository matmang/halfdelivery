import React, { useState } from "react";
import { Image, View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator"; // https://www.npmjs.com/package/react-native-circular-progress-indicator

const RequestMatching = (props) => {
  const navigation = useNavigation();

  const storeInfo = props.route.params.storeInfo;
  const menus = props.route.params.menus;
  const matchingInfo = props.route.params.matchingInfo;

  const timeNpersons = matchingInfo.timeNpersons;
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={{ margin: 2 }}>
        <Text style={styles.title}>매칭 요청중</Text>
      </View>
      <View style={styles.progressView}>
        <CircularProgress
          value={0}
          initialValue={timeNpersons.time}
          maxValue={timeNpersons.time}
          radius={120}
          activeStrokeColor="green"
          inActiveStrokeColor="red"
          textColor={"#ecf0f1"}
          duration={timeNpersons.time * 60 * 1000} // ? ms 기준임.
          onAnimationComplete={() => alert("시간 내에 상대방을 찾지 못하였습니다.")}
        />
      </View>
      <View style={{ margin: 2 }}>
        <Text style={styles.title}>[ 주문 내역 창 ]</Text>
      </View>
      <View style={styles.orderLogView}>
        {/* <Text style={styles.orderLogCategory}>{orderInfo.category}</Text> */}
        <Text style={styles.orderLogMinPrice}>{storeInfo.store}</Text>
        <Image source={{ uri: storeInfo.storeImgUri }} style={styles.orderLogImage} />
        <Text style={styles.orderLogMinPrice}>최소주문금액: {storeInfo.minOrdPrice}원</Text>

        {/* 매칭 시간 / 인원 */}
        <Text style={styles.orderLogMinPrice}>매칭 시간: {timeNpersons.time}분</Text>
        <Text style={styles.orderLogMinPrice}>매칭 인원: {timeNpersons.persons}명</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button
          title="확인" //? 홈으로 돌아감, 대신 매칭요청은 계속 진행중.
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  OrderTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  orderLogImage: {
    marginBottom: 10,
    // flex: 1,
    height: 70,
    width: 70,
    resizeMode: "contain", //? Show whole Image (with white space)
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  orderLogCategory: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "left",
  },
  orderLogMinPrice: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },
  orderLogView: {
    width: "95%",
    height: "40%",
    borderRadius: 10,
    marginBottom: 5,
    padding: 20,
    backgroundColor: "lightgrey",
  },
  progressView: {
    width: "95%",
    height: "40%",
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RequestMatching;
