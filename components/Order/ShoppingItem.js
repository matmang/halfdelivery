import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShoppingItem = () => {
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>메뉴</Text>
          </View>
          <View>
            <Text style={styles.menuText}>"스테디 정식" "8,800원"</Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>수량</Text>
          </View>
          <View>
            <Text style={styles.menuText}>Q-S</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 2,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
  },
  leftContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  titleContainer: {
    borderColor: "black",
    borderBottomWidth: 1,
    borderRadius: 2,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: "noto-regular",
    fontWeight: "bold",
  },
  menuText: {
    fontSize: 15,
    fontFamily: "noto-regular",
  },
});

export default ShoppingItem;
