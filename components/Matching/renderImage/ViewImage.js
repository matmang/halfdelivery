import { View, Text, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { width, height } from "../../../utils";
import * as ImagePicker from "expo-image-picker";
import ImageView from "react-native-image-viewing";
import colors from "../../../colors";

export default ({ images, index }) => {
  // const [image, setImage] = useState(null);
  const [visible, setIsVisible] = useState(false);
  // console.log("images", images);

  return (
    <Root>
      <Pressable
        onPress={() => {
          setIsVisible(true);
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: images[index].uri }}
          style={{
            width: width * 137,
            height: height * 197,
            borderRadius: 10,
          }}
        />
        <ImageView
          images={images}
          imageIndex={index}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </Pressable>
    </Root>
  );
};

const Root = styled.View`
  width: ${width * 140}px;
  height: ${height * 200}px;
  border-width: 1.5px;
  border-color: ${colors.primaryBlue};
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  margin-right: ${width * 10}px;
  opacity: 1;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
