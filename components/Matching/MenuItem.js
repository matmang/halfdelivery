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
      // ? 클릭시, 메뉴정보 redux 로 저장
      onPress={() => {
        console.log(_menuInfo);
        _menuInfo.DelID = Date.now();
        console.log(_menuInfo);
        dispatch(addMenu(_menuInfo));
      }}
      style={styles.root}
    >
      <View style={styles.textsContainer}>
        {/* 메뉴 */}
        <View style={styles.menuContainer}>
          <Text style={styles.menu} numberOfLines={1}>
            {menuInfo.menu}
          </Text>
        </View>
        {/* 메뉴 디테일... */}
        <View style={styles.detailContainer}>
          {/* //? JS Magic! menuInfo.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          <Text style={styles.detail}>디테일</Text>
          {/* //? Conditional components 를 다루는 법이다. */}
          {menuInfo.menuDetail && <Text style={styles.detail}> {menuInfo.menuDetail}</Text>}
        </View>
        {/* 가격 */}
        <View style={styles.priceContainer}>
          <Text style={styles.price} numberOfLines={1}>
            {menuInfo.price.toLocaleString("ko-KR")} 원
          </Text>
        </View>
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
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    // borderRadius: 5,
    backgroundColor: "#fff",
    marginVertical: 2, //? 컴포넌트 복붙해서 재활용시, 사용됨 ㅎㅎ
  },
  textsContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 37,
  },
  imageContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "white",
    marginRight: 38,
  },
  image: {
    // marginLeft: 3,
    borderWidth: 1,
    height: 84,
    width: 84,
    resizeMode: "cover",
    // resizeMode: "contain", //? contain: Show whole Image (with white space)
  },
  menuContainer: {
    backgroundColor: "white",
    marginTop: 16,
  },
  detailContainer: {
    backgroundColor: "white",
    marginTop: 5,
  },
  priceContainer: {
    backgroundColor: "white",
    // marginTop: 11,
    // marginBottom: 8,
  },
  menu: {
    fontSize: 17,
    fontFamily: "noto-regular",
    fontWeight: "bold",
    textAlign: "left",
  },
  detail: {
    fontSize: 14,
    fontFamily: "noto-regular",
    textAlign: "left",
  },
  price: {
    fontSize: 17,
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
