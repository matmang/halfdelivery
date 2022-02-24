import React from "react";
import { Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { ExpoImageManipulator } from "react-native-expo-image-cropper";

export default class TEST_react_native_expo_image_cropper extends React.Component {
  state = {
    showModal: false,
    uri: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
  };
  onToggleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };
  render() {
    const { uri, showModal } = this.state;
    const { width, height } = Dimensions.get("window");
    return (
      <ImageBackground
        resizeMode="contain"
        style={{
          justifyContent: "center",
          padding: 20,
          alignItems: "center",
          height,
          width,
          backgroundColor: "black",
        }}
        source={{ uri }}
      >
        <TouchableOpacity
          style={{ backgroundColor: "red", width: 100, height: 100 }}
          title="Open Image Editor"
          onPress={() => this.setState({ showModal: true })}
        />
        <ExpoImageManipulator
          photo={{ uri }}
          isVisible={showModal}
          onPictureChoosed={(data) => {
            this.setState({ uri: data.uri });
          }}
          onToggleModal={() => this.setState({ showModal: !showModal })}
          saveOptions={{
            compress: 1,
            format: "png",
            base64: true,
          }}
        />
      </ImageBackground>
    );
  }
}
