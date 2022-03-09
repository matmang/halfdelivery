import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Image, Linking, Pressable, Text, View } from "react-native";
import styled from "styled-components";
import colors from "../../../colors";
import CollapsibleView from "../../../components/CollapsableView";
import { height, width } from "../../../utils";
import BarInput from "../../../components/Auth/BarInput";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import DismissKeyboard from "../../../components/DismissKeyboard";
import Btn from "../../../components/Auth/Btn";
import MatchingImagePicker from "../../../components/Main/renderImage/MatchingImagePicker";
import Dropdown_noModal from "../../../components/Dropdown_noModal";
import Timer from "../../../components/Timer";
import PinkHighlightText from "../../../components/PinkHighlightText";

export default ({ navigation, route: { params } }) => {
  const [isMinOrderFee, setIsMinOrderFee] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [orderFee, setOrderFee] = useState("");
  const [image, setImage] = useState([]);
  const [accent, setAccent] = useState(false);
  const [selectMember, setSelectMember] = useState("");
  const [members, setMembers] = useState([
    { label: "2명", value: "1" },
    { label: "3명", value: "2" },
    { label: "4명", value: "3" },
  ]);
  const [selectMinute, setSelectMinute] = useState("");
  const [minutes, setMinutes] = useState([
    { label: "5분", value: "5" },
    { label: "7분", value: "7" },
    { label: "10분", value: "10" },
  ]);

  const route = useRoute();

  const {
    matchingInfoStoreCategoryId,
    matchingInfoStoreId,
    platform,
    requiredPersons,
    setTime,
    type,
  } = route.params.matchingInfo;

  const {
    baeminUri,
    coupangUri,
    createdAt,
    id,
    location,
    maxDlvTime,
    maxDlvTip,
    minDlvTime,
    minOrdPrice,
    openHours,
    store,
    storeImgUri,
    storecategoryID,
    telephoneNumber,
    updatedAt,
    yogiyoUri,
  } = route.params.storeInfo;

  const LEFT_MONEY = 12000;
  const LEFT_TIME = setTime;

  useEffect(() => {
    setAccent(orderFee && image && selectMember && selectMinute);
  }, [orderFee, image, selectMember, selectMinute]);

  return (
    <DismissKeyboard>
      <ScrollView>
        <Container>
          <HeaderContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <SearchContanier>
                <Image
                  source={require("../../../assets/images/glasses.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    marginLeft: width * 13,
                    resizeMode: "contain",
                  }}
                />
                <SearchText>원하는 식당/메뉴를 검색하세요</SearchText>
              </SearchContanier>
            </TouchableOpacity>
          </HeaderContainer>

          <CollapsibleView sectionTitle={"배달 정보"} maxheight={height * 158}>
            <MatchingTypeContainer>
              <Text
                style={{
                  fontFamily: "noto-regular",
                  includeFontPadding: false,
                  textAlignVertical: "center",
                  fontSize: 12,
                  color: "#3E3F41",
                }}
              >
                <View
                  style={{
                    marginBottom: height * 1,
                  }}
                >
                  <Image
                    source={require("../../../assets/images/right-arrow-deepgrey.png")}
                    style={{
                      width: width * 10,
                      height: height * 9.37,
                    }}
                  />
                </View>
                {type === "MIN_PRICE"
                  ? "  최소주문금액 매칭"
                  : type === "DLV_TIP"
                  ? "  배달비 매칭"
                  : "error"}
              </Text>
              <Timer
                style={{ marginLeft: "auto" }}
                simple={false}
                time={LEFT_TIME}
              />
            </MatchingTypeContainer>
            <InfoBox>
              <InfoTopContainer>
                {params.platform === "BAEMIN" ? (
                  <BaeminBubble>
                    <PlatformText>배달의 민족</PlatformText>
                  </BaeminBubble>
                ) : params.platform === "YOGIYO" ? (
                  <YogiyoBubble>
                    <PlatformText>요기요</PlatformText>
                  </YogiyoBubble>
                ) : (
                  <CoupangBubble>
                    <PlatformText>쿠팡잇츠</PlatformText>
                  </CoupangBubble>
                )}
                <StoreText
                  onPress={() => {
                    // alert("이동");
                    Linking.openURL("https://baemin.me/f1N3n9AEk");
                  }}
                >
                  {params.storeInfo.store}
                </StoreText>
                <Image
                  source={require("../../../assets/images/chevon_left.png")}
                  style={{
                    width: width * 7.41,
                    height: height * 12,
                    marginLeft: width * 7.59,
                    marginTop: height * 2,
                  }}
                />
              </InfoTopContainer>
              <InfoBottomContainer>
                {params.storeInfo.storeImgUri !== undefined ? (
                  <Image
                    resizeMode="cover"
                    source={{ uri: params.storeInfo.storeImgUri }}
                    style={{
                      width: width * 72,
                      height: height * 72,
                      marginLeft: width * 20,
                      borderRadius: 10,
                    }}
                  />
                ) : (
                  <NoneImage></NoneImage>
                )}
                <InfoBottomRightContiner>
                  <InfoTextContainer>
                    <MoneyText>최소주문금액</MoneyText>
                    <NumberText>
                      {params.storeInfo.maxDlvTip
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                  <InfoTextContainer style={{ marginTop: height * 4 }}>
                    <MoneyText>배달비</MoneyText>
                    <NumberText>
                      {params.storeInfo.minOrdPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                </InfoBottomRightContiner>
              </InfoBottomContainer>
            </InfoBox>
          </CollapsibleView>

          <DistributionLine style={{ marginTop: height * 12 }} />

          <OrderFeeContainer>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/won-mark.png")}
                style={{
                  width: width * 19,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>나의 주문 금액</TitleText>
            </TitleContainer>

            <OrderFeeInputContainer>
              <BarInput
                style={{
                  fontSize: 17,
                  fontFamily: "noto-regular",
                }}
                KeyboardType="numeric"
                placeholder={"선택한 메뉴의 금액을 입력해주세요"}
                stateFn={setOrderFee}
                value={orderFee}
                isValued={orderFee ? true : false}
              />
            </OrderFeeInputContainer>

            <HowMuchLeftContainer>
              <Image
                source={require("../../../assets/images/question-mark.png")}
                style={{
                  width: width * 17,
                  height: height * 17,
                }}
              />
              <PinkHighlightText
                viewStyle={{
                  marginLeft: width * 6,
                }}
                textStyle={{
                  fontSize: 12,
                  fontFamily: "nunito-regular",
                  // lineHeight: 14,
                }}
                standardHeight={12}
              >
                {LEFT_MONEY.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </PinkHighlightText>
              <PinkHighlightText
                textStyle={{ fontSize: 12 }}
                standardHeight={12}
              >
                {" "}
                원 이상 주문 시 매칭 시작 조건에 도달합니다.
              </PinkHighlightText>
            </HowMuchLeftContainer>
          </OrderFeeContainer>

          <DistributionLine></DistributionLine>
          <MenuImageConatiner>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/picture-icon.png")}
                style={{
                  width: width * 19,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>주문 메뉴 정보</TitleText>
            </TitleContainer>
            <ImageContainer>
              <MatchingImagePicker
                isReady={false}
                images={image}
                setImages={setImage}
                index={0}
              />
            </ImageContainer>
            <ExplainContainer>
              <Image
                source={require("../../../assets/images/right-arrow.png")}
                style={{
                  width: width * 15,
                  height: height * 12,
                  resizeMode: "contain",
                }}
              />
              <ExplainText>선택한 메뉴의 이미지를 첨부해주세요</ExplainText>
            </ExplainContainer>
          </MenuImageConatiner>

          <DistributionLine />
        </Container>
        <ButtonContainer>
          <Btn
            text={"설정완료"}
            textStyle={{ fontSize: 17 }}
            accent={accent}
            onPress={() => {
              console.log("다음화면으로 이동!");
            }}
          />
        </ButtonContainer>
      </ScrollView>
    </DismissKeyboard>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: ${height * 57}px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryBlue};
`;

const MatchingTypeContainer = styled.View`
  margin-top: ${12 * height}px;
  width: ${width * 364}px;
  height: ${height * 17}px;
  align-items: center;
  flex-direction: row;
  /* background-color: pink; */
  margin-top: ${height * 8}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  margin-right: ${width * 24}px;
`;

const InfoBox = styled.View`
  width: ${width * 364}px;
  height: ${height * 124}px;
  margin-top: ${height * 8}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  border-radius: 10px;
  background-color: ${colors.whiteGray};
`;

const InfoTopContainer = styled.View`
  margin-top: ${12 * height}px;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const InfoBottomContainer = styled.View`
  margin-top: ${8 * height}px;
  align-items: center;
  flex-direction: row;
`;

const InfoBottomRightContiner = styled.View`
  height: ${height * 41}px;
  margin-left: ${width * 16}px;
  justify-content: space-evenly;
`;

const InfoTextContainer = styled.View`
  width: ${width * 234}px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const DistributionLine = styled.View`
  width: 100%;
  height: ${height * 2}px;
  background-color: ${colors.blueGray2};
`;

const OrderFeeContainer = styled.View`
  width: 100%;
  height: ${height * 158}px;
  background-color: white;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-top: ${height * 23}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  align-items: center;
`;

const OrderFeeInputContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${height * 23}px;
`;

const HowMuchLeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: auto;
  /* background-color: orange; */
  margin-top: ${height * 25}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  margin-bottom: ${width * 20}px;
`;

const MenuImageConatiner = styled.View`
  width: 100%;
  height: ${height * 227}px;
  background-color: white;
`;

const ExplainContainer = styled.View`
  flex-direction: row;
  margin-top: ${height * 11}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  align-items: center;
`;

const MatchingSelectContainer = styled.View`
  margin-top: ${height * 18}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const MemberContainer = styled.View`
  width: 100%;
  height: ${height * 142}px;
  background-color: white;
`;

const TimeContainer = styled.View`
  width: 100%;
  height: ${height * 285}px;
  background-color: white;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: ${height * 12}px;
  padding-bottom: ${height * 24}px;
  height: ${height * 82}px;
  bottom: ${height * 23}px;
`;

const ImageContainer = styled.View`
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  margin-top: ${height * 18}px;
`;

const DropDownContainer = styled.View`
  margin-top: ${height * 26}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
`;

const SearchContanier = styled.View`
  width: ${width * 365}px;
  height: ${height * 41}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 41px;
`;

const NoneImage = styled.View`
  width: ${width * 72}px;
  height: ${height * 72}px;
  margin-left: ${width * 20}px;
  border-radius: 10px;
  background-color: ${colors.steelBlue2};
`;

const BaeminBubble = styled.View`
  width: ${width * 74}px;
  height: ${height * 20}px;
  margin-left: ${width * 20}px;
  background-color: ${colors.baeminMint};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const YogiyoBubble = styled.View`
  width: ${width * 74}px;
  height: ${height * 20}px;
  margin-left: ${width * 20}px;
  background-color: ${colors.yogiyoRed};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const CoupangBubble = styled.View`
  width: ${width * 74}px;
  height: ${height * 20}px;
  margin-left: ${width * 20}px;
  background-color: ${colors.coupangSky};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const SelectBox = styled.View`
  width: ${width * 174}px;
  height: ${height * 190}px;
  border-radius: 16px;
  border: 1.5px;
  border-color: ${(props) =>
    props.isSelected ? colors.primaryBlue : colors.unselectedGrey};
  align-items: center;
  justify-content: center;
`;

const PlatformText = styled.Text`
  font-size: 10px;
  font-family: "noto-medium";
  color: white;
  include-font-padding: false;
  text-align-vertical: center;
`;

const StoreText = styled.Text`
  margin-left: ${width * 14}px;
  font-size: 14px;
  font-family: "noto-medium";
  text-decoration-line: underline;
  include-font-padding: false;
  text-align-vertical: center;
`;

const MoneyText = styled.Text`
  font-size: 14px;
  font-family: "noto-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const NumberText = styled.Text`
  margin-left: auto;
  margin-right: ${width * 5}px;
  font-size: 14px;
  font-family: "nunito-regular";
  margin-top: ${height * 2}px;
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const TitleText = styled.Text`
  margin-left: ${width * 8}px;
  font-size: 17px;
  font-family: "noto-medium";
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  margin-left: ${width * 4}px;
  font-size: 14px;
  font-family: "noto-regular";
  color: ${colors.steelBlue2};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SelectTitleText = styled.Text`
  font-size: ${width * 14}px;
  font-family: "noto-medium";
  margin-top: ${height * 13.7}px;
  color: ${(props) =>
    props.isSelected ? colors.primaryBlue : colors.unselectedGrey};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SelectExplainText = styled.Text`
  font-size: ${width * 11}px;
  font-family: "noto-regular";
  margin-top: ${height * 11}px;
  color: ${(props) => (props.isSelected ? "#000000" : colors.unselectedGrey)};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SearchText = styled.Text`
  font-family: "noto-regular";
  margin-left: ${width * 17}px;
  color: ${colors.unselectedGrey};
`;
