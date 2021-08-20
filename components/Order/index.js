import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import styles from "./styles";
import RoomComponent from "./RoomComponent";
import sampleData from "./sampleData";

const Header = (props) => {
  const item = props.item;
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

const PickCategory = (props) => {
  const item = props.item;
  return (
    <View style={styles.rootCategoryButtons}>
      <Button title="한식" onPress={() => alert("테스트")} />
      <Button title="중식" onPress={() => alert("테스트")} />
      <Button title="일식" onPress={() => alert("테스트")} />
      <Button title="양식" onPress={() => alert("테스트")} />
      <Button title="카페" onPress={() => alert("테스트")} />
    </View>
  );
};

const ListComponent = () => {
  return (
    <View style={styles.list}>
      <Text style={styles.title}>매칭 카테고리 선택</Text>
      <PickCategory />
      <View style={{ marginTop: 15, marginBottom: 5 }}>
        <Text style={styles.title}>매칭 요청 리스트</Text>
        <Header />
      </View>
      <FlatList
        data={sampleData}
        renderItem={({ item }) => <RoomComponent item={item} />}
      />
    </View>
  );
};

export default ListComponent;
