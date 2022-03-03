import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import DisclaimerFooter from "../../DisclaimerFooter";
import { width, height } from "../../../utils";
import colors from "../../../colors";
import styled from "styled-components";
import PlatformIcon from "../../PlatformIcon";
import Timer from "../../Timer";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../../assets/constants";
import logos from "../../../images";
import MyOrderImages from "../MyOrderImages";
import RoundedBtn from "../../RoundedBtn";

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

export default ({ name, school, college, bank, accountnumber }) => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        alignSelf: "center",
        shadowColor: "black",
        shadowOpacity: 0.16,
        shadowOffset: {
          width: width * 3,
          height: height * 3,
        },
        shadowRadius: 6,
      }}
    >
      <View
        style={{
          paddingLeft: width * 20,
          width: width * 364,
          height: height * 714,
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 255)",
          elevation: 6,
        }}
      >
        <Pressable
          onPress={() => {
            alert("모달창끄기");
          }}
          style={{
            position: "absolute",
            marginRight: width * 20,
            marginLeft: width * 330,
            marginTop: height * 16.6,
            marginBottom: height * 399.4,
          }}
        >
          <Image
            source={require("../../../assets/images/real-delete.png")}
            style={{
              width: width * 14,
              height: height * 14,
            }}
          />
        </Pressable>

        <Header>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "noto-medium",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 17,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              현재 정보로 매칭이 시작됩니다.
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: height * 2,
            }}
          >
            <Text
              style={{
                fontFamily: "noto-regular",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 14,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              입력된 주문 정보가 일치하는지 확인해주세요
            </Text>
          </View>
        </Header>

        <MatchingInfo>
          <Text
            style={{
              fontFamily: "noto-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 12,
              color: "#3E3F41",
            }}
          >
            <View
              style={{
                marginBottom: height * 1,
              }}
            >
              <Image
                source={require("../../../assets/images/right-arrow-deepgrey.png")}
                style={{
                  width: width * 10,
                  height: height * 9.37,
                }}
              />
            </View>
            {/* {매칭타입 === 최수주문금액 ? "  최소주문금액 매칭" : "  배달비 매칭"} */}
            {"  "}
            최소주문금액 매칭
          </Text>

          <MatInfoRoot>
            <InfoRoot>
              <Header2>
                <PlatformIcon platfrom="요기요" />
                <Noto14medium style={{ marginLeft: width * 8 }}>
                  {/* { 매장이름 } */}
                  브라운돈까스 안산한양대점
                </Noto14medium>
              </Header2>

              <View
                style={{
                  marginTop: height * 7,
                  backgroundColor: "#C3CDD5",
                  width: width * 291.34,
                  height: height * 1.5,
                  alignSelf: "center",
                  marginLeft: -20,
                }}
              />

              <InfoBox>
                <Top>
                  <TopLeft>
                    <Noto12left style={{ flex: 4 }}>최소주문금액</Noto12left>
                    <Nunito12right
                      style={{
                        flex: 0.2,
                        color: colors.primaryBlue,
                        minWidth: 46 * width,
                        marginTop: height * 2,
                      }}
                    >
                      {parseInt(11000).toLocaleString("ko-KR")}
                    </Nunito12right>
                    <Noto12left style={{ flex: 1 }}>{"  "}원</Noto12left>
                  </TopLeft>

                  <TopRight>
                    <Noto12left style={{ flex: 4 }}>1인배달비</Noto12left>
                    <Nunito12right
                      style={{
                        flex: 0.2,
                        minWidth: 46 * width,
                        marginTop: height * 2,
                        color: colors.primaryBlue,
                      }}
                    >
                      {parseInt(11000).toLocaleString("ko-KR")}
                    </Nunito12right>
                    <Noto12left
                      style={{
                        flex: 1,
                      }}
                    >
                      {"  "}원
                    </Noto12left>
                  </TopRight>
                </Top>

                <Btm>
                  <BtmLeft>
                    <Noto12left style={{ flex: 4 }}>매칭주문금액</Noto12left>
                    <Nunito12right
                      style={{
                        flex: 0.2,
                        minWidth: 46 * width,
                        marginTop: height * 2,
                        color: colors.primaryBlue,
                      }}
                    >
                      {parseInt(11000).toLocaleString("ko-KR")}
                    </Nunito12right>
                    <Noto12left style={{ flex: 1 }}>{"  "}원</Noto12left>
                  </BtmLeft>

                  <BtmRight>
                    <Noto12left style={{ flex: 3 }}>매칭 완료 인원</Noto12left>
                    <Nunito12right
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        marginTop: height * 2,
                        color: colors.primaryBlue,
                      }}
                    >
                      2
                    </Nunito12right>
                    <Noto12left
                      style={{
                        flex: 0.6,
                      }}
                    >
                      {"  "}명
                    </Noto12left>
                  </BtmRight>
                </Btm>
              </InfoBox>
            </InfoRoot>
          </MatInfoRoot>
        </MatchingInfo>

        <MyOrderInfo>
          <Text
            style={{
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 14,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            나의 주문정보
          </Text>
          <MyOrderImages />
        </MyOrderInfo>

        <MyOrderPrice>
          <Text
            style={{
              fontFamily: "noto-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 14,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            나의 주문금액
          </Text>
          <Text>￦ 11,000원</Text>
        </MyOrderPrice>

        <RoundedBtn
          onPress={() => {
            alert("매칭시작 화면으로 이동");
          }}
          btnStyle={{
            borderColor: colors.primaryBlue,
            backgroundColor: colors.primaryBlue,
            marginTop: height * 36.2,
          }}
          textStyle={{ color: "white" }}
          text="매칭 시작"
        />

        <DisclaimerFooter
          viewStyle={{
            marginLeft: width * -20,
            marginBottom: 0,
            marginTop: "auto",
          }}
        />
      </View>
    </View>
  );
};

const Header = styled.View`
  /* flex-direction: row; */
  margin-top: ${height * 52}px;
  /* height: ${height * 90}px; */
  /* background-color: aliceblue; */
`;

const MatchingInfo = styled.View`
  /* flex-direction: row; */
  margin-top: ${height * 16}px;
  /* height: ${height * 90}px; */
  /* background-color: yellowgreen; */
`;

const MyOrderInfo = styled.View`
  /* flex-direction: row; */
  margin-top: ${height * 32.4}px;
  /* height: ${height * 90}px; */
  /* background-color: lime; */
`;

const MyOrderPrice = styled.View`
  margin-top: ${height * 28}px;
  flex-direction: row;
  align-items: center;
  background-color: lightyellow;
`;

const MatInfoRoot = styled.View`
  /* background-color: grey; */
  flex-direction: row;
  align-items: center;
  width: ${width * 324}px;
  height: ${height * 101.59}px;
  background-color: white;
  border-radius: 10px;
  border-width: 1.5px;
  border-color: ${colors.primaryBlue};
  /* margin-bottom: 100px; */
  padding-left: 16px;
  margin-top: ${height * 8}px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  elevation: 6;
`;

const Header2 = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: ${height * 14}px;
`;

const InfoRoot = styled.View`
  /* background-color: grey; */
  flex: 1;
`;

const InfoBox = styled.View`
  /* background-color: white; */
  flex: 3;
`;

const Top = styled.View`
  flex-direction: row;
  /* flex: 1; */
  height: ${height * 20}px;
  margin-top: ${height * 8}px;
`;

const TopLeft = styled.View`
  flex: 1;
  /* background-color: yellow; */
  flex-direction: row;
  align-items: center;
  /* margin-left: ${width * 2}px; */
  /* margin-right: ${width * 10}px; */
  /* justify-content: center; */
`;

const TopRight = styled.View`
  flex: 1;
  /* background-color: orange; */
  flex-direction: row;
  align-items: center;
  margin-left: ${width * 18}px;
  margin-right: ${width * 16}px;
  /* justify-content: center; */
`;

const Btm = styled(Top)`
  margin-top: 0px;
`;

const BtmLeft = styled(TopLeft)`
  /* background-color: cyan; */
`;

const BtmRight = styled(TopRight)`
  /* background-color: blue; */
`;

const Noto14medium = styled.Text`
  font-size: ${width * 14}px;
  /* font-size: 12px; */
  font-family: "noto-medium";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Noto12left = styled.Text`
  font-size: ${width * 12}px;
  /* font-size: 12px; */
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: left;
`;

const Nunito12right = styled(Noto12left)`
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;

// marginLeft: width * 20,
// marginTop: height * 44,
// marginStart: 0.5,
// marginTop: height * 52,
