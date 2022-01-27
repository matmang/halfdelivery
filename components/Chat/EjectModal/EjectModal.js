import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Picker,
  ScrollView,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { Image as ReactImage } from "react-native";
import Svg, { Defs, Pattern, G } from "react-native-svg";
import { Path as SvgPath } from "react-native-svg";
import { Text as SvgText } from "react-native-svg";
import { Image as SvgImage } from "react-native-svg";

export default class EjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({
        type: "button",
        name: name,
        index: index,
        id: id,
        owner: owner,
      });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search("::") > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split("::").join("")] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({
          type: "textinput",
          name: name,
          value: value,
          index: index,
          id: id,
        });
      }
    });
  }

  render() {
    return (
      <View
        data-layer="6f86a147-87f9-4a3b-aebd-8a32a78f6422"
        style={styles.Root}
      >
        <View
          data-layer="9b07919a-02fb-415d-bece-e184ce641fc1"
          style={styles.EjectModal_x996}
        >
          <View
            data-layer="585a9638-2e31-4357-af68-5881ce3286d8"
            style={styles.EjectModal_x996_x1087}
          ></View>
          <Svg
            data-layer="efcdb29a-c2d8-4596-8796-33926eabd805"
            style={styles.EjectModal_x996_x2}
            preserveAspectRatio="none"
            viewBox="0 0 363.99951171875 54.9998779296875"
            fill="#F5F6F6"
          >
            <SvgPath d="M 9.999899864196777 54.99990081787109 C 4.477499961853027 54.99990081787109 0 50.52330017089844 0 45 L 0 0 L 363.9996032714844 0 L 363.9996032714844 45 C 363.9996032714844 50.52330017089844 359.5230102539062 54.99990081787109 353.9996948242188 54.99990081787109 L 9.999899864196777 54.99990081787109 Z" />
          </Svg>
          <Text
            data-layer="66f3c6fa-1d60-4e94-8775-ea7841e38eb9"
            style={styles.EjectModal_x996_xa94242f6}
          >
            * 하프딜리버리는 상품거래에 대한 통신판매중개자이며, 통신판매의
            당사자가 아닙니다. 따라서, 하프딜리버리는 상품거래에 대하여 책임을
            지지 않습니다.
          </Text>
          <View
            data-layer="a61e2afb-c01a-4618-9289-5fa79068d608"
            style={styles.EjectModal_x996_deleteb}
          >
            <Svg
              data-layer="53019179-ba5a-4ef4-ab8e-ba64263d7ab6"
              style={styles.EjectModal_x996_deleteb_icclose24px}
              preserveAspectRatio="none"
              viewBox="5 5 14 14"
              fill="rgba(14, 37, 124, 1)"
            >
              <SvgPath d="M 19 6.409999847412109 L 17.59000015258789 5 L 12 10.59000015258789 L 6.409999847412109 5 L 5 6.409999847412109 L 10.59000015258789 12 L 5 17.59000015258789 L 6.409999847412109 19 L 12 13.40999984741211 L 17.59000015258789 19 L 19 17.59000015258789 L 13.40999984741211 12 L 19 6.409999847412109 Z" />
            </Svg>
          </View>
        </View>
        <Svg
          data-layer="239bea5f-f912-4b25-b0d4-baa38662f7be"
          style={styles.EjectModal_x265}
          preserveAspectRatio="none"
          viewBox="0 -0.75 324 1.5"
          fill="transparent"
          // fill="black"
        >
          <SvgPath d="M 0 0 L 324 0" />
        </Svg>
        <Text
          data-layer="0208b91c-8fdc-4e87-b105-3d3dab1127c3"
          style={styles.EjectModal_xbe23963a}
        >
          계좌번호
        </Text>
        <Text
          data-layer="f1f524ee-b0ec-40e9-9b06-0d066a0197f6"
          style={styles.EjectModal_x049c3568}
        >
          윤동현
        </Text>
        <Text
          data-layer="c94da5eb-55f7-454e-b6a3-92231c983d89"
          style={styles.EjectModal_x60cdefbb}
        >
          님은{" "}
        </Text>
        <Text
          data-layer="f88f9a9b-c9ef-45c8-be6b-fa1949c75521"
          style={styles.EjectModal_xErica}
        >
          한양대학교 ERICA 캠퍼스{" "}
        </Text>
        <Text
          data-layer="a5748426-3dbc-4704-9da5-40fa8b356b2f"
          style={styles.EjectModal_x906009b3}
        >
          소프트웨어융합대학
        </Text>
        <Text
          data-layer="b6c5a5a9-1c79-4a42-ae3c-deccd93e1e12"
          style={styles.EjectModal_ibk}
        >
          IBK기업은행
        </Text>
        <Text
          data-layer="c24c59b8-9d88-4fe1-a56a-c79f2db5ffbf"
          style={styles.EjectModal_x000000000000}
        >
          0000-0000-0000
        </Text>
        <Svg
          data-layer="e4113033-6f42-4018-8e89-77467b6b6cab"
          style={styles.EjectModal_x330}
          preserveAspectRatio="none"
          viewBox="0 0 3 3"
          fill="rgba(0, 0, 0, 1)"
        >
          <SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" />
        </Svg>
        <Text
          data-layer="fc5491fa-43ec-4637-8309-77092efd24bb"
          style={styles.copy}
        >
          복사하기
        </Text>
        <View
          data-layer="ad384194-c9f7-44e1-9008-501a8697540e"
          style={styles.EjectModal_x1139}
        >
          <Text
            data-layer="9bd4b8cb-6852-4487-a950-6a359e573463"
            style={styles.test}
          >
            매칭이 시작되면 계좌 정보를 확인할 수 있습니다
          </Text>
          <View
            data-layer="63ed9d6b-ceb7-4e0e-87ab-eb57a55d7e38"
            style={styles.test386d4e50}
          >
            <Svg
              data-layer="a3310ec0-7056-493b-8362-f8afdb3ba6f3"
              style={styles.test386d4e50_icarrowback24px}
              preserveAspectRatio="none"
              viewBox="4 4 10 10"
              fill="rgba(173, 177, 192, 1)"
            >
              <SvgPath d="M 14.00000095367432 8.375 L 6.393750190734863 8.375 L 9.887499809265137 4.881249904632568 L 9 4 L 4 9 L 9 14.00000095367432 L 9.881250381469727 13.11875057220459 L 6.393750190734863 9.625000953674316 L 14.00000095367432 9.625000953674316 L 14.00000095367432 8.375 Z" />
            </Svg>
          </View>
        </View>
        <Pressable
          onPress={() => {
            alert("하하");
          }}
        >
          <View
            data-layer="a097ece9-0420-4d5a-b1d1-c9bb17d1cefb"
            style={styles.EjectModal_x320}
          ></View>
          <View
            data-layer="a8aaba0c-802c-440f-ad15-c45757ef4d1d"
            style={styles.EjectModal_x1483}
          >
            <Text
              data-layer="1b17dcb8-a754-4e75-8820-a70378c74be4"
              style={styles.eject}
            >
              내보내기
            </Text>
            <View
              data-layer="66c48770-7c4b-436a-af98-ba7c088bed92"
              style={styles.EjectModal_x1483_x1471}
            >
              <ReactImage
                data-layer="ef409ffa-b020-46b9-a7df-214ba59e7a14"
                source={require("./assets/x1470.png")}
                style={styles.EjectIcon}
              />
            </View>
          </View>
        </Pressable>
      </View>
    );
  }
}

