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
          width: width * 364,
          height: height * 348,
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
            // backgroundColor: "red",
            flexDirection: "row",
            marginLeft: width * 20,
            marginTop: height * 44,
          }}
        >
          <Text
            style={{
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            매칭 시간
          </Text>
          <Text
            style={{
              fontFamily: "noto-medium",
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
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            추가
          </Text>
          <Text
            style={{
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            합니다{" "}
          </Text>
        </View>

        <View>
          <View
            style={{
              backgroundColor: colors.primaryBlue,
              width: width * 324,
              height: height * 1.5,
              alignSelf: "center",
              marginTop: height * 16,
            }}
          />

          <Text
            style={{
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 17,
              color: colors.primaryBlue,
              marginTop: height * 36,
              marginLeft: width * 20,
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
            viewStyle={{ marginTop: height * 20, alignSelf: "center" }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RoundedBtn
            text={"추가하기"}
            isPressed={time}
            onPress={() => {
              time ? alert("추가하기") : null;
            }}
            btnStyle={{ marginTop: height * 56, marginBottom: width * 44 }}
          />
        </View>
      </View>
    </View>
  );
};
