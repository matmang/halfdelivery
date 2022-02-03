import { View, Text, Pressable } from "react-native";
import React from "react";
import colors from "../colors";

const BtmWarnningMessage = ({ viewStyle, textStyle }) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#F5F6F6",
          justifyContent: "center",
          width: 364,
          height: 55,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        },
        viewStyle,
      ]}
    >
      <Text
        style={[
          {
            color: "rgba(62, 63, 65, 1)",
            fontSize: 10,
            fontStyle: "normal",
            fontFamily: "noto-regular",
            textAlign: "left",
            paddingHorizontal: 10,
          },
          textStyle,
        ]}
      >
        * 하프딜리버리는 상품거래에 대한 통신판매중개자이며, 통신판매의 당사자가
        아닙니다. 따라서, 하프딜리버리는 상품거래에 대하여 책임을 지지 않습니다.
      </Text>
    </View>
  );
};

export default BtmWarnningMessage;
