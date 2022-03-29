import { StyleSheet } from "react-native";
import React from "react";
import { width, height } from "../utils";

const KOREAN_ID = "8314af0c-1d8e-4112-869b-15689debb495";
const CHINESE_ID = "382f8bce-5182-4402-ab8d-564618a335fd";
const JAPANESE_ID = "f9db956b-5bcb-4ddf-ba96-2010ae7c7ee5";
const WESTERN_ID = "2634afad-acdb-4b9f-a5cc-feafbd9dbaa4";
const CAFE_ID = "b26daa27-f6c3-4243-a73e-f9d9352d06e7";

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
