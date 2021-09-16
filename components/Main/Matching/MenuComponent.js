import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import halfLogo from "../../../assets/halfLogo.png";

export default (props) => {
  const item = props.item; //? => const {item} = props; 랑 의미가 똑같음.
  item.image =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bd0e340-f08c-41e4-98f3-dbc9904abe8e/Logo_72dpi-01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210906T080723Z&X-Amz-Expires=86400&X-Amz-Signature=9cfe0ac4ac1b99ad3e195573772038d7f328eaf41f7ecd2e31c1381569afe07e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_72dpi-01.png%22";
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.root}
      // todo:
      // onPress={
      //   // ? 메뉴 선택시, 장바구니에 추가. navigation ㄴㄴ
      //   () =>
      //     navigation.navigate("SetMatchingTimeScreen", {
      //       store: item.store,
      //       price: item.price,
      //       minPrice: item.minPrice,
      //       delivTip: item.delivTip,
      //       image: item.image, //! item.image 이다. 즉, 이미지의 uri 값을 옮기는 것이다!!
      //     })
      // }

      // ? 일단 다음 스크린으로 이동
      onPress={() => navigation.navigate("SetMatchingTimeScreen")}
    >
      <Image
        style={styles.image}
        source={
          halfLogo
          // {uri: item.image}
        }
      />
      <View style={styles.rightContainer}>
        {/* 메뉴 */}
        <Text style={styles.title} numberOfLines={1}>
          {item.menu} | {item.minPrice}원
        </Text>

        {/* 메뉴 디테일... */}
        <Text style={styles.title} numberOfLines={1}>
          {/* //? JS Magic! item.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {/* //! item.menuDetail 데이터베이스 추후 필요. */}
          {item.menuDetail && (
            <Text style={styles.title}> {item.delivTip}</Text>
          )}
        </Text>
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
  rightContainer: {
    padding: 10,
    backgroundColor: "white",
    // justifyContent: "flex-end",
    flex: 4,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
  },
});
