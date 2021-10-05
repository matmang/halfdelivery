import React, { useState } from "react";
import styled from "styled-components";
import DismissKeyboard from "../DismissKeyboard";
import { ActivitiIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  padding: 0px;
  align-items: center;
`;

const SearchContanier = styled.View`
  height: 50px;
  width: 80%;
  margin-top: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
  align-items: center;
  border: 2px solid ${colors.mainBlue};
  border-radius: 50px;
`;

const SearchBar = styled.TextInput`
  height: 40px;
  width: 80%;
  background-color: white;
  box-shadow: 1px 5px 5px rgba(200, 200, 200, 0.5);
  border-radius: 50px;
  justify-content: center;
  padding-left: 10px;
`;

const CancelContainer = styled.TouchableOpacity``;

const CancelText = styled.Text``;

const FiltersContainer = styled.ScrollView`
  flex-direction: row;
  margin-top: 10px;
`;

const FilterContainer = styled.View`
  align-items: center;
  margin-right: 15px;
`;

const FilterLabel = styled.Text`
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Filter = styled.TextInput`
  padding: 10px;
  background-color: ${colors.snow};
  border-radius: 20px;
  box-shadow: 1px 2.5px 2.5px rgba(200, 200, 200, 0.5);
  width: 80px;
`;

const SearchBtn = styled.TouchableOpacity`
  background-color: ${colors.failure};
  padding: 10px;
  margin: 10px 30px;
  border-radius: 10px;
  align-items: center;
`;

const SearchText = styled.Text`
  color: ${colors.snow};
  font-weight: 600;
  font-size: 16px;
`;

const ResultsText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;

const Results = styled.ScrollView`
  margin-top: 25px;
`;

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");
  return (
    <DismissKeyboard>
      <>
        <Container>
          <SearchContanier>
            <SearchBar
              value={search}
              autoFocus={true}
              placeholder="원하시는 식당/메뉴를 검색하세요"
              onChangeText={(text) => setSearch(text)}
            />
            <TouchableOpacity onPress={() => alert(search)}>
              <Ionicons
                color={colors.mainBlue}
                size={32}
                name={Platform.OS === "android" ? "md-search" : "ios-search"}
              />
            </TouchableOpacity>
          </SearchContanier>
          <FiltersContainer
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <FilterContainer>
              <FilterLabel>Beds</FilterLabel>
              <Filter
                onChangeText={(text) => setSearch(text)}
                value={search}
                placeholder="0"
                keybardType={"number-pad"}
              />
            </FilterContainer>
          </FiltersContainer>
        </Container>
      </>
    </DismissKeyboard>
  );
};

export default Search;
