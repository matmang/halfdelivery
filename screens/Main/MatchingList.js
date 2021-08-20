import React, { useState, t, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Button } from "react-native";
import ListComponent from "../../components/Order";

const MatchingList = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect called", count);
  }, [count]);

  const navigation = useNavigation();

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ListComponent />
      <View style={{ marginTop: 50 }}>
        <Button
          title="매칭방 만들기"
          onPress={() => navigation.navigate("newMakeMatching")}
        />
      </View>
    </View>
  );
};

export default MatchingList;
