import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import colors from "../../../colors";
import styled from "styled-components";
import StoreCategory from "../../StoreCategory";
import Platform from "../Platform";
import { color } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

export default ({
  isModal,
  setIsModal,
  name,
  bank,
  accountnumber,
  sendAccount,
}) => {
  // const [selectedName, setSelectedName] = useState(null);

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isModal}
      style={{ justifyContent: "center", alignItems: "center" }}
      onBackdropPress={() => {
        setIsModal(false);
      }}
    >
      <ModalBox>
        <Top>
          <TopRow>
            <View style={{ flex: 4, justifyContent: "center" }}>
              <Gothic17
                style={{
                  marginTop: 20,
                  marginLeft: 28,
                }}
              >
                {name} 님의 계좌번호입니다
              </Gothic17>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../../assets/images/ChatRoomScreen/saw_wheel.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </TopRow>
          <BlueLine />
        </Top>
        <Mid>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Gothic14>
              <AntDesign name="arrowright" size={16} color="black" /> {bank}
            </Gothic14>
            <Gothic14>{name}</Gothic14>
            <Nunito14>{accountnumber}</Nunito14>
          </View>
        </Mid>
        <Btm>
          <Send
            onPress={() => {
              sendAccount();
            }}
          >
            <Gothic17
              style={{
                color: colors.palePink,
              }}
            >
              전송하기
            </Gothic17>
          </Send>
        </Btm>
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled.View`
  width: 364px;
  height: 204px;
  background-color: white;
  border-radius: 10px;
`;

const Top = styled.View`
  width: 364px;
  flex: 1;
  /* background-color: lightcyan; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TopRow = styled.View`
  flex: 1;
  flex-direction: row;
  /* background-color: lightcyan; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const BlueLine = styled.View`
  width: 312px;
  height: 1.5px;
  background-color: #5465aa;
  margin-top: 6px;
  align-self: center;
`;

const Mid = styled.View`
  width: 364px;
  flex: 1;
  /* background-color: lightgoldenrodyellow; */
`;

const Btm = styled.View`
  width: 364px;
  flex: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Gothic17 = styled.Text`
  font-family: "gothica1-regular";
  font-size: 17px;
`;

const Gothic14 = styled.Text`
  font-family: "gothica1-regular";
  font-size: 14px;
`;

const Nunito14 = styled(Gothic14)`
  font-family: "nunito-regular";
  margin-top: 1px;
`;

const Send = styled.Pressable`
  width: 180px;
  height: 48px;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: ${colors.primaryBlue};
  border-radius: 40px;
  margin-top: auto;
  margin-bottom: 16px;
`;
