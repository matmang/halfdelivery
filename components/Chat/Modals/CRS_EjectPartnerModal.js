import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import colors from "../../../colors";

const Reason = ({ number, reasonText, selected, setSelected, setReason }) => {
  return (
    <View style={{ flexDirection: "row", marginTop: 20 }}>
      <Pressable
        onPress={() => {
          setSelected(number);
          setReason(reasonText);
        }}
      >
        <Image
          source={
            number === selected
              ? require("../../../assets/images/ChatRoomScreen/RadioButton_On.png")
              : require("../../../assets/images/ChatRoomScreen/RadioButton_Off.png")
          }
          style={{ width: 20, height: 20, marginLeft: 20 }}
        />
      </Pressable>
      <Text style={{ marginLeft: 10 }}>{reasonText}</Text>
    </View>
  );
};
export default ({ name }) => {
  const [selected, setSelected] = useState(null);
  const [reason, setReason] = useState(null);
  console.log(reason);
  return (
    <View
      style={{
        shadowColor: "black",
        alignSelf: "center",

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
          justifyContent: "flex-start",
          // alignItems: "center",
          // padding: 20,
          width: 364,
          height: 471.07,
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingTop: 12,
            paddingLeft: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "noto-regular",
              fontWeight: "400",
              fontSize: 20,
              color: "rgba(14, 37, 124, 255)",
            }}
          >
            {" "}
            홍길동{" "}
          </Text>
          <Text
            style={{
              marginStart: 3,
            }}
          >
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              님을 매칭에서{" "}
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              퇴장
            </Text>
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              시킵니다{" "}
            </Text>
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              marginStart: 0.5,
              marginTop: 14,
              backgroundColor: "rgba(84, 101, 170, 255)",
              width: 324,
              height: 1.5,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "noto-regular",
              fontWeight: "400",
              fontSize: 17,
              color: "rgba(0, 0, 0, 255)",
              marginTop: 21,
              paddingLeft: 20,
            }}
          >
            {" "}
            퇴장 사유{" "}
          </Text>
          <Reason
            number={0}
            reasonText={"주문금액을 입력하지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
          />
          <Reason
            number={1}
            reasonText={"주문금액이 알맞지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
          />
          <Reason
            number={2}
            reasonText={"주문 메뉴 정보를 첨부하지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
          />
          <Reason
            number={3}
            reasonText={"주문 메뉴 정보가 알맞지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
          />
          <Reason
            number={4}
            reasonText={"준비완료를 진행하지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 20,
          }}
        >
          <Pressable
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 324,
              height: 48,
              borderRadius: 24,
              borderWidth: 2,
              borderColor:
                reason === null ? "rgba(173, 177, 192, 255)" : colors.mainBlue,
            }}
          >
            <Text
              style={{
                fontFamily: "noto-regular",
                fontWeight: "400",
                fontSize: 17,
                textAlign: "center",
                color:
                  reason === null
                    ? "rgba(173, 177, 192, 255)"
                    : colors.mainBlue,
              }}
            >
              {" "}
              내보내기{" "}
            </Text>
          </Pressable>

          <View
            style={{
              backgroundColor: "#F5F6F6",
              justifyContent: "center",
              width: 364,
              height: 55,
              marginTop: 16,
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <Text
              style={{
                color: "rgba(62, 63, 65, 1)",
                fontSize: 10,
                fontStyle: "normal",
                fontFamily: "noto-regular",
                textAlign: "left",
                paddingHorizontal: 10,
              }}
            >
              * 하프딜리버리는 상품거래에 대한 통신판매중개자이며, 통신판매의
              당사자가 아닙니다. 따라서, 하프딜리버리는 상품거래에 대하여 책임을
              지지 않습니다.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
