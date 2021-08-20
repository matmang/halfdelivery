import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import StoreComponent from "./StoreComponent";
import sampleData from "./sampleData";
import styles from "../styles";
const StoreList = () => {
  return (
    <View style={styles.storeList}>
      <FlatList
        data={sampleData}
        renderItem={({item}) => <StoreComponent item={item}/>}
      />
    </View>
  );
};

export default StoreList;
