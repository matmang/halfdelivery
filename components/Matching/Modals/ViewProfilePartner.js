import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import DisclaimerFooter from "../../DisclaimerFooter";
import { width, height } from "../../../utils";
import colors from "../../../colors";
import styled from "styled-components";

const ViewProfilePartner = ({ name, school, college, bank, accountnumber }) => {
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
          paddingStart: width * 20,
          width: width * 364,
          height: height * 366.92,
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
            marginTop: height * height * 16.6,
            marginBottom: height * 399.4,
          }}
        >
          <Image
            source={require("../../../assets/images/real-delete.png")}
            style={{
              width: width * width * 14,
              height: height * height * 14,
            }}
          />
        </Pressable>

        <Profile>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: "gothic-medium",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 17,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              최**
            </Text>
            <Text
              style={{
                fontFamily: "gothic-medium",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 17,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              {" "}
              님은
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
                fontFamily: "gothic-regular",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 14,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              한양대학교 ERICA 캠퍼스
            </Text>
            <Text
              style={{
                fontFamily: "gothic-medium",
                includeFontPadding: false,
                textAlignVertical: "center",
                fontSize: 14,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              {" "}
              공학대학
            </Text>
          </View>
        </Profile>

        <View
          style={{
            marginTop: height * 16,
            backgroundColor: colors.primaryBlue,
            width: width * 324,
            height: height * 1.5,
          }}
        />

        <View
          style={{
            marginStart: 0.5,
            marginTop: height * 14.7,
            // backgroundColor: "lightgreen",
          }}
        >
          <Text
            style={{
              fontFamily: "gothic-medium",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 14,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            계좌번호
          </Text>

          <Text
            style={{
              fontFamily: "gothic-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 14,
              color: "black",
              marginStart: 0.5,
              marginTop: height * 7,
            }}
          >
            ˙{"  "}국민은행{"   "}0000-0000-0000
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "yellow",
            alignItems: "center",
            marginTop: height * 7,
          }}
        >
          <Image
            source={require("../../../assets/images/right-arrow.png")}
            style={{ width: width * 10, height: height * 9 }}
          />

          <Text
            style={{
              fontFamily: "gothic-regular",
              includeFontPadding: false,
              textAlignVertical: "center",
              fontSize: 12,
              color: "#ADB1C0",
            }}
          >
            {"  "}
            매칭이 시작되면 계좌 정보를 확인할 수 있습니다{" "}
          </Text>
        </View>

        <View
          style={{
            alignSelf: "center",
            marginTop: height * 40,
          }}
        >
          <Text>차단하기 | 신고하기 | 내보내기</Text>
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginTop: height * 48,
          }}
        >
          <DisclaimerFooter />
        </View>
      </View>
    </View>
  );
};

const Profile = styled.View`
  /* flex-direction: row; */
  margin-top: ${height * 52}px;
  background-color: aliceblue;
`;
// marginLeft: width * 20,
// marginTop: height * 44,
// marginStart: 0.5,
// marginTop: height * 52,

export default ViewProfilePartner;
