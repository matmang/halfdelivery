import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DismissKeyboard from "../DismissKeyboard";
import { Platform, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../colors";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import SearchItem from "./SearchItem";
import { useDispatch } from "react-redux";
import { cleanMenus } from "../../redux/orderSlice";

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
  border: 2px solid ${colors.primaryBlue};
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
  font-family: "gothica1-regular";
`;

const RemoveAll = styled.Text`
  font-size: 14px;
  font-family: "gothica1-regular";
  margin-right: 19px;
`;

const Search = ({ navigation, token }) => {
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [tempArray, setTempArray] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanMenus());
  }, []);

  const SearchFn = async (text, token) => {
    var name, i;
    for (i = 0; i < token.length; i++) {
      name = token[i].store;
      if (name.toUpperCase().indexOf(text) > -1) {
        tempArray.push(token[i]);
      } else {
        setTempArray([]);
      }
    }
    if (text === "") {
      setSearching(false);
    } else {
      setSearching(true);
    }
    setResults(tempArray);
  };

  return (
    <DismissKeyboard>
      <Container>
        <TopContainer>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              color={colors.primaryBlue}
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
              onChangeText={(text) => {
                setSearch(text);
                SearchFn(text, token);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                setSearch(text);
                SearchFn(token);
              }}
            >
              <Ionicons
                color={colors.primaryBlue}
                size={32}
                name={Platform.OS === "android" ? "md-search" : "ios-search"}
              />
            </TouchableOpacity>
          </SearchContanier>
        </TopContainer>
        {searching ? (
          <FlatList
            data={results}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0.8}
            showsVerticalScrollIndicator={true}
            renderItem={({ item }) => (
              <SearchItem storeInfo={item} navigation={navigation} />
            )}
            windowSize={2}
            style={{
              marginTop: 26,
            }}
          />
        ) : (
          <SearchedWordContainer>
            <SearchedLabel>최근 검색어</SearchedLabel>
            <TouchableOpacity onPress={() => alert("검색어 전체 삭제")}>
              <RemoveAll>전체 삭제</RemoveAll>
            </TouchableOpacity>
          </SearchedWordContainer>
        )}
      </Container>
    </DismissKeyboard>
  );
};

export default Search;
