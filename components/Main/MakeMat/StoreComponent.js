import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

//? TS 라서 이렇게 쓰는거임 JS 였으면 걍 props 하면 됨.
const StoreComponent = (props) => {
  const item = props.item; //? => const {item} = props; 랑 의미가 똑같음.
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() =>
        navigation.navigate("MatchingRequestHost", {
          category: item.category,
          store: item.store,
          minPrice: item.minPrice,
          image: item.image, //! item.image 이다. 즉, 이미지의 uri 값을 옮기는 것이다!! 
        })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.store} | 최소주문금액 {item.minPrice}원
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {item.category} | 배달시간 {item.expDelivTime}분
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          배달팁
          {/* //? JS Magic! item.delivTip 값이 존재할 때에만, && 뒤에값을 표출한다! */}
          {/* //? Conditional components 를 다루는 법이다. */}
          {item.delivTip && <Text style={styles.title}> {item.delivTip}</Text>}
          원
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoreComponent;
