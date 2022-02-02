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
  const [time, setTime] = useState(null);
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
          height: 366,
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
            마스터
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
              에게{" "}
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              시간추가
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              를 요청합니다{" "}
            </Text>
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "noto-regular",
            fontSize: 14,
            color: "rgba(0, 0, 0, 255)",
            marginLeft: 20,
            marginTop: 4,
          }}
        >
          매칭 시간을 요청하는 알림을 전송합니다
        </Text>

        <View style={{ flex: 1 }}>
          <View
            style={{
              marginStart: 0.5,
              marginTop: 14,
              backgroundColor: colors.mainBlue,
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
              color: colors.mainBlue,
              marginTop: 40,
              paddingLeft: 20,
            }}
          >
            {" "}
            매칭 시간{" "}
          </Text>
          <SmallBarInput
            placeholder={"  매칭 시간을 선택해주세요"}
            stateFn={setTime}
            value={time && time.toLocaleString("ko-KR")}
            isValued={time ? true : false}
            autoCapitalize="none"
            viewStyle={{ marginTop: 20, alignSelf: "center" }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RoundedBtn
            text={"요청하기"}
            isPressed={time}
            onPress={() => {
              time ? alert("요청하기") : null;
            }}
            btnStyle={{ marginTop: 56, marginBottom: 44 }}
          />
        </View>
      </View>
    </View>
  );
};
