import React from "react";
import { Image, Pressable, TouchableOpacity } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Button = styled.View`
  padding: ${height * 12.5}px 0px;
  flex-direction: row;
  align-items: center;
  border-radius: 30px;
  width: ${width * 289}px;
  height: ${height * 56}px;
  elevation: 12;
  background-color: white;
`;

const Text = styled.Text`
  color: ${colors.primaryBlue};
  margin-left: ${width * 160}px;
  font-size: 17px;
  font-family: "noto-medium";
`;

const NextCircle = styled.View`
  height: ${height * 40};
  width: ${width * 40};
  align-items: center;
  justify-content: center;
  margin-left: ${width * 37}px;
  border-radius: 30px;
  background-color: ${colors.primaryBlue};
`;

const LoginBtn = ({ onPress, text, textStyle }) => (
  <TouchableOpacity onPress={onPress}>
    <Button>
      <Text style={textStyle}>{text}</Text>
      <NextCircle>
        <Image
          source={require("../../assets/images/right-arrow-accent.png")}
          style={{
            width: width * 18.29,
            height: height * 15.75,
            resizeMode: "contain",
          }}
        />
      </NextCircle>
    </Button>
  </TouchableOpacity>
);

LoginBtn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
};

export default LoginBtn;
