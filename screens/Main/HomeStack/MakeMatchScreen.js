import React, { useEffect, useLayoutEffect, useState } from "react";
import { Image, Pressable } from "react-native";
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
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import {
  ChatRoom,
  MatchingInfo,
  Participant,
  Platform,
  StoreCategory,
  Store,
  User,
} from "../../../AWS/src/models";

export default ({ navigation, route: { params } }) => {
  const { platform } = params;
  const { storeInfo } = params;
  const { authUser } = params;
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

  const [meee, setMeee] = useState(null);
  console.log("meee");
  useEffect(() => {
    console.log(meee);
  }, [meee]);

  // const [platform, setPlatformName] = useState(params?.platform);
  const [category, setCategory] = useState(undefined);
  const [isMinOrderFee, setIsMinOrderFee] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);
  const [orderFee, setOrderFee] = useState("");
  const [image, setImage] = useState([]);
  const [accent, setAccent] = useState(false);
  const [selectMember, setSelectMember] = useState("ab");
  const [members, setMembers] = useState([
    { label: "2명", value: "1" },
    { label: "3명", value: "2" },
    { label: "4명", value: "3" },
  ]);
  const [selectMinute, setSelectMinute] = useState("ab");
  const [minutes, setMinutes] = useState([
    { label: "5분", value: "5" },
    { label: "7분", value: "7" },
    { label: "10분", value: "10" },
  ]);

  useEffect(() => {
    setAccent(
      orderFee &&
        image &&
        selectMember &&
        selectMinute &&
        (isMinOrderFee || isDelivery)
    );
  }, [orderFee, image, selectMember, selectMinute, isMinOrderFee, isDelivery]);

  const handleSubmit = async () => {
    try {
      console.log("기도합시다");
      /*       Store {
        "_deleted": null,
        "_lastChangedAt": 1649082966294,
        "_version": 1,
        "backgroundImgUri": null,
        "baeminDlvTip": Object {
          "12000": 2000,
        },
        "baeminOrderPrice": 12000,
        "baeminUri": "https://baemin.me/13Wy_3rQE",
        "coupangDlvTip": null,
        "coupangOrderPrice": null,
        "coupangUri": null,
        "createdAt": "2022-04-04T14:36:06.261Z",
        "id": "368db5fd-27a1-426e-92af-aabd9b6aacbc",
        "location": null,
        "logoImgUri": null,
        "name": "레이즈오븐",
        "openHours": Object {
          "Fri": "11:00~20:00",
          "Mon": "11:00~20:00",
          "Sat": "11:00~20:00",
          "Sun": "OFF",
          "Thu": "11:00~20:00",
          "Tue": "11:00~20:00",
          "Wed": "11:00~20:00",
        },
        "storecategoryID": "41294b0f-6d62-4693-8414-431cac70fca0",
        "updatedAt": "2022-04-04T14:36:06.261Z",
        "yogiyoDlvTip": null,
        "yogiyoOrderPrice": null,
        "yogiyoUri": null,
      } */

      // console.log("authUser");
      // console.log(authUser);

      // const me = await DataStore.query(User, authUser.attributes.sub);

      // const me = await DataStore.query(User);
      // setMeee(me);

      /*       User {
        "_deleted": null,
        "_lastChangedAt": 1651161603691,
        "_version": 1,
        "accountnumber": "temporexercitationpariaturino",
        "banUserList": Array [
          "Loremididfugiat",
        ],
        "bank": "ullamcodolorirureconse",
        "bannedDateTime": "2023-01-05T15:55:55.290Z",
        "birthday": "temporineanonesseessenisiquism",
        "college": "minimculpaconsequatirur",
        "createdAt": "2022-04-28T16:00:03.656Z",
        "id": "ff3b41fd-f5d2-41e3-94bb-8335a8fc9836",
        "name": "cillumsitaliquipqui",
        "optionalTermsAgree": true,
        "phone_number": "laborisdeseruntfugiatcons",
        "profileImgUri": "commodoofficiamollit",
        "requiredTermsAgree": false,
        "school": "etpariatursuntsuntveni",
        "studentIdImgUri": "cupidatatminimfu",
        "updatedAt": "2022-04-28T16:00:03.656Z",
      }, */

      const testStoreCategoryInfo = await DataStore.query(
        StoreCategory,
        "9dcc616b-2c49-4247-9ddd-ce360d320848"
      );
      console.log("testStoreCategoryInfo");
      console.log(testStoreCategoryInfo);
      const testStore = await DataStore.query(
        Store,
        "b3b04695-20a9-43c1-bbb8-7cecb5d52eea"
      );
      console.log("testStore");
      console.log(testStore);

      const retrun = await DataStore.save(
        new MatchingInfo({
          endTime: "1970-01-01T12:30:23.999Z",
          StoreCategoryInfo:
            testStoreCategoryInfo /* Provide a StoreCategory instance here */,
          StoreInfo: testStore /* Provide a Store instance here */,
          isRapid: true,
          platform: Platform.BAEMIN,
          targetPrice: 1020,
        })
      );

      console.log("retrun");
      console.log(retrun);

      // await DataStore.save(
      //   new User({
      //     name: "Lorem ipsum dolor sit amet",
      //     profileImgUri: "Lorem ipsum dolor sit amet",
      //     studentIdImgUri: "Lorem ipsum dolor sit amet",
      //     bank: "Lorem ipsum dolor sit amet",
      //     accountnumber: "Lorem ipsum dolor sit amet",
      //     school: "Lorem ipsum dolor sit amet",
      //     college: "Lorem ipsum dolor sit amet",
      //     birthday: "Lorem ipsum dolor sit amet",
      //     bannedDateTime: "1970-01-01T12:30:23.999Z",
      //     banUserList: [],
      //     requiredTermsAgree: true,
      //     optionalTermsAgree: true,
      //     phone_number: "Lorem ipsum dolor sit amet",
      //   })
      // );

      // const newMatchingInfo = await DataStore.save(
      //   new MatchingInfo({
      //     requiredPersons: 4,
      //     setTime: 10,
      //     type: isMinOrderFee
      //       ? MatchingType.MIN_PRICE
      //       : isDelivery
      //       ? MatchingType.DLV_TIP
      //       : "ERROR",
      //     platform:
      //       platform === "배달의 민족"
      //         ? Platform.BAEMIN
      //         : platform === "요기요"
      //         ? Platform.YOGIYO
      //         : Platform.COUPANG,
      //     StoreInfo: _Store,
      //     StoreCategoryInfo: storecategoryID,
      //   })
      // );
      // console.log(newMatchingInfo);

      // const newChatRoom = await DataStore.save(
      //   new ChatRoom({
      //     newMessages: 0,
      //     master: params.authUser.attributes.sub,
      //     onSetting: true,
      //     LinkedMatchingInfo: newMatchingInfo,
      //   })
      // );
      // console.log(newChatRoom);

      // const newParticiant = await DataStore.save(
      //   new Participant({
      //     isReady: false,
      //     orderImages: image[0],
      //     orderPrice: parseInt(orderFee),
      //     isMaster: true,
      //     LinkedChatRoom: newChatRoom.id,
      //     LinkedUser: me,
      //   })
      // );
      // console.log(newParticiant);
    } catch (e) {
      console.log("기도가 안통했네요");
      console.log(e);
    }
  };

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

          <CollapsibleView
            sectionTitle={"배달 정보"}
            maxheight={height * 158}
            isOpen={true}
          >
            <InfoBox>
              <InfoTopContainer>
                {params.platform === "배달의 민족" ? (
                  <BaeminBubble>
                    <PlatformText>{params.platform}</PlatformText>
                  </BaeminBubble>
                ) : params.platform === "요기요" ? (
                  <YogiyoBubble>
                    <PlatformText>{params.platform}</PlatformText>
                  </YogiyoBubble>
                ) : (
                  <CoupangBubble>
                    <PlatformText>{params.platform}</PlatformText>
                  </CoupangBubble>
                )}
                <StoreText>{name}</StoreText>
                <Image
                  source={require("../../../assets/images/chevon_left.png")}
                  style={{
                    width: width * 7.41,
                    height: height * 12,
                    marginLeft: width * 16.6,
                  }}
                />
              </InfoTopContainer>
              <InfoBottomContainer>
                {logoImgUri !== undefined ? (
                  <Image
                    resizeMode="cover"
                    source={{ uri: logoImgUri }}
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
                    <NumberText>was maxDlvTip</NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                  <InfoTextContainer>
                    <MoneyText>배달비</MoneyText>
                    <NumberText>was minOrdPrice</NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                </InfoBottomRightContiner>
              </InfoBottomContainer>
            </InfoBox>
          </CollapsibleView>

          <ButtonContainer>
            <Btn
              text={"매칭 시작"}
              // accent={accent}
              accent={true}
              onPress={() => {
                handleSubmit();
              }}
            />
          </ButtonContainer>
          <DistributionLine></DistributionLine>

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
                KeyboardType="numeric"
                placeholder={"선택한 메뉴의 금액을 입력해주세요"}
                stateFn={setOrderFee}
                value={orderFee}
                isValued={orderFee ? true : false}
              />
            </OrderFeeInputContainer>
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
          <CollapsibleView sectionTitle={"매칭 설정"} maxheight={height * 313}>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/half-icon.png")}
                style={{
                  width: width * 13,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>매칭 유형</TitleText>
            </TitleContainer>
            <MatchingSelectContainer>
              <Pressable
                onPress={() => {
                  setIsMinOrderFee(!isMinOrderFee);
                  setIsDelivery(false);
                }}
              >
                <SelectBox isSelected={isMinOrderFee}>
                  {isMinOrderFee ? (
                    <Image
                      source={require("../../../assets/images/min-ordering-fee.png")}
                      style={{
                        width: width * 49,
                        height: height * 47,
                        resizeMode: "contain",
                      }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/images/min-ordering-fee-unselected.png")}
                      style={{
                        width: width * 49,
                        height: height * 47,
                        resizeMode: "contain",
                      }}
                    />
                  )}
                  <SelectTitleText isSelected={isMinOrderFee}>
                    최소주문금액 매칭
                  </SelectTitleText>
                  <SelectExplainText isSelected={isMinOrderFee}>
                    {`최소주문금액 도달을 목표로 
          매칭을 진행합니다`}
                  </SelectExplainText>
                  {isMinOrderFee ? (
                    <Image
                      source={require("../../../assets/images/selected.png")}
                      style={{
                        width: width * 20,
                        height: height * 20,
                        resizeMode: "contain",
                        marginTop: height * 16,
                      }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/images/unselected.png")}
                      style={{
                        width: width * 20,
                        height: height * 20,
                        resizeMode: "contain",
                        marginTop: height * 16,
                      }}
                    />
                  )}
                </SelectBox>
              </Pressable>
              <Pressable
                onPress={() => {
                  setIsDelivery(!isDelivery);
                  setIsMinOrderFee(false);
                }}
              >
                <SelectBox isSelected={isDelivery}>
                  {isDelivery ? (
                    <Image
                      source={require("../../../assets/images/delivery-fee-selected.png")}
                      style={{
                        width: width * 49,
                        height: height * 47,
                        resizeMode: "contain",
                      }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/images/delivery-fee-unselected.png")}
                      style={{
                        width: width * 49,
                        height: height * 47,
                        resizeMode: "contain",
                      }}
                    />
                  )}
                  <SelectTitleText isSelected={isDelivery}>
                    배달비 매칭
                  </SelectTitleText>
                  <SelectExplainText isSelected={isDelivery}>
                    {`      설정된 인원에 맞는 배달비
분배를 목표로 매칭을 진행합니다`}
                  </SelectExplainText>
                  {isDelivery ? (
                    <Image
                      source={require("../../../assets/images/selected.png")}
                      style={{
                        width: width * 20,
                        height: height * 20,
                        resizeMode: "contain",
                        marginTop: height * 16,
                      }}
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/images/unselected.png")}
                      style={{
                        width: width * 20,
                        height: height * 20,
                        resizeMode: "contain",
                        marginTop: height * 16,
                      }}
                    />
                  )}
                </SelectBox>
              </Pressable>
            </MatchingSelectContainer>
          </CollapsibleView>
          <DistributionLine></DistributionLine>
          <MemberContainer>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/person.png")}
                style={{
                  width: width * 16,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>매칭 희망 인원</TitleText>
            </TitleContainer>
            <DropDownContainer>
              <Dropdown_noModal
                placeholder={"매칭할 파트너 인원을 설정합니다"}
                data={members}
                onSelect={setSelectMember}
              />
            </DropDownContainer>
          </MemberContainer>
          <DistributionLine></DistributionLine>
          <TimeContainer>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/blue_timer.png")}
                style={{
                  width: width * 19,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>매칭 대기 시간</TitleText>
            </TitleContainer>
            <DropDownContainer>
              <Dropdown_noModal
                placeholder={"해당 매칭이 노출되는 시간을 설정합니다"}
                data={minutes}
                onSelect={setSelectMinute}
              />
            </DropDownContainer>
          </TimeContainer>
        </Container>
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

const InfoBox = styled.View`
  width: ${width * 364}px;
  height: ${height * 124}px;
  margin-top: ${height * 16}px;
  margin-left: ${width * 24}px;
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
  height: ${height * 141}px;
  background-color: white;
`;

const TitleContainer = styled.View`
  flex-direction: row;
  margin-top: ${height * 23}px;
  margin-left: ${width * 24}px;
  align-items: center;
`;

const OrderFeeInputContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${height * 23};
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
  margin-top: ${height * 18}px;
`;

const DropDownContainer = styled.View`
  margin-top: ${height * 26}px;
  margin-left: ${width * 24}px;
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
  font-family: "gothic-medium";
  color: white;
  include-font-padding: false;
  text-align-vertical: center;
`;

const StoreText = styled.Text`
  margin-left: ${width * 14}px;
  font-size: 14px;
  font-family: "gothic-medium";
  text-decoration-line: underline;
  include-font-padding: false;
  text-align-vertical: center;
`;

const MoneyText = styled.Text`
  font-size: 14px;
  font-family: "gothic-regular";
  include-font-padding: false;
  text-align-vertical: center;
`;

const NumberText = styled.Text`
  margin-left: auto;
  margin-right: ${width * 5}px;
  font-size: 14px;
  font-family: "nunito-regular";
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const TitleText = styled.Text`
  margin-left: ${width * 8}px;
  font-size: 17px;
  font-family: "gothic-medium";
  color: ${colors.primaryBlue};
  include-font-padding: false;
  text-align-vertical: center;
`;

const ExplainText = styled.Text`
  margin-left: ${width * 4}px;
  font-size: 14px;
  font-family: "gothic-regular";
  color: ${colors.steelBlue2};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SelectTitleText = styled.Text`
  font-size: ${width * 14}px;
  font-family: "gothic-medium";
  margin-top: ${height * 13.7};
  color: ${(props) =>
    props.isSelected ? colors.primaryBlue : colors.unselectedGrey};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SelectExplainText = styled.Text`
  font-size: ${width * 11}px;
  font-family: "gothic-regular";
  margin-top: ${height * 11}px;
  color: ${(props) => (props.isSelected ? "#000000" : colors.unselectedGrey)};
  include-font-padding: false;
  text-align-vertical: center;
`;

const SearchText = styled.Text`
  font-family: "gothic-regular";
  margin-left: ${width * 17}px;
  color: ${colors.unselectedGrey};
`;
