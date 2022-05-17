import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { width, height } from "../../utils";
import colors from "../../colors";
import RoundedBtn from "../RoundedBtn";

export default ({ price, style }) => {
  //   const isReady = true;
  const [isReady, setIsReady] = useState(false);

  return (
    <Root style={style}>
      <Left>
        <Text
          style={{
            fontFamily: "gothica1-regular",
            includeFontPadding: false,
            textAlignVertical: "center",
            fontSize: 14,
          }}
        >
          나의 주문금액
        </Text>
        <PriceBox>
          <Image
            source={require(".././../assets/images/won_large.png")}
            style={{
              width: width * 23,
              height: height * 16,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "nunito-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 24,
            }}
          >
            <Text style={{ color: colors.primaryBlue }}>{"   "}11,000</Text>
            <Text
              style={{
                fontFamily: "gothica1-regular",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 23,
              }}
            >
              {" "}
              원
            </Text>
          </Text>
        </PriceBox>
      </Left>
      <Right>
        <RoundedBtn
          btnStyle={[
            {
              width: width * 172,
              height: height * 40,
              backgroundColor: colors.primaryBlue,
              borderWidth: 0,
            },
            isReady && {
              shadowColor: "black",
              shadowOpacity: 0.16,
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowRadius: 6,
            },
          ]}
          textStyle={{
            fontFamily: "nunito-semibold",
            includeFontPadding: false,
            textAlignVertical: "center",
            fontSize: 17,
            color: "white",
          }}
          text={!isReady ? "Ready" : "Ready"}
          isPressed={isReady}
          onPress={() => {
            isReady ? setIsReady(false) : setIsReady(true);
          }}
        />
      </Right>
    </Root>
  );
};

const Root = styled.View`
  width: ${width * 413}px;
  height: ${height * 83}px;
  background-color: white;
  opacity: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Left = styled.View`
  flex: 1;
  /* background-color: red; */
  justify-content: center;
  align-items: flex-start;
  margin-left: ${width * 34}px;
`;

const PriceBox = styled.View`
  /* background-color: red; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Right = styled.View`
  flex: 1;
  /* background-color: blue; */
  justify-content: center;
  align-items: center;
  margin-right: ${width * 25}px;
`;
