import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import colors from "../colors";
import styled from "styled-components";
import { width, height } from "../utils";

export default ({ time, simple, style }) => {
  if (simple === undefined) {
    simple = false;
  }

  if (time === undefined) {
    time = -1;
  }

  return (
    <Root simple={simple} style={style}>
      <Image
        source={require("../assets/images/timer.png")}
        style={{
          width: width * 13.63,
          height: height * 13.63,
          marginTop: height * 1,
        }}
      />
      {simple ? (
        <Text
          style={{
            fontFamily: "noto-regular",
            includeFontPadding: false,
            textAlignVertical: "center",
            fontSize: 11,
            color: colors.oxfordGray,
          }}
        >
          <Text
            style={{
              fontFamily: "nunito-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 12,
              color: colors.oxfordGray,
            }}
          >
            {" "}
            10
          </Text>
          분
        </Text>
      ) : (
        <Text
          style={{
            fontFamily: "noto-regular",
            includeFontPadding: false,
            textAlignVertical: "center",
            fontSize: 11,
            color: colors.oxfordGray,
          }}
        >
          {"  "}
          남은 시간{" "}
          <Text
            style={{
              fontFamily: "nunito-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 12,
              color: colors.oxfordGray,
            }}
          >
            {time}
          </Text>
          분
        </Text>
      )}
    </Root>
  );
};

const Root = styled.View`
  width: ${(props) => (props.simple ? width * 44 : width * 100)}px;
  height: ${height * 18}px;
  /* background-color: coral; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border-width: 1px; */
  /* background-color: orange; */
`;
