import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ShoppingQuantitySelector from "../Order/ShoppingQuantitySelector";
import { useSelector, useDispatch } from "react-redux";
import { deleteMenu } from "../../redux/orderSlice";

//! ShoppingList 는 SelectMenuScreen 에 있다.

const ShoppingItem = ({ menuInfo }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  console.log("ShoppingItem | ", menuInfo);
  // console.log("ShoppingItem | menuInfo.DelID,", menuInfo.DelID);
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            dispatch(deleteMenu(menuInfo.DelID));
          }}
        >
          <Text>지우자</Text>
        </Pressable>
        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>메뉴</Text>
          </View>
          <View>
            <Text style={styles.menuText}>
              {menuInfo.menu} {menuInfo.price}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>수량</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <ShoppingQuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 2,
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
