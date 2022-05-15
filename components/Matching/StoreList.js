import React, { useState, useEffect, useContext } from "react";
import { FlatList, Button, View, StyleSheet } from "react-native";
import StoreItem from "./StoreItem";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import {
  ChatRoom,
  User,
  ChatRoomUser,
  OrderMenu,
  Order,
  Store,
} from "../../AWS/src/models";
import {
  KOREAN_ID,
  CHINESE_ID,
  JAPANESE_ID,
  WESTERN_ID,
  CAFE_ID,
} from "../../assets/constants";
import styled from "styled-components";

const StoreList = ({ categoryID }) => {
  const [serverData, setServerData] = useState([]);
  const [category, setCategory] = useState("-");

  useEffect(() => {
    console.log(categoryID);
    fetchStores(); //? 다른기능구현 하는동안에는, API 요청수 절약을 위해 꺼둠..

    switch (categoryID) {
      case KOREAN_ID:
        setCategory("한식");
        break;
      case CHINESE_ID:
        setCategory("중식");
        break;
      case JAPANESE_ID:
        setCategory("일식");
        break;
      case WESTERN_ID:
        setCategory("양식");
        break;
      case CAFE_ID:
        setCategory("카페");
        break;
      default:
        setCategory("-");
        break;
    }
  }, [categoryID]);

  const fetchStores = async () => {
    if (categoryID === "ALL") {
      const fetchedStores = await DataStore.query(Store);
      setServerData(fetchedStores);
    } else {
      const fetchedStores = await DataStore.query(Store, (c) =>
        c.storecategoryID("eq", categoryID)
      );
      setServerData(fetchedStores);
    }
  };

  return (
    <Root>
      <FlatList
        data={serverData} // ? 임시 설정
        renderItem={({ item }) => <StoreItem storeInfo={item} />}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
      />
    </Root>
  );
};

const Root = styled.Pressable`
  background-color: red;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export default StoreList;
