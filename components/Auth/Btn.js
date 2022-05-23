import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import { height, width } from "../../utils";

const Button = styled.View`
  padding: ${height * 12.5}px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: ${width * 364}px;
  height: ${height * 50}px;
  background-color: ${(props) =>
    props.accent ? colors.primaryBlue : colors.lightGray};
  font-family: "nunito-semibold";
`;

const Text = styled.Text`
  color: ${(props) => (props.accent ? "#FFFFFF" : colors.mediumGray)};
  font-size: 17px;
  font-family: "gothic-medium";
`;

const Btn = ({ onPress, text, accent = false, textStyle }) => {
  //? !!! == not !!
  //? !! == undefined, "", 0 값을 false 로 강제 형변환 함
  //? accent type 이 boolean 이어야 하는데, string 으로 들어가서 생기는 warning message 해결을 위해 추가함
  setAccent(username && password && !IDerrorMessage && !!!PWerrorMessage);
  if (typeof accent !== "boolean") {
    accent = !!accent;
  }
  retrun(
    <TouchableOpacity onPress={onPress} disabled={!accent}>
      <Button accent={accent}>
        <Text accent={accent} style={textStyle}>
          {text}
        </Text>
      </Button>
    </TouchableOpacity>
  );
};

Btn.propTypes = {
  onPress: Proptypes.func.isRequired,
  text: Proptypes.string.isRequired,
  accent: Proptypes.bool,
  disabled: Proptypes.bool,
};

export default Btn;
