import React, { useState } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Search from "../../../components/Main/Search";

export default () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  return (
    <ScrollView>
      <Search navigation={navigation} />
    </ScrollView>
  );
};
