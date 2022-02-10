// Reference: https://blog.logrocket.com/creating-custom-react-native-dropdown/
import React, { useState, useRef } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { width, height } from "../utils";

const Dropdown = ({ placeholder, data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const DropdownButton = useRef();
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selected, setSelected] = useState(undefined);
  const [isPressed, setIsPressed] = useState(false);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      style={{
        // borderWidth: 1,
        width: width * 364,
        height: height * 42,
        justifyContent: "center",
        paddingLeft: width * 12,
        backgroundColor: selected && item.label === selected.label && "#F5F6F6",
      }}
      onPress={() => onItemPress(item)}
    >
      <Text style={{ fontFamily: "noto-regular", fontSize: 17 }}>
        {item.label}
      </Text>
    </Pressable>
  );

  const RenderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <Pressable onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Pressable>
      </Modal>
    );
  };

  return (
    <Pressable
      ref={DropdownButton}
      style={styles.placeholderBox}
      onPress={() => {
        toggleDropdown();
      }}
    >
      <RenderDropdown />
      <Text
        style={{
          fontFamily: "noto-regular",
          fontSize: 17,
          color: selected === undefined ? "#ADB1C0" : "black",
          paddingLeft: width * 12,
          flex: 1,
        }}
      >
        {(selected && selected.label) || placeholder}
      </Text>
      <MaterialIcons
        name={visible ? "keyboard-arrow-up" : "keyboard-arrow-down"}
        size={width * 24}
        color="#ADB1C0"
        style={{ paddingRight: width * 12 }}
        // onPress={() => {
        //   visible ? setVisible(false) : setVisible(true);
        // }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  placeholderBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomWidth: height * 1.5,
    borderBottomColor: "#ADB1C0",
    width: width * 364,
    height: height * 42,
    zIndex: 1,
  },
  dropdown: {
    position: "absolute",
    alignSelf: "center",
    backgroundColor: "white",
    width: width * 364,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,

    shadowColor: "black",
    shadowOpacity: 0.16,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
  },
});

export default Dropdown;
