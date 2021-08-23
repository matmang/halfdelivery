import React, { useState, t, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button, Text } from "react-native";
import RoomListComponent from "../../components/Order/RoomListComponent";
import styles from "../../components/Order/styles";

const MatchingList = () => {
  const [category, setCategory] = useState("한식");
  useEffect(() => {
    console.log("useEffect called", category);
  }, [category]);

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.selectCategoryList}>
        <Text style={styles.title}>매칭 카테고리 선택</Text>
        <View style={styles.rootCategoryButtons}>
          <Button title="한식" onPress={() => setCategory("한식")} />
          <Button title="중식" onPress={() => setCategory("중식")} />
          <Button title="일식" onPress={() => setCategory("일식")} />
          <Button title="양식" onPress={() => setCategory("양식")} />
          <Button title="카페" onPress={() => setCategory("카페")} />
        </View>
      </View>
      <RoomListComponent targetCategory={category} />
      <View style={{ marginTop: 50 }}>
        <Button
          title="매칭방 만들기"
          onPress={() => navigation.navigate("CreateMatching")}
        />
      </View>
    </View>
  );
};

export default MatchingList;
