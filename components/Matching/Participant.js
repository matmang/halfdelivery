import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";
import { width, height } from "../../utils";
import RoundedBtn from "../RoundedBtn";

export default ({ _isReady }) => {
  const isReady = true;

  return (
    <Root>
      <Top>
        <TopLeft>
          <ProfileImg
            source={
              {
                // uri: user.imageUri,
              }
            }
          />
        </TopLeft>
        <TopRight>
          <Text style={{ fontSize: 12 }}>
            <Text style={{ fontFamily: "nunito-regular" }}>Master</Text>
            <Text style={{ fontFamily: "noto-regular" }}>{"   "}윤**</Text>
          </Text>
          <Status isReady={isReady}>
            <Text
              style={{
                color: isReady ? "#0e257c" : "#ADB1C0",
                fontFamily: "noto-medium",
                fontSize: 10,
              }}
            >
              {isReady ? "준비완료" : "준비중"}
            </Text>
          </Status>
        </TopRight>
      </Top>
      <Mid>
        <ImagesZone>
          <ImageBox />
          <ImageBox />
        </ImagesZone>
      </Mid>
      <Bottom>
        <Text style={{ fontSize: 12, color: "white" }}>
          <Text>₩</Text>
          <Text style={{ fontFamily: "noto-regular" }}>{"   "}주문금액</Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "nunito-semibold",
            }}
          >
            {"    "} {"14000".toLocaleString("ko-KR")}
          </Text>
          <Text style={{ fontFamily: "noto-regular" }}>{"  "}원</Text>
        </Text>
      </Bottom>
    </Root>
  );
};

const Root = styled.View`
  /* background: var(--unnamed-color-ffffff) 0% 0% no-repeat ;
  background: #ffffff 0% 0% no-repeat ; */
  width: ${width * 174}px;
  height: ${height * 182}px;
  background-color: white;
  box-shadow: 3px 3px 6px #00000029;
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
  border-width: 1.5px;
  border-color: #0e257c;
  margin-left: 10px;
`;

const TopRight = styled.View`
  flex: 0.72;
  padding-left: 10px;
  justify-content: center;
`;

// const Name = styled.Text``;

const Status = styled.View`
  width: ${width * 76}px;
  height: ${height * 19}px;
  border-width: 1.5;
  border-color: ${(props) => (props.isReady ? "#0e257c" : "#ADB1C0")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Mid = styled.View`
  flex: 0.52;
`;

const ImagesZone = styled.View`
  width: ${width * 174}px;
  height: ${height * 87}px;
  background: #f5f6f6;
  flex-direction: row;
  justify-content: center;
  opacity: 1;
`;

const ImageBox = styled.View`
  width: ${width * 75}px;
  height: ${height * 75}px;
  border-width: 1.5;
  border-color: #0e257c;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #00000029;
  margin: 2px;
  opacity: 1;
`;

const Bottom = styled.View`
  flex: 0.17;
  width: ${width * 174}px;
  height: ${height * 31}px;
  background: #0e257c 0% 0% no-repeat;
  opacity: 1;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
