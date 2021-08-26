import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const RoomComponent = (props) => {
  const item = props.item;
  return (
    <TouchableOpacity style={styles.root} onPress={() => alert("테스트")}>
      <View style={styles.categoryContainer}>
        <Text style={styles.text}>{item.category}</Text>
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.text}>{item.store}</Text>
      </View>
      <View style={styles.minPriceContainer}>
        <Text style={styles.text}>{item.minPrice}</Text>
      </View>
      <View style={styles.peopleContainer}>
        <Text style={styles.text}>{item.people}명</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoomComponent;
