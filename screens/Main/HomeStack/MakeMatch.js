import React, { useState } from "react";
import { Image } from "react-native";
import styled from "styled-components";
import colors from "../../../colors";
import CollapsibleView from "../../../components/CollapsableView";
import { height, width } from "../../../utils";
import BarInput from "../../../components/Auth/BarInput";
import { ScrollView } from "react-native-gesture-handler";
import DismissKeyboard from "../../../components/DismissKeyboard";
import Btn from "../../../components/Auth/Btn";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: white;
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
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

const InfoBottomContainer = styled.View`
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
  margin-top: ${height * 10}px;
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

const NoneImage = styled.View`
  width: ${width * 72}px;
  height: ${height * 72}px;
  margin-left: ${width * 20}px;
  border-radius: 10px;
  background-color: ${colors.steelBlue2};
`;

const PlatformBubble = styled.View`
  width: ${width * 74}px;
  height: ${height * 20}px;
  margin-left: ${width * 20}px;
  background-color: ${colors.baeminMint};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const SelectBox = styled.View`
  width: ${width * 174}px;
  height: ${height * 190}px;
  border-radius: 16px;
  border: 1.5px;
  border-color: ${colors.primaryBlue};
  align-items: center;
  justify-content: center;
`;

const PlatformText = styled.Text`
  font-size: 10px;
  font-family: "noto-medium";
  color: white;
`;

const StoreText = styled.Text`
  margin-left: ${width * 14}px;
  font-size: 14px;
  font-family: "noto-medium";
  text-decoration-line: underline;
`;

const MoneyText = styled.Text`
  font-size: 14px;
  font-family: "noto-regular";
`;

const NumberText = styled.Text`
  margin-left: auto;
  margin-right: ${width * 5}px;
  font-size: 14px;
  font-family: "nunito-regular";
  color: ${colors.primaryBlue};
`;

const TitleText = styled.Text`
  margin-left: ${width * 8}px;
  font-size: 17px;
  font-family: "noto-medium";
  color: ${colors.primaryBlue};
`;

const ExplainText = styled.Text`
  margin-left: ${width * 4}px;
  font-size: 14px;
  font-family: "noto-regular";
  color: ${colors.steelBlue2};
`;

const SelectTitleText = styled.Text`
  font-size: 14px;
  font-family: "noto-medium";
  color: ${colors.primaryBlue};
`;

const SelectExplainText = styled.Text`
  font-size: 11px;
  font-family: "noto-regular";
`;

export default ({ navigation }) => {
  const [orderFee, setOrderFee] = useState("");
  return (
    <DismissKeyboard>
      <ScrollView>
        <Container>
          <CollapsibleView sectionTitle={"배달 정보"} maxheight={height * 158}>
            <InfoBox>
              <InfoTopContainer>
                <PlatformBubble>
                  <PlatformText>배달의 민족</PlatformText>
                </PlatformBubble>
                <StoreText>브라운돈까스 안산한양대점</StoreText>
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
                <NoneImage></NoneImage>
                <InfoBottomRightContiner>
                  <InfoTextContainer>
                    <MoneyText>최소주문금액</MoneyText>
                    <NumberText>18,000</NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                  <InfoTextContainer>
                    <MoneyText>배달비</MoneyText>
                    <NumberText>4,000</NumberText>
                    <MoneyText>원</MoneyText>
                  </InfoTextContainer>
                </InfoBottomRightContiner>
              </InfoBottomContainer>
            </InfoBox>
          </CollapsibleView>
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
            <Image
              source={require("../../../assets/images/add-picture.png")}
              style={{
                width: width * 92,
                height: height * 92,
                resizeMode: "contain",
                marginLeft: width * 24,
                marginTop: height * 18,
              }}
            />
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
              <SelectBox>
                <Image
                  source={require("../../../assets/images/min-ordering-fee-unselected.png")}
                  style={{
                    width: width * 49,
                    height: height * 47,
                    resizeMode: "contain",
                  }}
                />
                <SelectTitleText>최소주문금액 매칭</SelectTitleText>
                <SelectExplainText>
                  {`최소주문금액 도달을 목표로 
          매칭을 진행합니다`}
                </SelectExplainText>
                <Image
                  source={require("../../../assets/images/unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              </SelectBox>
              <SelectBox>
                <Image
                  source={require("../../../assets/images/delivery-fee-selected.png")}
                  style={{
                    width: width * 49,
                    height: height * 47,
                    resizeMode: "contain",
                  }}
                />
                <SelectTitleText>배달비 매칭</SelectTitleText>
                <SelectExplainText>
                  {`      설정된 인원에 맞는 배달비
분배를 목표로 매칭을 진행합니다`}
                </SelectExplainText>
                <Image
                  source={require("../../../assets/images/selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              </SelectBox>
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
          </MemberContainer>
          <DistributionLine></DistributionLine>
          <TimeContainer>
            <TitleContainer>
              <Image
                source={require("../../../assets/images/timer.png")}
                style={{
                  width: width * 19,
                  height: height * 19,
                  resizeMode: "contain",
                }}
              />
              <TitleText>매칭 대기 시간</TitleText>
            </TitleContainer>
          </TimeContainer>
        </Container>
        <ButtonContainer>
          <Btn
            text={"매칭 시작"}
            accent={true}
            onPress={() => {
              console.log("눌림");
            }}
          />
        </ButtonContainer>
      </ScrollView>
    </DismissKeyboard>
  );
};
