import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";
import { width, height } from "../utils";

const StoreCategory = ({ category }) => {
  let CATEGORY_COLOR = "#e6edf3";

  switch (category) {
    case "한식":
      CATEGORY_COLOR = "#B7D596";
      break; //! break 꼭 쓰자. switch 문 쓸때는 수민아 ㅎㅎ
    case "중식":
      CATEGORY_COLOR = "#FAC3AA";
      break;
    case "일식":
      CATEGORY_COLOR = "#ACDDE7";
      break;
    case "양식":
      CATEGORY_COLOR = "#FEE4A7";
      break;
    case "카페":
      CATEGORY_COLOR = "#E9DCF8";
      break;
    default:
      CATEGORY_COLOR = "#E3004E";
      category = "ERR";
      break;
  }

  return (
    <Root
      style={{
        backgroundColor: CATEGORY_COLOR,
      }}
    >
      <Text
        style={{
          fontSize: 10,
          textAlign: "center",
          fontFamily: "gothic-medium",
        }}
        numberOfLines={1}
      >
        {category}
      </Text>
    </Root>
  );
};

const Root = styled.View`
  width: ${width * 39}px;
  height: ${height * 18}px;
  border-radius: 10px;
  /* background-color: #e6edf3; */
  justify-content: center;
  align-items: center;
`;

export default StoreCategory;
