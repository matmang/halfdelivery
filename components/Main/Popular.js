import React from "react";
import { Dimensions, Platform, Text } from "react-native";
import styled from "styled-components";
import colors from "../../colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  width: ${width / 1.1}px;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  margin-bottom: 5px;
`;

const Ranking = styled.View`
  width: 27px;
  height: 27px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryPink};
  border-radius: 30px;
`;

const RankingText = styled.Text`
  font-family: "nunito-regular";
  color: ${colors.primaryBlue};
  font-size: 17px;
  font-weight: bold;
`;

const StoreInfo = styled.Text`
  font-family: "gothic-regular";
  color: ${colors.captionGray};
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

const Popular = ({ index, storeInfo, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("StoreStack", {
        screen: "SelectMenuScreen",
        params: {
          storeInfo,
        },
      })
    }
  >
    <Container>
      <Ranking>
        <RankingText>{index + 1}</RankingText>
      </Ranking>
      <CategoryView>
        <StoreInfo>양식</StoreInfo>
      </CategoryView>
      <StoreName>
        {storeInfo?.store ? (
          <StoreInfo>{storeInfo?.store}</StoreInfo>
        ) : (
          <Text>에러</Text>
        )}
      </StoreName>
      <Ionicons
        color="black"
        size={20}
        name={
          Platform.OS === "android"
            ? "md-chevron-forward"
            : "ios-chevron-forward"
        }
      />
      <Ionicons
        color={colors.primaryBlue}
        size={32}
        name={
          Platform.OS === "android" ? "md-caret-up-sharp" : "ios-caret-up-sharp"
        }
        style={{ marginLeft: "auto" }}
      />
    </Container>
  </TouchableOpacity>
);

export default Popular;
