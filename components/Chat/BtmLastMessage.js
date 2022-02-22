import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/core";
import styled from "styled-components";
import colors from "../../colors";
import { width, height } from "../../utils";

export default ({ isMaster, username, message }) => {
  const user = {
    imageUri: "",
  };

  return (
    <Root
      onPress={() => {
        alert("아래로 이동");
      }}
    >
      <ProfileView>
        <ProfileImg
          source={
            user.imageUri
              ? { uri: user.imageUri }
              : require("../../assets/images/default_prf_img.png")
          }
          isMaster={isMaster}
        />
        <ProfileInfo>
          <Nunito11left>{isMaster ? "Master" : "Partner"}</Nunito11left>
          <Noto11left>{username}</Noto11left>
        </ProfileInfo>
      </ProfileView>

      <Noto13left
        style={{ marginLeft: width * 11, maxWidth: width * 275 }}
        numberOfLines={1}
      >
        {message}
      </Noto13left>
      <Entypo
        name="chevron-thin-down"
        size={14}
        color={colors.primaryBlue}
        style={{
          marginLeft: "auto",
          marginRight: width * 8,
          //   backgroundColor: "red",
        }}
      />
    </Root>
  );
};

const Root = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: white;
  width: ${width * 392}px;
  height: ${height * 44}px;
  border-radius: 10px; ;
`;

const ProfileView = styled.View`
  flex-direction: row;
  width: ${width * 72}px;
  height: ${height * 38}px;
  margin-left: ${width * 8}px;
  align-items: center;
`;

const ProfileImg = styled.Image`
  width: ${width * 28}px;
  height: ${height * 28}px;
  border-radius: 28px;
  border-width: ${(props) => (props.isMaster ? "1.5px" : "0px")};
  border-color: ${colors.primaryBlue};
`;

const ProfileInfo = styled.View`
  width: auto;
  height: ${height * 28}px;
  margin-left: ${width * 8}px;
  justify-content: center;
`;

const Noto13left = styled.Text`
  font-size: ${width * 13}px;
  font-family: "noto-regular";
  text-align: left;
`;

const Noto11left = styled.Text`
  font-size: ${width * 11}px;
  font-family: "noto-regular";
  text-align: left;
`;

const Nunito11left = styled(Noto11left)`
  font-family: "nunito-regular";
  text-align: left;
`;
