import React from "react";
import { Dimensions, Platform, Platfrom } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";
import colors from "../../colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width / 1.1}px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.snow};
  border: 2px solid ${colors.mainBlue};
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Ranking = styled.View`
  width: 50px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.mainBlue};
`;

const RankingText = styled.Text`
  font-family: "nunito-regular";
  color: ${colors.mainPink};
  font-weight: bold;
`;

const StoreInfo = styled.Text`
  font-family: "noto-regular";
  color: ${colors.coal};
  font-weight: bold;
`;

const CategoryView = styled.View`
  width: 50px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const StoreName = styled.View`
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const Popular = ({ storeInfo, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("SelectMenuScreen", {
        storeInfo,
      })
    }
  >
    <Container>
      <Ranking>
        <RankingText>1위</RankingText>
      </Ranking>
      <CategoryView>
        <StoreInfo>양식</StoreInfo>
      </CategoryView>
      <StoreName>
        <StoreInfo>{storeInfo.store}</StoreInfo>
      </StoreName>
      <Ionicons
        color={colors.mainBlue}
        size={32}
        name={Platform.OS === "android" ? "md-arrow-up" : "ios-arrow-up"}
        style={{ marginLeft: "auto" }}
      />
    </Container>
  </TouchableOpacity>
);

Popular.propTypes = {
  storeInfo: PropTypes.object.isRequired,
};
export default Popular;
