import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StoreComponent from "./StoreComponent";
import sampleData from "./sampleData";
import styles from "../styles";

let targetData = sampleData;

const StoreListComponent = (props) => {
  (props.targetCatagory==="all") ? targetData = sampleData : targetData = sampleData.filter((value) => value.category == props.targetCatagory);

  return (
    <View style={styles.storeList}>
      <FlatList
        data={targetData}
        renderItem={({ item }) => <StoreComponent item={item} />}
      />
    </View>
  );
};

export default StoreListComponent;
