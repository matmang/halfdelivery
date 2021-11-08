import React from "react";
import { View, Text } from "react-native";

export default () => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        paddingStart: 23,
        paddingTop: 26,
        flex: 1,
      }}
    >
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "bold",
          fontSize: 20,
          color: "rgba(255, 150, 155, 255)",
        }}
      >
        {" "}
        Enabled{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: "400",
          fontSize: 15,
          color: "rgba(14, 37, 124, 255)",
          marginTop: 27,
        }}
      >
        {" "}
        아이디{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontSize: 17,
          color: "rgba(124, 130, 154, 255)",
          marginStart: 10,
          marginTop: 18,
        }}
      >
        {" "}
        아이디를 입력해주세요{" "}
      </Text>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 366,
          height: 0,
          backgroundColor: "#000000",
        }}
      />
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: 12,
          color: "rgba(255, 255, 255, 255)",
          marginTop: 8,
        }}
      >
        {" "}
        중복된 아이디 입니다{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "bold",
          fontSize: 20,
          color: "rgba(255, 150, 155, 255)",
          marginTop: 18,
        }}
      >
        {" "}
        Focus{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: "400",
          fontSize: 15,
          color: "rgba(14, 37, 124, 255)",
          marginTop: 27,
        }}
      >
        {" "}
        아이디{" "}
      </Text>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 0,
          height: 23,
          backgroundColor: "#000000",
        }}
      />
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: 17,
          color: "rgba(124, 130, 154, 255)",
          marginStart: 10,
          marginTop: -21,
        }}
      >
        {" "}
        아이디를 입력해주세요{" "}
      </Text>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 366,
          height: 0,
          backgroundColor: "#000000",
        }}
      />
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: 12,
          color: "rgba(62, 63, 65, 255)",
          marginTop: 8,
        }}
      >
        {" "}
        도움말 텍스트{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "bold",
          fontSize: 20,
          color: "rgba(255, 150, 155, 255)",
          marginTop: 45,
        }}
      >
        {" "}
        Type{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: "400",
          fontSize: 15,
          color: "rgba(14, 37, 124, 255)",
          marginTop: 22,
        }}
      >
        {" "}
        아이디{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito Sans",
            fontSize: 17,
            color: "rgba(0, 0, 0, 255)",
            marginStart: 10,
            marginTop: 18,
          }}
        >
          {" "}
          SampleID{" "}
        </Text>
        {/* <Path /> {Path is not supported. It can be exported as Svg} */}
        <View
          style={{
            width: 0,
            height: 23,
            backgroundColor: "#000000",
          }}
        />
      </View>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 366,
          height: 0,
          backgroundColor: "#000000",
        }}
      />
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: 12,
          color: "rgba(62, 63, 65, 255)",
          marginTop: 8,
        }}
      >
        {" "}
        도움말 텍스트{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontWeight: "bold",
          fontSize: 20,
          color: "rgba(255, 150, 155, 255)",
          marginTop: 45,
        }}
      >
        {" "}
        FILLED{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: "400",
          fontSize: 15,
          color: "rgba(14, 37, 124, 255)",
          marginTop: 22,
        }}
      >
        {" "}
        아이디{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontSize: 17,
          color: "rgba(0, 0, 0, 255)",
          marginStart: 10,
          marginTop: 18,
        }}
      >
        {" "}
        SampleID{" "}
      </Text>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 366,
          height: 0,
          backgroundColor: "#000000",
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontFamily: "Nunito Sans",
            fontWeight: "bold",
            fontSize: 20,
            color: "rgba(255, 150, 155, 255)",
            marginTop: 39,
          }}
        >
          {" "}
          ERROR{" "}
        </Text>
        <Text
          style={{
            fontFamily: "Noto Sans KR",
            fontSize: 14,
            color: "rgba(62, 63, 65, 255)",
            marginStart: 8,
            marginTop: 42,
          }}
        >
          {" "}
          (유저의 입력정보 제외하고 컬러변화){" "}
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontWeight: "400",
          fontSize: 15,
          color: "rgba(237, 0, 73, 255)",
          marginTop: 11,
        }}
      >
        {" "}
        아이디{" "}
      </Text>
      <Text
        style={{
          fontFamily: "Nunito Sans",
          fontSize: 17,
          color: "rgba(0, 0, 0, 255)",
          marginStart: 10,
          marginTop: 18,
        }}
      >
        {" "}
        SampleID{" "}
      </Text>

      {/* <Path /> {Path is not supported. It can be exported as Svg} */}
      <View
        style={{
          width: 366,
          height: 0,
          backgroundColor: "#000000",
        }}
      />
      <Text
        style={{
          fontFamily: "Noto Sans KR",
          fontSize: 12,
          color: "rgba(237, 0, 73, 255)",
          marginTop: 8,
        }}
      >
        {" "}
        도움말 텍스트{" "}
      </Text>
    </View>
  );
};
