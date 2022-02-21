import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { width, height } from "../../utils";
import ViewImage from "./renderImage/ViewImage";
import colors from "../../colors";

export default ({ _isReady, imageUri, username, myImages, orderPrice }) => {
  // const [images, setImages] = useState([]);
  // console.log("images", images);

  const images = [
    {
      uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
    },
    {
      uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
    },
    {
      uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
    },
  ];

  return (
    <Root
      contentContainerStyle={{
        justifyConent: "center",
        alignItems: "center",
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <ViewImage images={images} index={0} />
      <ViewImage images={images} index={1} />
      <ViewImage images={images} index={2} />
    </Root>
  );
};

const Root = styled.ScrollView`
  width: ${width * 364}px;
  height: ${height * 200}px;
  background: white;
  flex-direction: row;
  opacity: 1;
  margin-top: 100px;
  margin-left: ${width * 20}px;
`;