EjectModal.propTypes = {};

EjectModal.defaultProps = {};

const styles = StyleSheet.create({
  Root: {
    opacity: 1,
    position: "relative",
    backgroundColor: "yellow",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 412,
    height: "auto",
    left: 0,
    top: 0,
    alignSelf: "center",
    // zIndex: 10,
  },
  EjectModal_x996: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 364,
    height: 385.98,
    left: 24,
    top: 220.42,
  },
  EjectModal_x996_x1087: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.1607843137254902,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 6,
    width: 364,
    height: 385.98,
    left: 0,
    top: 0,
  },
  EjectModal_x996_x2: {
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 364,
    height: 55,
    left: 0,
    top: 330.98,
  },
  EjectModal_x996_xa94242f6: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(62, 63, 65, 1)",
    fontSize: 10,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",
    textAlign: "left",
    lineHeight: 16,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 324,
    height: 34,
    left: 20,
    top: 339.97,
  },
  EjectModal_x996_deleteb: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 14,
    height: 14,
    left: 330,
    top: 16.14,
  },
  EjectModal_x996_deleteb_icclose24px: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 14,
    height: 14,
    left: 0,
    top: 0,
  },
  EjectModal_x265: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 324,
    height: 1.5,
    left: 44.5,
    top: 360.25,
  },
  EjectModal_xbe23963a: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(14, 37, 124, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 59,
    height: 25,
    left: 44,
    top: 379.5,
  },
  EjectModal_x049c3568: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(14, 37, 124, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 44,
    height: 25,
    left: 44,
    top: 268.5,
  },
  EjectModal_x60cdefbb: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 34,
    height: 25,
    left: 93,
    top: 268.5,
  },
  EjectModal_xErica: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 183,
    height: 25,
    left: 44,
    top: 297.5,
  },
  EjectModal_x906009b3: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 25,
    left: 44,
    top: 322.5,
  },
  EjectModal_ibk: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(18, 18, 18, 1)",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 25,
    left: 60,
    top: 405,
  },
  EjectModal_x000000000000: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(18, 18, 18, 1)",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily: "Nunito Sans",
    fontFamily: "nunito-regular",
    // marginBottom: 1,
    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 113,
    height: 27,
    left: 146,
    top: 406.5,
  },
  EjectModal_x330: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 3,
    height: 3,
    left: 45,
    top: 414,
  },
  copy: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(156, 156, 156, 1)",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 17,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 20,
    left: 316,
    top: 383.5,
    textDecorationLine: "underline",
  },
  EjectModal_x1139: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 242,
    height: 15,
    left: 60,
    top: 435,
  },
  test: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(173, 177, 192, 1)",
    fontSize: 12,
    fontWeight: "400",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "left",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 25,
    left: 14,
    top: -5,
  },
  test386d4e50: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 10,
    height: 10,
    left: 0,
    top: 1,
  },
  test386d4e50_icarrowback24px: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 10,
    height: 10,
    left: 0,
    top: 0,
  },
  EjectModal_x320: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(14, 37, 124, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 41,
    borderTopRightRadius: 41,
    borderBottomLeftRadius: 41,
    borderBottomRightRadius: 41,
    width: 324,
    height: 48,
    left: 44,
    top: 485,
  },
  EjectModal_x1483: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 81.36,
    height: 22.18,
    left: 164,
    top: 497.82,
  },
  eject: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "500",
    fontStyle: "normal",
    // fontFamily: "Noto Sans KR",
    fontFamily: "noto-regular",

    textAlign: "center",
    lineHeight: 22,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: "auto",
    height: 25,
    left: 23.36,
    top: -0.32,
  },
  EjectModal_x1483_x1471: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "transparent",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 13.36,
    height: 19.36,
    left: 0,
    top: 0,
  },
  EjectIcon: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    left: 0,
    top: 0,
    width: 13.36,
    height: 19.36,
  },
  EjectModal_x1483_x1471_x1470_x1861: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 14.86,
    height: 20.86,
    left: -0.75,
    top: -0.75,
  },
  EjectModal_x1483_x1471_x1470_x1862: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 6,
    height: 8.99,
    left: 7.98,
    top: 5,
  },
  EjectModal_x1483_x1471_x1470_x303: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 7.11,
    height: 1.5,
    left: 5.3,
    top: 8.8,
  },
  EjectModal_x1483_x1471_x1470_x2219: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: "rgba(0, 0, 0, 0)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0)",
    borderLeftWidth: 1,
    borderLeftColor: "rgba(0, 0, 0, 0)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 12.36,
    height: 18.36,
    left: -0.5,
    top: -0.5,
  },
});
