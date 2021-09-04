import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Time } from "react-native-gifted-chat";

const TestScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/v1/stores/", {
      method: "GET",
    })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        array = data;
        // target = array.map((e) => {if (e.category == '한식') {return e} });
        korean = array.filter((e) => e.category == "한식");
        chinese = array.filter((e) => e.category == "중식");
        japanese = array.filter((e) => e.category == "일식");
        western = array.filter((e) => e.category == "양식");
        cafe = array.filter((e) => e.category == "카페");

        menus = array.map((e) => e.menu);
        console.log(cafe);

        // console.log(array.map((e) => e.menu));
        // menus = array.map((e) => e.menu);
        // console.log(menus);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        justifyContent: "center", // 세로 정렬
        paddingVertical: 100,
      }}
    >
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>데이터</Text>
        <Text>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 100,
    marginBottom: 100,
    marginVertical: 10,
    paddingTop: 10,
  },
});

export default TestScreen;
