import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const QuantitySelector = (props) => {
  // ! 여기서 수량에 대한 state 를 관리해서는 안 된다! QuantitySelector 는 그저 rendering 을 위해 존재할 뿐이다.
  // ! 수량의 값이 필요한 곳에다가 state 를 관리해야 한다. 
  // ! 즉 QuantitySelector 가 rendering 될 Screen 에서 state 를 관리해야 한다.

  // ! 그리고 그것을 props 로 가져와서 사용하자!
  let quantity = props.quantity;
  let setQuantity = props.setQuantity;

  const onMinus = () => {
    setQuantity(Math.max(2, quantity - 1)); // ? Math.max() 를 이용하여, 인원의 값이 2보다 작아질 수 없게 하자!
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>

      <Text style={styles.quatity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "grey",
    width: 100,
  },
  button: {
    width: 35,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightgrey",
  },
  buttonText: {
    fontSize: 19,
  },
  quatity: {
    color: "red",
  },
});

export default QuantitySelector;
