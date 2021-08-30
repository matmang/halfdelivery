import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "./styles";
import RoomComponent from "./RoomComponent";
import sampleData from "./sampleData";

const Header = () => {
  return (
    <View style={styles.headerRoot}>
      <View style={styles.categoryContainer}>
        <Text style={styles.headerText}>카테고리</Text>
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.headerText}>음식점</Text>
      </View>
      <View style={styles.minPriceContainer}>
        <Text style={styles.headerText}>필요금액</Text>
      </View>
      <View style={styles.peopleContainer}>
        <Text style={styles.headerText}>남은인원</Text>
      </View>
    </View>
  );
};

let targetData = sampleData;

const RoomListComponent = (props) => {
  targetData = sampleData.filter(
    (value) => value.category == props.targetCategory
  );
  return (
    <View style={styles.list}>
      <View style={{ marginTop: 5, marginBottom: 5 }}>
        <Text style={styles.title}>매칭 요청 리스트</Text>
        <Header />
      </View>
      <FlatList
        data={targetData}
        renderItem={({ item }) => <RoomComponent item={item} />}
      />
    </View>
  );
};

export default RoomListComponent;
