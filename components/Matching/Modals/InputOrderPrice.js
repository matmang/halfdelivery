import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import colors from "../../../colors";
import Btn from "../../Auth/Btn";
import PlatformIcon from "../../PlatformIcon";
import RoundedBtn from "../../RoundedBtn";
import { MaterialIcons } from "@expo/vector-icons";
import BarInput from "../../Auth/BarInput";
import SmallBarInput from "../../Auth/SmallBarInput";

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
          width: 364,
          height: 428,
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 255)",
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Pressable
            onPress={() => {
              alert("모달창끄기");
            }}
          >
            <Image
              source={require("../../../assets/images/delete.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 12.5,
                marginTop: 8.8,
              }}
            />
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingTop: 12,
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "noto-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            주문금액
          </Text>
          <Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              을{" "}
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              입력
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              해주세요{" "}
            </Text>
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              marginStart: 0.5,
              marginTop: 14,
              backgroundColor: "rgba(84, 101, 170, 255)",
              width: 324,
              height: 1.5,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "noto-regular",
              fontWeight: "400",
              fontSize: 17,
              color: "rgba(0, 0, 0, 255)",
              marginTop: 21,
              paddingLeft: 20,
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
              marginLeft: 20,
              marginTop: 8,
              flexDirection: "row",
              // backgroundColor: "pink",
            }}
          >
            <PlatformIcon platfrom={"배민"} />
            <Text
              style={{
                marginTop: -2,
                marginLeft: 12,
                fontFamily: "noto-regular",
                fontSize: 15,
                color: "rgba(0, 0, 0, 255)",
                textDecorationLine: "underline",
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
                marginLeft: 20,
              }}
            />
          </Pressable>

          <Text
            style={{
              fontFamily: "noto-regular",
              fontWeight: "400",
              fontSize: 17,
              color: "rgba(0, 0, 0, 255)",
              marginTop: 40,
              paddingLeft: 20,
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
            viewStyle={{ marginLeft: 22, marginTop: 20 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 20,
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
              width: 364,
              height: 55,
              marginTop: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <Text
              style={{
                color: "rgba(62, 63, 65, 1)",
                fontSize: 10,
                fontStyle: "normal",
                fontFamily: "noto-regular",
                textAlign: "left",
                paddingHorizontal: 10,
              }}
            >
              * 하프딜리버리는 상품거래에 대한 통신판매중개자이며, 통신판매의
              당사자가 아닙니다. 따라서, 하프딜리버리는 상품거래에 대하여 책임을
              지지 않습니다.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
