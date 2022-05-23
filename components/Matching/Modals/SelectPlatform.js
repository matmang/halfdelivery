import { View, Text, Pressable, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Modal from "react-native-modal";
import colors from "../../../colors";
import styled from "styled-components";
import StoreCategory from "../../StoreCategory";
import Platform from "../Platform";
import { width, height } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import DisclaimerFooter from "../../DisclaimerFooter";
import { Auth } from "aws-amplify";
// import { toggleIsMatching } from "../../../redux/usersSlice";
import logos from "../../../images";
import ButtonModalBottomOutlined from "../../common/buttons/ButtonModalBottomOutlined";
import StoreInfoSelectPlatform from "./StoreInfoSelectPlatform";

const SelectPlatform = ({
  isModal,
  setIsModal,
  storeInfo,
  category,
  DlvTipsArray,
}) => {
  const navigation = useNavigation();
  const [selectedName, setSelectedName] = useState(null);
  const [authUser, setAuthUser] = useState(undefined);

  useLayoutEffect(() => {
    const fetchUsers = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      setAuthUser(userData);
    };
    fetchUsers();
  }, []);

  const onPress = () => {
    navigation.navigate("btHomeStack", {
      screen: "MakeMatchScreen",
      params: {
        storeInfo,
        platform: selectedName,
        category,
        authUser,
      },
    });
    // dispatch(toggleIsMatching(true));
    selectedName == null
      ? alert("플랫폼을 선택해주세요")
      : navigation.navigate("btHomeStack", {
          screen: "MakeMatchScreen",
          params: {
            storeInfo,
            platform: selectedName,
            category,
            authUser,
          },
        });
    // dispatch(toggleIsMatching(true));
    setIsModal(false);
  };

  const { storecategoryID } = storeInfo;

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isModal}
      style={{ justifyContent: "center", alignItems: "center" }}
      // ? modal 아닌 부분 즉, 배경 클릭시 작동
      onBackdropPress={() => {
        setIsModal(false);
      }}
      // ? Android 소프트웨어 키 뒤로가기 버튼 클릭시 작동
      onBackButtonPress={() => {
        setIsModal(false);
      }}
    >
      <ModalBox>
        <Pressable
          onPress={() => {
            setIsModal(false);
          }}
          style={{
            position: "absolute",
            // marginLeft: "auto",
            marginLeft: MODAL_WIDTH - width * (16 + 14),
            marginRight: width * 16,
            marginTop: height * 16,
            // marginBottom: "auto",
            marginBottom: MODAL_HEIGTH - height * (16 + 14),
            zIndex: 2,
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
        <StoreInfoSelectPlatform
          storeInfo={storeInfo}
          category={category}
          DlvTipsArray={DlvTipsArray}
          style={{ alignSelf: "center", marginTop: height * 42 }}
        />

        <BlueLine />
        <Gothic17medium
          style={{
            color: colors.primaryBlue,
            marginTop: height * 20,
            marginLeft: width * 16,
          }}
        >
          배달 플랫폼 선택
        </Gothic17medium>
        <Gothic14 style={{ marginTop: height * 8, marginLeft: width * 16 }}>
          주문을 진행할 배달 플랫폼을 선택해주세요
        </Gothic14>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-evenly",
            marginTop: height * 32,
            // backgroundColor: "red",
          }}
        >
          <Platform
            name={"배달의 민족"}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            viewStyle={{ marginLeft: width * 16 }}
          />
          <Platform
            name={"요기요"}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            viewStyle={{ marginLeft: width * 15 }}
          />
          <Platform
            name={"쿠팡잇츠"}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            viewStyle={{ marginLeft: width * 14 }}
          />
          <Platform
            name={"배달특급"}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
            viewStyle={{ marginLeft: width * 15, marginRight: width * 16 }}
          />
        </View>

        <View style={{ alignSelf: "center", marginTop: height * 32 }}>
          <ButtonModalBottomOutlined
            onPress={onPress}
            accent={selectedName}
            text="선택완료"
          />
        </View>

        <DisclaimerFooter viewStyle={{ marginTop: height * 25 }} />
        <Btm></Btm>
      </ModalBox>
    </Modal>
  );
};

const MODAL_WIDTH = width * 364;
const MODAL_HEIGTH = height * 469;

const ModalBox = styled.View`
  width: ${MODAL_WIDTH}px;
  height: ${MODAL_HEIGTH}px;
  border-radius: 16px;
  background-color: white;
`;

const BlueLine = styled.View`
  width: ${width * 324}px; /*//! StoreRoomBox width 랑 같아야 함*/
  height: ${height * 1.5}px;
  margin-top: ${height * 16}px;
  background-color: #5465aa;
  align-self: center;
`;

const Btm = styled.View`
  width: ${MODAL_WIDTH}px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Gothic17medium = styled.Text`
  font-family: "gothic-medium";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 17px;
`;

const Gothic14 = styled.Text`
  font-family: "gothic-regular";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 14px;
`;

export default SelectPlatform;
