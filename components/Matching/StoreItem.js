import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import logos from "../../logos";

export default (props) => {
  const item = props.item; //? => const {item} = props; 랑 의미가 똑같음.
  item.image =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9bd0e340-f08c-41e4-98f3-dbc9904abe8e/Logo_72dpi-01.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210906%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210906T080723Z&X-Amz-Expires=86400&X-Amz-Signature=9cfe0ac4ac1b99ad3e195573772038d7f328eaf41f7ecd2e31c1381569afe07e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Logo_72dpi-01.png%22";
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.root}
      onPress={() =>
        navigation.navigate("SelectMenuScreen", {
          category: item.category,
          store: item.store,
          minPrice: item.minPrice,
          image: item.image, //! item.image 이다. 즉, 이미지의 uri 값을 옮기는 것이다!!
        })
      }
    >
      <Image
        style={styles.image}
        source={
          logos.halfLogo
          // {uri: item.image}
        }
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {item.store} | 최소주문금액 {item.minPrice}원
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {item.category} | 배달시간 {item.expDelivTime}
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
