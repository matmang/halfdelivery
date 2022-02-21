import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { width, height } from "../../utils";
import PickAndViewImage from "./renderImage/PickAndViewImage";
import colors from "../../colors";

export default ({ _isReady, imageUri, username, isHost, orderPrice }) => {
  const isReady = true;
  const [images, setImages] = useState([]);
  console.log("images", images);

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
                color: isReady ? colors.primaryBlue : colors.steelBlue2,
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
        {/* //- 이미지가 없을떄 (최초) */}
        {/* {!images.length && (
          <ImagesZone>
            <PickAndViewImage
              isReady={isReady}
              setImages={setImages}
              images={images}
              index={0}
            />
          </ImagesZone>
        )} */}

        {/* //- 이미지가 2개일때 */}
        {/* {!!images.length && images.length === 1 && (
          <ImagesZone>
            <PickAndViewImage
              isReady={isReady}
              setImages={setImages}
              images={images}
              index={0}
            />
            <PickAndViewImage
              isReady={isReady}
              setImages={setImages}
              images={images}
              index={1}
            />
          </ImagesZone>
        )} */}

        {/* //- 이미지가 2개일때 */}
        {/* {!!images.length && images.length === 2 && (
          <ImagesZone>
            <PickAndViewImage
              isReady={isReady}
              setImages={setImages}
              images={images}
              index={0}
            />
            <PickAndViewImage
              isReady={isReady}
              setImages={setImages}
              images={images}
              index={1}
            />
          </ImagesZone>
        )} */}

        <ImagesZone>
          <PickAndViewImage
            isReady={isReady}
            setImages={setImages}
            images={images}
            index={0}
          />
          <PickAndViewImage
            isReady={isReady}
            setImages={setImages}
            images={images}
            index={1}
          />
        </ImagesZone>

        {!!images.length && (
          <PicNumIndicator>
            <Image
              source={require("../../assets/images/pictures_10.png")}
              style={{ width: width * 9, height: height * 9 }}
            />
            <Text
              style={{
                fontFamily: "nunito-regular",
                color: "white",
                fontSize: 8,
                marginLeft: 3,
              }}
            >
              {images.length <= 2 ? images.length : "+"}
            </Text>
          </PicNumIndicator>
        )}
      </Mid>

      <Bottom isReady={isReady}>
        <View
          style={{
            flex: 3,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={
              isReady
                ? require("../../assets/images/won.png")
                : require("../../assets/images/won_dimmed.png")
            }
            style={{ width: width * 13, height: height * 13, marginLeft: 11 }}
          />
          <Text
            style={{
              fontFamily: "noto-regular",
              fontSize: 12,
              color: isReady ? "white" : colors.steelBlue2,
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
              color: isReady ? "white" : colors.steelBlue2,
              marginTop: 1,
            }}
          >
            {parseInt("20000").toLocaleString("ko-KR")}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: isReady ? "white" : colors.steelBlue2,
              fontFamily: "noto-regular",
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
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
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
  border-width: 1.5px;
  border-color: ${(props) => (props.isReady ? "#0e257c" : "#ADB1C0")};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
`;

const Mid = styled.View`
  flex: 0.52;
`;

const ImagesZone = styled.View`
  width: ${width * 174}px;
  height: ${height * 87}px;
  background: white;
  flex-direction: row;
  padding-left: 10px;
  /* justify-content: center; */
  align-items: center;
  opacity: 1;
`;

const Bottom = styled.View`
  flex: 0.17;
  width: ${width * 174}px;
  height: ${height * 31}px;
  background: ${(props) =>
    props.isReady ? colors.primaryBlue : colors.blueGray2};
  opacity: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
`;

const PicNumIndicator = styled.View`
  width: ${width * 32}px;
  height: ${height * 16}px;
  background-color: black;
  opacity: 0.8;
  border-radius: 8px;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: ${width * 128}px;
  margin-right: ${width * 16}px;
  margin-top: ${height * 60}px;
`;
