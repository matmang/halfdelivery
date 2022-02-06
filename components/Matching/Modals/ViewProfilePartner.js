import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import BtmWarnningMessage from "../../BtmWarnningMessage";

export default ({ name, school, college, bank, accountnumber }) => {
  return (
    <View
      style={{
        alignItems: "flex-start",
        alignSelf: "center",
        shadowColor: "black",
        shadowOpacity: 0.16,
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowRadius: 6,
      }}
    >
      <View
        style={{
          paddingStart: 20.5,

          width: 364,
          height: 308,
          borderRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 255)",
        }}
      >
        <View
          style={{
            alignItems: "flex-end",
          }}
        >
          <Pressable
            onPress={() => {
              alert("모달창끄기");
            }}
          >
            <Image
              source={require("../../../assets/images/delete.png")}
              style={{
                width: 20,
                height: 20,
                marginRight: 12.5,
                marginTop: 8.8,
              }}
            />
          </Pressable>
        </View>

        <Text
          style={{
            marginStart: 0.5,
            marginTop: 14.7,
          }}
        >
          <Text
            style={{
              fontFamily: "noto-medium",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            최수민
          </Text>
          <Text
            style={{
              fontFamily: "noto-medium",
              fontSize: 20,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            {" "}
            님은
          </Text>
        </Text>

        <Text
          style={{
            marginStart: 0.5,
            marginTop: 4,
          }}
        >
          <Text
            style={{
              fontFamily: "noto-regular",
              fontSize: 14,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            한양대학교 ERICA 캠퍼스
          </Text>
          <Text
            style={{
              fontFamily: "noto-medium",
              fontSize: 14,
              color: "rgba(0, 0, 0, 255)",
            }}
          >
            {" "}
            공학대학
          </Text>
        </Text>

        <View
          style={{
            marginTop: 16,
            backgroundColor: "#5465AA",
            width: 324,
            height: 1.5,
          }}
        />
        <View
          style={{
            marginStart: 0.5,
            marginTop: 14.7,
            // backgroundColor: "lightgreen",
          }}
        >
          <Text
            style={{
              fontFamily: "noto-medium",
              fontSize: 14,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            계좌번호
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "noto-regular",
            fontSize: 14,
            color: "black",
            marginStart: 0.5,
            marginTop: 7,
          }}
        >
          · 국민은행{"   "}938002-00-341767
        </Text>

        <View
          style={{
            flexDirection: "row",
            // backgroundColor: "yellow",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Image
            source={require("../../../assets/images/right-arrow.png")}
            style={{ width: 10, height: 9 }}
          />
          <Text
            style={{
              fontFamily: "noto-regular",
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
            alignItems: "flex-end",
            marginTop: 48,
          }}
        >
          <BtmWarnningMessage />
        </View>
      </View>
    </View>
  );
};
