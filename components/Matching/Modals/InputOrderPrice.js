import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import colors from "../../../colors";
import Btn from "../../Auth/Btn";
import PlatformIcon from "../../PlatformIcon";
import RoundedBtn from "../../RoundedBtn";
import { MaterialIcons } from "@expo/vector-icons";
import BarInput from "../../Auth/BarInput";
import SmallBarInput from "../../Auth/SmallBarInput";
import { width, height } from "../../../utils";
import DisclaimerFooter from "../../DisclaimerFooter";

export default ({ name }) => {
  const [price, setPrice] = useState(null);
  const [isPressed, setIsPressed] = useState(null);

  console.log(isPressed);
  return (
    <View
      style={{
        shadowColor: "black",
        alignSelf: "center",
        shadowOpacity: 0.16,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowRadius: 6,
      }}
    >
      <View
        style={{
          justifyContent: "flex-start",
          // alignItems: "center",
          // padding: 20,
          width: width * 364,
          height: height * 428,
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 255)",
          elevation: 6,
        }}
      >
        <Pressable
          onPress={() => {
            alert("모달창끄기");
          }}
          style={{
            position: "absolute",
            marginRight: width * 20,
            marginLeft: width * 330,
            marginTop: height * 16.6,
            marginBottom: height * 399.4,
          }}
        >
          <Image
            source={require("../../../assets/images/real-delete.png")}
            style={{
              width: width * 14,
              height: height * 14,
            }}
          />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: height * 44,
            marginLeft: width * 20,
          }}
        >
          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            주문금액
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            을{" "}
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            입력
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            해주세요{" "}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              marginStart: 0.5,
              marginTop: height * 14,
              backgroundColor: "rgba(84, 101, 170, 255)",
              width: width * 324,
              height: height * 1.5,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 17,
              color: "rgba(0, 0, 0, 255)",
              marginTop: height * 21,
              paddingLeft: width * 20,
            }}
          >
            {" "}
            배달 정보{" "}
          </Text>

          <Pressable
            onPress={() => {
              alert("매장정보로 이동");
            }}
            style={{
              marginLeft: width * 20,
              marginTop: height * 8,
              flexDirection: "row",
              // backgroundColor: "pink",
            }}
          >
            <PlatformIcon platform={platform} />
            <Text
              style={{
                marginTop: height * -2,
                marginLeft: width * 12,
                fontFamily: "gothica1-medium",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 15,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              매장이름
            </Text>

            <MaterialIcons
              name="arrow-forward-ios"
              size={12}
              color="black"
              style={{
                alignSelf: "center",
                marginLeft: width * 20,
              }}
            />
          </Pressable>

          <Text
            style={{
              fontFamily: "gothica1-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 17,
              color: "rgba(0, 0, 0, 255)",
              marginTop: height * 40,
              paddingLeft: width * 20,
            }}
          >
            {" "}
            주문 금액
          </Text>
          <SmallBarInput
            placeholder={"  선택한 메뉴의 금액을 입력해주세요"}
            stateFn={setPrice}
            value={price && price.toLocaleString("ko-KR")}
            isValued={price ? true : false}
            autoCapitalize="none"
            viewStyle={{ marginLeft: width * 22, marginTop: height * 20 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // marginTop: height*20,
          }}
        >
          <RoundedBtn
            text={"입력완료"}
            isPressed={price}
            onPress={() => {
              isPressed ? alert("내보내기") : null;
            }}
          />

          <View
            style={{
              backgroundColor: "#F5F6F6",
              justifyContent: "center",
              width: width * 364,
              height: height * 55,
              marginTop: height * 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <DisclaimerFooter />
          </View>
        </View>
      </View>
    </View>
  );
};
