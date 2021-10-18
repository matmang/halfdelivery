import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteMenu } from "../../redux/orderSlice";
import images from "../../images";

//! ShoppingList 는 SelectMenuScreen 에 있다.

const ShoppingItem = ({ menuInfo }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  console.log("ShoppingItem | ", menuInfo);
  // console.log("ShoppingItem | menuInfo.DelID,", menuInfo.DelID);
  return (
    <View style={styles.root}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.menuContainer}>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>메뉴</Text>
          </View> */}
          <Text style={styles.menuText}>{menuInfo.menu}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{menuInfo.price.toLocaleString("ko-KR")} 원</Text>
        </View>
        <View style={styles.rightContainer}>
          <Pressable
            onPress={() => {
              dispatch(deleteMenu(menuInfo.DelID));
            }}
          >
            <Image source={images.deleteMark} />
          </Pressable>
          {/* <View style={styles.titleContainer}>
            <Text style={styles.title}>수량</Text>
          </View>
          <View style={{ marginRight: 10 }}>
            <ShoppingQuantitySelector quantity={quantity} setQuantity={setQuantity} />
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: 2,
    backgroundColor: "white",
    // height: "auto",
    borderColor: "black",
    borderWidth: 1,
  },
  menuContainer: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
    marginLeft: 28,
  },
  menuText: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "noto-regular",
    textAlign: "left",
  },
  priceContainer: {
    flex: 3,
    justifyContent: "center",
    padding: 5,
  },
  priceText: {
    fontSize: 15,
    lineHeight: 17,
    fontFamily: "noto-regular",
    textAlign: "right",
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    marginRight: 28,
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
});

export default ShoppingItem;
