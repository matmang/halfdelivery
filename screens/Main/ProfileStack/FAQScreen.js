import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import colors from "../../../colors";
import AnnouncementView from "../../../components/Profile/AnnouncementView";
import { height, width } from "../../../utils";

const Container = styled.View`
  flex: 1;
`;

const LogoConatainer = styled.View`
  background-color: white;
  padding-top: ${height * 24}px;
  padding-left: ${width * 24}px;
  margin-bottom: ${height * 1.5}px;
`;

const DistributionLine = styled.View`
  width: ${364 * width}px;
  height: ${height * 1}px;
  background-color: ${colors.blueGray2};
`;

const ButtonBounder = styled.View`
  background-color: white;
  align-items: center;
`;

const SubTitleText = styled.Text`
  font-family: "noto-medium";
  font-size: ${width * 17}px;
  margin-top: ${height * 23}px;
  margin-bottom: ${height * 22}px;
  include-font-padding: false;
  text-align-vertical: center;
`;

const InfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 12px;
  line-height: ${height * 20}px;
`;

const InfoBox = styled.View`
  width: ${width * 364}px;
  height: ${height * 84}px;
  margin-left: ${width * 24}px;
  padding-left: ${width * 16}px;
  padding-top: ${width * 15}px;
  border-radius: 10px;
  background-color: ${colors.whiteGray};
`;

export default ({ navigation }) => {
  return (
    <Container>
      <LogoConatainer>
        <Image
          source={require("../../../assets/images/halfd_color_logo.png")}
          style={{
            width: width * 40,
            height: height * 58.01,
            resizeMode: "contain",
          }}
        />
        <SubTitleText>사용자들이 자주 묻는 질문을 확인해보세요</SubTitleText>
      </LogoConatainer>
      <ButtonBounder>
        <AnnouncementView
          sectionTitle={"아이디, 비밀번호를 잊어버렸어요."}
          maxheight={height * 112}
        ></AnnouncementView>
        <DistributionLine></DistributionLine>
        <AnnouncementView
          sectionTitle={"매칭 내역 조회는 어디서 하나요?"}
          maxheight={height * 112}
        >
          <InfoBox>
            <InfoText>
              지난 매칭 내역은 채팅 페이지에서 확인할 수 있어요. 종료된 채팅
              {"\n"}
              방에서 +버튼을 눌러 매칭 정보를 확인하시면 더욱 자세한 정보를 얻을
              {"\n"}수 있습니다.
            </InfoText>
          </InfoBox>
        </AnnouncementView>
        <DistributionLine></DistributionLine>
        <AnnouncementView
          sectionTitle={"샘플 박스"}
          maxheight={height * 112}
        ></AnnouncementView>
      </ButtonBounder>
    </Container>
  );
};
