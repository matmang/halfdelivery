import { StyleSheet } from "react-native";
import React from "react";
import { width, height } from "../utils";

const KOREAN_ID = "9dcc616b-2c49-4247-9ddd-ce360d320848";
const CHINESE_ID = "d5a58fc2-7c09-4da2-9c08-3a0a2aea7481";
const JAPANESE_ID = "a6a63b4e-27a7-448a-9d4b-f1a21700b7f5";
const WESTERN_ID = "0deb571b-4d3f-4164-8e25-f44ba725fb77";
const CAFE_ID = "41294b0f-6d62-4693-8414-431cac70fca0";

//! react-native-dropdown-picker 패키지를 위한 styles
const collegePlaceholder = "테스트";
const PLACE_HOLDER = collegePlaceholder;
const collegeOpen = true;
const DROPDOWN_WIDTH = 3000;
const styles = StyleSheet.create({
  //? 안드로이드
  DROPDOWN_style_android: {
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: collegePlaceholder === PLACE_HOLDER ? "#ADB1C0" : "#0E257C",
  },

  DROPDOWN_dropDownContainerStyle_android: {
    width: DROPDOWN_WIDTH,
    borderTopWidth: 0,
    marginTop: height * 1,
    borderColor: "white",
    paddingTop: height * 8,
    paddingBottom: height * 8,
    elevation: 6, //! 안드로이드는 여기다가 쓰는게 맞음
  },

  DROPDOWN_textStyle_android: {
    color: collegePlaceholder === PLACE_HOLDER ? "#ADB1C0" : "black",
  },

  //
  //? iOS
  DROPDOWN_containerStyle_iOS: {
    width: DROPDOWN_WIDTH,
    marginLeft: 20,

    shadowColor: "black",
    shadowOpacity: collegeOpen ? 0.1 : 0,
    shadowOffset: {
      width: collegeOpen ? 3 : 0,
      height: collegeOpen ? 3 : 0,
    },
    shadowRadius: collegeOpen ? 6 : 0,
    elevation: collegeOpen ? 6 : 0,
    elevation: 6,
  },
});

export { KOREAN_ID, CHINESE_ID, JAPANESE_ID, WESTERN_ID, CAFE_ID, styles };
