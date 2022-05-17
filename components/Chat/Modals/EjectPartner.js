import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import colors from "../../../colors";
import RoundedBtn from "../../RoundedBtn";
import DisclaimerFooter from "../../DisclaimerFooter";
import CheckBox from "../../CheckBox";

export default ({ name }) => {
  const [reason1, setReason1] = useState(null);
  const [reason2, setReason2] = useState(null);
  const [reason3, setReason3] = useState(null);
  const [reason4, setReason4] = useState(null);
  const [reason5, setReason5] = useState(null);

  const reasons = { reason1, reason2, reason3, reason4, reason5 };
  const isEmpty = Object.values(reasons).every((x) => x === null);
  // console.log("reasons", reasons);
  // console.log("isEmpty", isEmpty);

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
              fontFamily: "gothica1-regular",
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
                fontFamily: "gothica1-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(0, 0, 0, 255)",
              }}
            >
              님을 매칭에서{" "}
            </Text>
            <Text
              style={{
                fontFamily: "gothica1-regular",
                fontWeight: "400",
                fontSize: 20,
                color: "rgba(14, 37, 124, 255)",
              }}
            >
              퇴장
            </Text>
            <Text
              style={{
                fontFamily: "gothica1-regular",
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
              marginTop: 16,
              backgroundColor: "rgba(84, 101, 170, 255)",
              width: 324,
              height: 1.5,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              fontFamily: "gothica1-regular",
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
          <CheckBox
            text={"주문금액을 입력하지 않음"}
            viewStyle={{ marginTop: 14 }}
            parentSetState={setReason1}
          />
          <CheckBox
            text={"주문금액이 알맞지 않음"}
            viewStyle={{ marginTop: 18 }}
            parentSetState={setReason2}
          />
          <CheckBox
            text={"주문 메뉴 정보를 첨부하지 않음"}
            viewStyle={{ marginTop: 18 }}
            parentSetState={setReason3}
          />
          <CheckBox
            text={"주문 메뉴 정보가 알맞지 않음"}
            viewStyle={{ marginTop: 18 }}
            parentSetState={setReason4}
          />
          <CheckBox
            text={"준비완료를 진행하지 않음"}
            viewStyle={{ marginTop: 18 }}
            parentSetState={setReason5}
          />

          {/* <Reason
            number={0}
            reasonText={"주문금액을 입력하지 않음"}
            selected={selected}
            setSelected={setSelected}
            setReason={setReason}
            marginTop={14}
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
          /> */}
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            // marginTop: 20,
          }}
        >
          <RoundedBtn
            text={"내보내기"}
            isPressed={!isEmpty}
            onPress={() => {
              !isEmpty ? alert("내보내기") : null;
            }}
          />

          <DisclaimerFooter viewStyle={{ marginTop: 16 }} />
        </View>
      </View>
    </View>
  );
};
