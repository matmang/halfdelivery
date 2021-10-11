import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { connect } from "react-redux";
import logos from "../../images";
import { useSelector, useDispatch } from "react-redux";
import { setStore, addMenu, cleanMenus } from "../../redux/orderSlice";

const MenuItem = ({ menuInfo, storeInfo }) => {
  const storeName = useSelector((state) => state.orderReducer.storeName);
  const _menuInfo = { ...menuInfo }; //? menuInfo 객체 Deep 하게 복사하기.
  //! const 변수는 할당된 "메모리 주소값이 상수" 라는 뜻이다. 따라서 당연히, const 객체는 수정(속성 추가/삭제)이 가능하다!

  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.root}
      // ? 클릭시, 메뉴정보 redux 로 저장
      onPress={() => {
        console.log(_menuInfo);
        _menuInfo.DelID = Date.now();
        console.log(_menuInfo);
        dispatch(addMenu(_menuInfo));
      }}
    >
      <View style={styles.textContainer}>
        {/* 메뉴 */}
        <Text style={styles.title} numberOfLines={1}>
          {menuInfo.menu} | {menuInfo.price}원
        </Text>

        {/* 메뉴 디테일... */}
        <Text style={styles.title} numberOfLines={1}>
          {/* //? JS Magic! menuInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {menuInfo.menuDetail && <Text style={styles.title}> {menuInfo.menuDetail}</Text>}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            // ? imageUri 가 있으면 그걸 표출하고, 없으면 하프로고 표출.
            menuInfo.menuImgUri ? { uri: menuInfo.menuImgUri } : logos.halfLogo

            // {uri: menuInfo.image}
          }
        />
      </View>
    </TouchableOpacity>
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
  textContainer: {
    padding: 10,
    backgroundColor: "white",
    flex: 4,
  },
  imageContainer: {
    padding: 1,
    backgroundColor: "white",
    marginRight: 10,
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontFamily: "noto-regular",
    fontWeight: "bold",
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

export default MenuItem;
