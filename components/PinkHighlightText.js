import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import styled from "styled-components";
import colors from "../colors";
import { height, width } from "../utils";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

let FONT_SIZE = 17;
let STANDARD_HEIGHT = 17;

export default (props) => {
  if (props.textStyle.fontSize) {
    FONT_SIZE = props.textStyle.fontSize;
  }

  if (props.standardHeight) {
    STANDARD_HEIGHT = props.standardHeight;
  }

  return (
    <Root style={props.viewStyle}>
      <TextContainer>
        <Text_ style={[{ fontSize: FONT_SIZE }, props.textStyle]}>
          {props.children}
        </Text_>
      </TextContainer>
      <PinkHighlight />
    </Root>
  );
};

const Root = styled.View`
  width: auto;
  height: ${STANDARD_HEIGHT}px;
  opacity: 1;
`;

const TextContainer = styled.View`
  height: ${FONT_SIZE}px;
  z-index: 1;
`;

const Text_ = styled.Text`
  font-size: ${FONT_SIZE}px;
  color: #3e3f41;
  include-font-padding: false;
  text-align-vertical: center;
`;

const PinkHighlight = styled.View`
  width: 100%;
  height: ${STANDARD_HEIGHT * (50 / 100)}px;
  background-color: #ffe6e6;
  margin-top: ${-1 * STANDARD_HEIGHT * (50 / 100)}px;
  z-index: 0;
`;
