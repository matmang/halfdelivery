import React from "react";
import { View, Text, Pressable, Image } from "react-native";

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
          paddingStart: 20.5,

          width: 364,
          height: 195,
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
        <Text
          style={{
            marginStart: 0.5,
            marginTop: 14.7,
          }}
        >
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            {" "}
            매칭
          </Text>
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            이{" "}
          </Text>{" "}
          <Text
            style={{
              fontFamily: "gothica1-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
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
            되었습니다
          </Text>{" "}
        </Text>
        <View
          style={{
            marginTop: 16,
            backgroundColor: "rgba(14, 37, 124, 255)",
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
          마스터가 매칭을 취소하여,{" "}
        </Text>
        <Text
          style={{
            fontFamily: "gothica1-regular",
            fontSize: 14,
            color: "rgba(18, 18, 18, 255)",
            marginStart: 0.5,
            marginTop: 7,
          }}
        >
          {" "}
          자동으로 매칭이 종료되었습니다.{" "}
        </Text>
      </View>
    </View>
  );
};
