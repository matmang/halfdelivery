import React from "react";
import { View, Text, Pressable } from "react-native";
import RoundedBtn from "../../RoundedBtn";

export default () => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        alignSelf: "center",
        shadowColor: "black",
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
          alignItems: "flex-start",
          paddingStart: 20.5,
          paddingTop: 41,
          width: 364,
          height: 244,
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 255)",
        }}
      >
        <Text
          style={{
            marginStart: 0.5,
          }}
        >
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            {" "}
            매칭을{" "}
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(227, 0, 78, 255)",
            }}
          >
            취소
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            합니다{" "}
          </Text>
        </Text>
        <View
          style={{
            marginTop: 16,
            backgroundColor: "rgba(227, 0, 78, 255)",
            width: 324,
            height: 1.5,
          }}
        />
        <Text
          style={{
            fontFamily: "gothica1-regular",
            fontSize: 14,
            color: "rgba(18, 18, 18, 255)",
            marginStart: 0.5,
            marginTop: 19,
          }}
        >
          {" "}
          매칭을 취소하고, 즉시 퇴장합니다.{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <RoundedBtn
            btnStyle={{
              justifyContent: "center",
              alignItems: "center",
              marginStart: 3.5,
              marginTop: 45,
              width: 148,
              height: 40,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "rgba(173, 177, 192, 255)",
            }}
            textStyle={{
              fontFamily: "gothica1-regular",
              fontSize: 17,
              textAlign: "center",
              color: "rgba(173, 177, 192, 255)",
            }}
            text={"매칭유지"}
            onPress={() => {
              alert("모달창 닫기");
            }}
          />

          <RoundedBtn
            btnStyle={{
              justifyContent: "center",
              alignItems: "center",
              // paddingStart: 45,
              // paddingTop: 12,
              marginStart: 20,
              marginTop: 45,
              width: 148,
              height: 40,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "rgba(227, 0, 78, 255)",
            }}
            textStyle={{
              fontFamily: "gothica1-regular",
              fontSize: 17,
              textAlign: "center",
              color: "rgba(227, 0, 78, 255)",
            }}
            text={"매칭취소"}
            onPress={() => {
              alert("매칭취소");
            }}
          />
        </View>
      </View>
    </View>
  );
};
