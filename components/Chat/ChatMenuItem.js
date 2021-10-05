import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { connect } from "react-redux";
import { addMenu, menusStore, menusSlice } from "../../redux/Order/_orderStore";
import logos from "../../images";

const ChatMenuItem = ({ object }) => {
  const navigation = useNavigation();

  if (object === undefined) {
    const _menuInfo = {
      menuInfo: {
        menu: "test",
        minPrice: "test",
        menuDetail: "test",
      },
    };

    object = _menuInfo;
  }

  const menuInfo = object.menuInfo;

  return (
    <View style={styles.root}>
      <Image
        style={styles.image}
        source={
          // ? imageUri 가 있으면 그걸 표출하고, 없으면 하프로고 표출.
          menuInfo.menuImgUri ? { uri: menuInfo.menuImgUri } : logos.halfLogo
        }
      />
      <View style={styles.rightContainer}>
        {/* 메뉴 */}
        <Text style={styles.title} numberOfLines={1}>
          {menuInfo.menu} | {menuInfo.minPrice}원
        </Text>

        {/* 메뉴 디테일... */}
        <Text style={styles.title} numberOfLines={1}>
          {/* //? JS Magic! menuInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {menuInfo.menuDetail && <Text style={styles.title}> {menuInfo.menuDetail}</Text>}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  image: {
    marginLeft: 3,
    flex: 1,
    height: "auto",
    resizeMode: "contain", //? Show whole Image (with white space)
  },
  rightContainer: {
    padding: 10,
    backgroundColor: "white",
    // justifyContent: "flex-end",
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "noto-regular",
    textAlign: "left",
  },
});

// const mapDispatchToProps = (dispatch, ownProps) => {
//   // console.log("mapDispatchToProps", Item);
//   return {
//     // ? Your mapDispatchToProps functions are expected to return an object.
//     // ? Each fields of the object should be a function,
//     // ? calling which is expected to "dispatch an action to the store".
//     // addMenu: () => dispatch(addMenu()),
//   };
// };
// export default connect(null, mapDispatchToProps)(MenuItem);

export default ChatMenuItem;
