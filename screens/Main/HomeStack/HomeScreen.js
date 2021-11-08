import React, { useEffect, useState } from "react";
import Home from "../../../components/Main/Home";
import { ScrollView } from "react-native-gesture-handler";
import { Store } from "../../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);

  const logOut = () => {
    Auth.signOut();
  };

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
      <Home stores={stores} navigation={navigation} />
    </ScrollView>
  );
};
