import React, { useState, t, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";
import List from "../../components/Order";

const MatchingList = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called", count);
  }, [count]);

  // state값
  const [category, setCategory] = useState(false);
  const [store, setStore] = useState(false);

  const navigation = useNavigation();

  // //! 디자인 시안 나오기 전까진, 일단 Button 으로...
  const [isPressed, setIsPressed] = useState(false);
  const CategoryButton = (props) => {
    return (
      <View style={{ margin: 10 }}>
        <Button
          color="skyblue" // {isPressed ? 'red' : 'grey'}
          title={props.name}
          onPress={() => {
            setCategory(props.name);
            // alert(`${props.name}이 선택되었습니다.`);
            setCount(count + 1);
            console.log(category);
          }}
        />
      </View>
    );
  };

  const StoreButton = (props) => {
    return (
      <View style={{ margin: 10 }}>
        <Button
          title={props.name}
          onPress={() => {
            setStore(props.name);
            // alert(`${props.name} 선택되었습니다.`);
          }}
        />
      </View>
    );
  };

  const toMatHostClient = (targetScreen) => {
    if (!category && !store) {
      alert("카테고리와 음식점을 골라주세요");
    } else if (!category && store) {
      alert("카테고리를 골라주세요");
    } else if (category && !store) {
      alert("음식점을 골라주세요");
    } else {
      // 모두 다 골랐으면, 다음 스크린으로 이동.
      navigation.navigate(targetScreen, {
        category,
        store,
      });
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <List />
      <View style={{ marginTop: 20 }}>
        <Button
          title="매칭방 만들기"
          onPress={() => navigation.navigate("MakeMatching")}
        />
      </View>
    </View>
  );
};

export default MatchingList;
