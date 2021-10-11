import React, { useState } from "react";
import styled from "styled-components";
import DismissKeyboard from "../DismissKeyboard";
import { ActivitiIndicator, Platform, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import RecentlySearched from "./RecentlySearched";
import StoreItem from "../Matching/StoreItem";
import { ChatRoom } from "../../AWS/src/models";
import Popular from "./Popular";

const { width } = Dimensions.get("screen");

const Container = styled.View`
  padding: 0px;
  align-items: center;
`;

const TopContainer = styled.View`
  margin-top: 45px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchContanier = styled.View`
  height: 50px;
  width: 80%;
  flex-direction: row;
  margin-left: 10px;
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

const SearchedWordContainer = styled.View`
  margin-top: 26px;
  flex-direction: row;
  align-items: center;
  width: ${width};
  justify-content: space-between;
`;

const SearchedLabel = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 5px;
  margin-left: 24px;
  font-weight: 500;
  font-family: "noto-regular";
`;

const RemoveAll = styled.Text`
  font-size: 14px;
  font-family: "noto-regular";
  margin-right: 19px;
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

const Search = ({ navigation, token }) => {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [search, setSearch] = useState("");
  const SearchFn = async (token) => {
    token.forEach((element) => {
      if (element.minDlvTime == search) {
        setResults([]);
        setTempArray([]);
        tempArray.push(element);
        setResults(tempArray);
        setSearching(true);
      }
    });
  };
  return (
    <DismissKeyboard>
      <Container>
        <TopContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.mainBlue}
              size={32}
              name={
                Platform.OS === "android" ? "md-arrow-back" : "ios-arrow-back"
              }
            />
          </TouchableOpacity>
          <SearchContanier>
            <SearchBar
              value={search}
              autoFocus={true}
              placeholder="원하시는 식당/메뉴를 검색하세요"
              onChangeText={(text) => setSearch(text)}
            />
            <TouchableOpacity
              onPress={() => {
                SearchFn(token);
              }}
            >
              <Ionicons
                color={colors.mainBlue}
                size={32}
                name={Platform.OS === "android" ? "md-search" : "ios-search"}
              />
            </TouchableOpacity>
          </SearchContanier>
        </TopContainer>
        {searching ? null : (
          <SearchedWordContainer>
            <SearchedLabel>최근 검색어</SearchedLabel>
            <TouchableOpacity onPress={() => alert("검색어 전체 삭제")}>
              <RemoveAll>전체 삭제</RemoveAll>
            </TouchableOpacity>
          </SearchedWordContainer>
        )}
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <Popular storeInfo={item} navigation={navigation} />
          )}
          windowSize={2}
          style={{
            marginTop: 26,
          }}
        />
      </Container>
    </DismissKeyboard>
  );
};

export default Search;
