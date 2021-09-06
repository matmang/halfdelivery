import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, ScrollView } from "react-native";
import styles from "../../components/Main/styles";
import orderStyles from "../../components/Main/Order/styles";
import StoreListComponent from "../../components/Main/Matching/StoreListComponent";

export default () => {
  // state값
  const [category, setCategory] = useState("all");

  // //! 디자인 시안 나오기 전까진, 일단 Button 으로...
  const CategoryButton = (props) => {
    return (
      <View style={{ margin: 10 }}>
        <Button
          title={props.name}
          onPress={() => {
            setCategory(props.name);
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={orderStyles.title}>음식 카테고리 선택</Text>
      </View>
      <View style={styles.h10row}>
        <View style={styles.rootCategoryButtons}>
          <CategoryButton name="한식" />
          <CategoryButton name="중식" />
          <CategoryButton name="일식" />
          <CategoryButton name="양식" />
          <CategoryButton name="카페" />
        </View>
      </View>
      <View style={{ margin: 2 }}>
        <Text style={orderStyles.title}>음식점 선택</Text>
      </View>
      <View style={orderStyles.list}>
        <StoreListComponent targetCatagory={category} />
      </View>
    </View>
  );
};
