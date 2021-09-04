import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default () => {
  const navigation = useNavigation();
  const [data, setData] = useState(0);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/v1/stores/", {
  //     method: "GET",
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data);
  //       array = data;
  //       // target = array.map((e) => {if (e.category == '한식') {return e} });
  //       koreanData = array.filter((e) => e.category == "한식");
  //       chineseData = array.filter((e) => e.category == "중식");
  //       japaneseData = array.filter((e) => e.category == "일식");
  //       westernData = array.filter((e) => e.category == "양식");
  //       cafeData = array.filter((e) => e.category == "카페");

  //       menus = array.map((e) => e.menu);
  //       console.log(westernData);
  //     })
  //     .catch((error) => alert(error));
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 100,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>데이터</Text>
      <View style={{ padding: 20 }}>
        <Text>{data}</Text>
        <Button
          title="데이터 불러오기"
          onPress={() =>
            fetch("http://127.0.0.1:8000/v1/stores/", {
              method: "GET",
            })
              .then((resp) => resp.json())
              .then((data) => {
                // console.log(data);
                array = data;
                // target = array.map((e) => {if (e.category == '한식') {return e} });
                koreanData = array.filter((e) => e.category == "한식");
                chineseData = array.filter((e) => e.category == "중식");
                japaneseData = array.filter((e) => e.category == "일식");
                westernData = array.filter((e) => e.category == "양식");
                cafeData = array.filter((e) => e.category == "카페");

                menus = array.map((e) => e.menu);
                console.log(westernData);
              })
              .catch((error) => alert(error))
          }
        />
        <Button title="setData" onPress={() => setData(japaneseData[0].menu)} />
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
