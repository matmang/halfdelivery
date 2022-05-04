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

const SelectPlatform = ({ isModal, setIsModal, storeInfo, category }) => {
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
    dispatch(toggleIsMatching(true));
    setIsModal(false);
  };

  const { storecategoryID } = storeInfo;

  return (
    <Modal
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isModal}
      style={{ justifyContent: "center", alignItems: "center" }}
    >
      <ModalBox>
        <Pressable
          onPress={() => {
            setIsModal(false);
          }}
          style={{
            position: "absolute",
            marginLeft: width * 330,
            marginRight: width * 20,
            marginTop: height * 14,
            marginBottom: height * 435.7,
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
        <Top>
          <StoreInfo_mini storeInfo={storeInfo} category={category} />
          <BlueLine />
          <Noto17medium style={{ color: colors.primaryBlue, marginTop: 20 }}>
            배달 플랫폼 선택
          </Noto17medium>
          <Noto14>주문을 진행할 배달 플랫폼을 선택해주세요</Noto14>
        </Top>
        <Mid>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Platform
              name={"배달의 민족"}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            />
            <Platform
              name={"요기요"}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            />
            <Platform
              name={"쿠팡잇츠"}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            />
            <Platform
              name={"배달특급"}
              selectedName={selectedName}
              setSelectedName={setSelectedName}
            />
          </View>
          <SelectButton
            selectedName={selectedName}
            onPress={() => {
              onPress();
            }}
          >
            <Noto17medium
              style={{
                color: selectedName ? "white" : colors.steelBlue2,
              }}
            >
              선택완료
            </Noto17medium>
          </SelectButton>
        </Mid>
        <Btm>
          <DisclaimerFooter />
          {/* <Warnning>
            * 하프하프는 상품거래에 대한 통신판매중개자이며, 통신판매의 당사자가
            아닙니다. 따라서, 하프하프는 상품거래에 대하여 책임을 지지 않습니다.
          </Warnning> */}
        </Btm>
      </ModalBox>
    </Modal>
  );
};

const ModalBox = styled.View`
  width: 364px;
  height: 469px;
  border-radius: 16px;
  background-color: white;
`;

const Top = styled.View`
  width: 364px;
  height: 192px;
  /* background-color: lightcyan; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 20px;
`;

const BlueLine = styled.View`
  width: 324px; /*//! StoreRoomBox width 랑 같아야 함*/
  height: 1.5px;
  background-color: #5465aa;
  margin-top: 6px;
`;

const Mid = styled.View`
  width: 364px;
  height: 221px;
  /* background-color: lightgoldenrodyellow; */
`;

const Btm = styled.View`
  width: 364px;
  height: 56px;
  background-color: ${colors.whiteGray};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Noto17medium = styled.Text`
  font-family: "gothica1-medium";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 17px;
`;

const Noto14 = styled.Text`
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 14px;
`;

const Warnning = styled.Text`
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
  font-size: 10px;
  padding: 10px;
  color: ${colors.oxfordGray};
`;

const SelectButton = styled.Pressable`
  width: 324px;
  height: 48px;
  justify-content: center;
  align-self: center;
  align-items: center;
  background-color: ${({ selectedName }) =>
    selectedName !== null ? colors.primaryBlue : colors.blueGray2};
  border-radius: 40px;
  margin-top: auto;
  margin-bottom: 16px;
`;

const StoreInfo_mini = ({ storeInfo, category }) => {
  const { baeminDlvTip } = storeInfo;
  const { baeminOrderPrice } = storeInfo;
  const { baeminUri } = storeInfo;
  const { coupangDlvTip } = storeInfo;
  const { coupangOrderPrice } = storeInfo;
  const { coupangUri } = storeInfo;
  const { yogiyoDlvTip } = storeInfo;
  const { yogiyoOrderPrice } = storeInfo;
  const { yogiyoUri } = storeInfo;
  const { backgroundImgUri } = storeInfo;
  const { logoImgUri } = storeInfo;
  const { name } = storeInfo;
  const { location } = storeInfo;
  const { openHours } = storeInfo;
  const { storecategoryID } = storeInfo;

  return (
    <StoreRoomBox>
      <Img
        resizeMode="cover"
        source={
          // logos.halfLogo
          // { uri: logoImgUri }
          logoImgUri !== undefined ? { uri: logoImgUri } : logos.halfLogo
        }
      />
      <NonImgBox>
        <InfoView>
          <StoreCategory category={category} />
          <StoreText>{name}</StoreText>
        </InfoView>

        <InfoView>
          <View>
            <InfoText numberOfLines={1}>최소주문금액</InfoText>
            <InfoText numberOfLines={1}>배달팁</InfoText>
          </View>

          <View style={{ marginLeft: 18 }}>
            <InfoText numberOfLines={1}>
              <NunitoText>
                {baeminOrderPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </NunitoText>
              원
            </InfoText>
            <InfoText numberOfLines={1}>was maxDlvTip</InfoText>
          </View>
        </InfoView>
      </NonImgBox>
    </StoreRoomBox>
  );
};

const StoreRoomBox = styled.View`
  width: 324px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: 20px;
`;

const Img = styled.Image`
  /* margin-left: 24px; */
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 16px;
  width: ${width * 72}px;
  height: ${height * 72}px;
`;

const NonImgBox = styled.View`
  padding: 5px;
  margin-left: 20px;
  justify-content: center;
`;

const InfoView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px;
`;

const StoreText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  font-family: "gothica1-medium";
  include-font-padding: false;
  text-align-vertical: center;
  margin-left: 8px;
  margin-bottom: 3px;
`;

const InfoText = styled.Text`
  font-size: 14px;
  line-height: 16px;
  text-align: left;
  font-family: "gothica1-regular";
  include-font-padding: false;
  text-align-vertical: center;
  padding: 2px;
`;

const NunitoText = styled.Text`
  font-size: 14px;
  font-family: "nunito-regular";
  include-font-padding: false;
  text-align-vertical: center;
  text-align: right;
`;

export default SelectPlatform;
