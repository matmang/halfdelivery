import React, { useState } from "react";
import styled from "styled-components";
import Proptypes from "prop-types";
import colors from "../../colors";
import ReactNativeModal from "react-native-modal";
import { height, width } from "../../utils";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Pressable } from "react-native";
import UserDeleteBtn from "./UserDeleteBtn";

const Container = styled.View`
  width: ${width * 364}px;
  height: ${height * 489}px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const DeleteContainer = styled.View`
  width: 100%;
  flex-direction: row-reverse;
`;

const InfoConatiner = styled.View`
  width: 100%;
  margin-top: ${height * 11}px;
`;

const TopInfoLineContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const BottomInfoContainer = styled.View`
  margin-top: ${height * 19}px;
  justify-content: space-evenly;
  width: 100%;
`;

const BtnContainer = styled.View`
  margin-top: ${height * 32}px;
  width: 100%;
  margin-bottom: ${height * 24}px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const SurveyContainer = styled.View`
  margin-top: ${height * 7}px;
  width: 100%;
`;

const SurveyRow = styled.View`
  margin-left: ${width * 24}px;
  margin-top: ${width * 24};
  flex-direction: row;
  align-items: center;
`;

const Distributionline = styled.View`
  height: 0;
  width: ${width * 332}px;
  margin-top: ${height * 14}px;
  margin-left: ${width * 24}px;
  margin-right: ${width * 24}px;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.error};
`;

const UserInfoText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
`;

const BtInfoText = styled.Text`
  margin-left: ${width * 24}px;
  font-family: "noto-regular";
  font-size: 14px;
  line-height: ${height * 24}px;
`;

const ButtonText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  color: ${colors.primaryBlue};
`;

const CancelText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  color: ${colors.error};
`;

const SurveyText = styled.Text`
  font-family: "noto-medium";
  font-size: 14px;
  color: ${(props) => (props.accent ? colors.error : "#000000")};
  margin-left: ${width * 8}px;
`;

const UserDeleteSurvey = ({
  isModalVisible,
  onBackdropPress,
  navigation,
  setIsModalVisible,
}) => {
  const [survey1, setSurvey1] = useState(false);
  const [survey2, setSurvey2] = useState(false);
  const [survey3, setSurvey3] = useState(false);
  const [survey4, setSurvey4] = useState(false);
  const [survey5, setSurvey5] = useState(false);
  return (
    <ReactNativeModal
      isVisible={isModalVisible}
      onBackdropPress={onBackdropPress}
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <Container>
        <DeleteContainer>
          <Pressable onPress={() => setIsModalVisible(false)}>
            <Image
              source={require("../../assets/images/delete.png")}
              style={{
                width: width * 14,
                height: height * 14,
                marginTop: height * 16,
                marginRight: width * 16,
                resizeMode: "contain",
              }}
            />
          </Pressable>
        </DeleteContainer>
        <InfoConatiner>
          <TopInfoLineContainer>
            <Image
              source={require("../../assets/images/caution.png")}
              style={{
                height: height * 18,
                width: width * 22,
                marginRight: width * 8,
                marginLeft: width * 24,
                resizeMode: "contain",
              }}
            />
            <UserInfoText>하프딜리버리 탈퇴 사유를 알려주세요</UserInfoText>
          </TopInfoLineContainer>
          <Distributionline></Distributionline>
          <BottomInfoContainer>
            <BtInfoText>
              그동안 이용해 주셔서 감사합니다. 일반적인 문제에 관{"\n"}해 도움을
              드릴 수 있으므로 계정을 삭제하는 이유를 알{"\n"}려주세요. 삭제를
              계속 진행할 수도 있습니다.
            </BtInfoText>
          </BottomInfoContainer>
        </InfoConatiner>
        <SurveyContainer>
          <TouchableOpacity onPress={() => setSurvey1(!survey1)}>
            <SurveyRow>
              {survey1 ? (
                <Image
                  source={require("../../assets/images/delete_selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/delete_unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
              <SurveyText accent={survey1}>개인정보가 우려됨</SurveyText>
            </SurveyRow>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSurvey2(!survey2)}>
            <SurveyRow>
              {survey2 ? (
                <Image
                  source={require("../../assets/images/delete_selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/delete_unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
              <SurveyText accent={survey2}>서비스의 이용이 불편함</SurveyText>
            </SurveyRow>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSurvey3(!survey3)}>
            <SurveyRow>
              {survey3 ? (
                <Image
                  source={require("../../assets/images/delete_selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/delete_unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
              <SurveyText accent={survey3}>내 계정이 해킹되었음</SurveyText>
            </SurveyRow>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSurvey4(!survey4)}>
            <SurveyRow>
              {survey4 ? (
                <Image
                  source={require("../../assets/images/delete_selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/delete_unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
              <SurveyText accent={survey4}>서비스가 유용하지 않음</SurveyText>
            </SurveyRow>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSurvey5(!survey5)}>
            <SurveyRow>
              {survey5 ? (
                <Image
                  source={require("../../assets/images/delete_selected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/delete_unselected.png")}
                  style={{
                    width: width * 20,
                    height: height * 20,
                    resizeMode: "contain",
                  }}
                />
              )}
              <SurveyText accent={survey5}>
                더 이상 서비스를 이용할 일이 없음
              </SurveyText>
            </SurveyRow>
          </TouchableOpacity>
        </SurveyContainer>
        <BtnContainer>
          <UserDeleteBtn
            text={"탈퇴 진행"}
            onPress={() => setIsModalVisible(false)}
          />
        </BtnContainer>
      </Container>
    </ReactNativeModal>
  );
};

UserDeleteSurvey.propTypes = {
  isModalVisible: Proptypes.bool.isRequired,
  onBackdropPress: Proptypes.func,
};

export default UserDeleteSurvey;
