import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { width, height } from "../../utils";
import RoundedBtn from "../RoundedBtn";
import colors from "../../colors";

export default ({ style }) => {
  return (
    <Root style={style}>
      <Top>
        <TopLeft>
          <ProfileImg
            source={require("../../assets/images/default_prf_img_dimmed.png")}
          />
        </TopLeft>
        <TopRight>
          <Text style={{ fontSize: 12 }}>
            <Text
              style={{
                fontFamily: "nunito-regular",
                includeFontPadding: false,
                textAlignVertical: "center",
                color: colors.steelBlue2,
              }}
            >
              Partner
            </Text>
          </Text>
          <EmptyStatus>
            <Text
              style={{
                color: colors.steelBlue2,
                fontFamily: "gothica1-medium",
                includeFontPadding: false,
                textAlignVertical: "center",

                fontSize: 10,
              }}
            >
              ˙˙˙
            </Text>
          </EmptyStatus>
        </TopRight>
      </Top>

      <Mid>
        <ImagesZoneView
          style={{
            justifyConent: "center",
            alignItems: "center",
          }}
        >
          <ImageBox>
            <View
              onPress={() => {
                !image ? pickImage() : setIsVisible(true);
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/images/select_image.png")}
                style={{
                  width: width * 70,
                  height: height * 70,
                }}
              />
            </View>
          </ImageBox>
        </ImagesZoneView>
      </Mid>

      <Bottom>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/won_dimmed.png")}
            style={{ width: width * 13, height: height * 13, marginLeft: 11 }}
          />
          <Text
            style={{
              fontFamily: "gothica1-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 12,
              color: colors.steelBlue2,
            }}
          >
            {"   "}주문금액
          </Text>
        </View>

        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "nunito-semibold",
              includeFontPadding: false,
              textAlignVertical: "center",
              color: colors.steelBlue2,
              marginTop: 1,
            }}
          ></Text>
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: colors.steelBlue2,
              fontFamily: "gothica1-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
            }}
          >
            {"  "}원
          </Text>
        </View>
      </Bottom>
    </Root>
  );
};

const Root = styled.View`
  width: ${width * 174}px;
  height: ${height * 182}px;
  background-color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.05);
  elevation: 6;
  border-radius: 10px;
  opacity: 1;

  align-items: center;
`;

const Top = styled.View`
  flex: 0.31;
  flex-direction: row;
`;

const TopLeft = styled.View`
  flex: 0.28;
  justify-content: center;
`;

const ProfileImg = styled.Image`
  height: ${height * 38}px;
  width: ${width * 38}px;
  border-radius: 38px;
  /* border-width: 1.5px;
  border-color: #0e257c; */
  margin-left: 10px;
`;

const TopRight = styled.View`
  flex: 0.72;
  padding-left: 10px;
  justify-content: center;
`;

// const Name = styled.Text``;

const EmptyStatus = styled.View`
  width: ${width * 76}px;
  height: ${height * 19}px;
  /* border-width: 1.5;
  border-color: ${colors.whiteGray}; */
  background-color: ${colors.whiteGray};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
`;

const Mid = styled.View`
  flex: 0.52;
`;

const ImagesZoneView = styled.View`
  width: ${width * 174}px;
  height: ${height * 87}px;
  background: ${colors.whiteGray};
  flex-direction: row;
  padding-left: 10px;
  /* justify-content: center;
  align-items: center; */
  opacity: 1;
`;

// const ImageBox = styled.View`
//   width: ${width * 75}px;
//   height: ${height * 75}px;
//   border-width: 1.5;
//   border-color: #0e257c;
//   border-radius: 10px;
//   box-shadow: 3px 3px 6px #00000029;
//   margin: 2px;
//   opacity: 1;
// `;

const Bottom = styled.View`
  flex: 0.17;
  width: ${width * 174}px;
  height: ${height * 31}px;
  background: white;
  opacity: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const ImageBox = styled.View`
  width: ${width * 73}px;
  height: ${height * 73}px;
  border-width: 1.5px;
  border-color: ${colors.coolGray};
  border-radius: 10px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.05);
  margin: 2px;
  opacity: 1;
  justify-content: center;
  align-items: center;
`;
