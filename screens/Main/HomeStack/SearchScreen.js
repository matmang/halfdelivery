import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Search from "../../../components/Main/Search";
import { Auth, DataStore } from "aws-amplify";
import { Store } from "../../../AWS/src/models";

export default () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  useEffect(() => {
    const fetchStores = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const storeData = await DataStore.query(Store);
      setStores(storeData);
      console.log(stores);
    };
    fetchStores();
  }, []);
  return (
    <ScrollView>
      <Search navigation={navigation} token={stores} />
    </ScrollView>
  );
};
