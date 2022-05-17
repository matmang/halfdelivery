import { View, Text, Pressable } from "react-native";
import React from "react";
import colors from "../colors";
import { width, height } from "../utils";

export default ({ viewStyle, textStyle }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.whiteGray,
          // backgroundColor: "red",
          justifyContent: "center",
          width: width * 364,
          height: height * 42,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
        viewStyle,
      ]}
    >
      <Text
        style={[
          {
            color: colors.darkGray,
            fontSize: width * 10,
            fontFamily: "gothica1-regular",
            includeFontPadding: false,
            textAlignVertical: "center",
            textAlign: "left",
            marginHorizontal: width * 20,
          },
          textStyle,
        ]}
      >
        * 하프딜리버리는 상품거래에 대한 통신판매중개자이며, 통신판매의 당사자가
      </Text>
      <Text
        style={[
          {
            color: "rgba(62, 63, 65, 1)",
            fontSize: width * 10,
            fontFamily: "gothica1-regular",
            includeFontPadding: false,
            textAlignVertical: "center",
            textAlign: "left",
            marginHorizontal: width * 20,
            marginTop: height * 2,
          },
          textStyle,
        ]}
      >
        아닙니다. 따라서, 하프딜리버리는 상품거래에 대하여 책임을 지지 않습니다.
      </Text>
    </View>
  );
};
