import React, { Component } from "react";
import { Image, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CircularProgress from "react-native-circular-progress-indicator"; // https://www.npmjs.com/package/react-native-circular-progress-indicator
import styles from "../../components/Main/styles";
import orderStyles from "../../components/Order/styles";

const MatchingRequestHost = (props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={{ margin: 2 }}>
        <Text style={orderStyles.title}>매칭 요청중</Text>
      </View>
      <View style={styles.h25greyCenter}>
        <CircularProgress
          value={0}
          initialValue={10}
          maxValue={10}
          radius={120}
          textColor={"#ecf0f1"}
          duration={10000}
          onAnimationComplete={() =>
            alert("시간 내에 상대방을 찾지 못하였습니다.")
          }
        />
      </View>
      <View style={{ margin: 2 }}>
        <Text style={orderStyles.title}>[ 주문 내역 창 ]</Text>
      </View>
      <View style={styles.orderLog}>
        <Text style={styles.orderLogCategory}>
          {props.route.params.category}
        </Text>
        <Image source={{uri: props.route.params.image}} style={styles.orderLogImage}/>
        {/* <Text style={{ fontSize: 40, fontWeight: "bold", margin: 10 }}>
          {props.route.params.store}
        </Text> */}
        <Text style={styles.orderLogMinPrice}>
          최소주문금액: {props.route.params.minPrice}원
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Button title="예치금 충전하기" onPress={() => alert("테스트")} />
        <Button
          title="매칭 취소하기"
          onPress={() => {
            navigation.navigate("TempHome");
          }}
        />
      </View>
    </View>
  );
};

export default MatchingRequestHost;
