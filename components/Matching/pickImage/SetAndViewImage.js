import { View, Text, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { width, height } from "../../../utils";
import * as ImagePicker from "expo-image-picker";
import ImageView from "react-native-image-viewing";
import colors from "../../../colors";

export default ({ isReady, images, setImages, index }) => {
  const [image, setImage] = useState(null);
  const [visible, setIsVisible] = useState(false);
  console.log("images", images);

  const pickImage = async (setIsModal) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    // console.log("ImagePermission status", status);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log("result", result);

    if (!result.cancelled) {
      setImage(result.uri);
      setImages([...images, { uri: result.uri }]);
    }
  };

  // console.log("image", image);

  return (
    <Root isReady={isReady}>
      <Pressable
        onPress={() => {
          !image ? pickImage() : setIsVisible(true);
        }}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!image ? (
          <Image
            source={require("../../../assets/images/select_image.png")}
            style={{
              width: width * 70,
              height: height * 70,
            }}
          />
        ) : (
          <Image
            source={{ uri: image }}
            style={{
              width: width * 72,
              height: height * 72,
              borderRadius: 10,
            }}
          />
        )}

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
  width: ${width * 75}px;
  height: ${height * 75}px;
  border-width: 1.5px;
  border-color: ${(props) =>
    props.isReady ? colors.primaryBlue : colors.steelBlue2};
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  margin: 2px;
  opacity: 1;
  justify-content: center;
  align-items: center;
`;
