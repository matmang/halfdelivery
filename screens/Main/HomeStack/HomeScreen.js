import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Home from "../../../components/Main/Home";
import { ScrollView } from "react-native-gesture-handler";
import { Store } from "../../../AWS/src/models";
import { DataStore } from "@aws-amplify/datastore";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const _navigation = useNavigation();

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
      <Button
        title="테스트 스크린으로 이동"
        onPress={() => {
          _navigation.navigate("TestScreen");
        }}
      />
      <Home stores={stores} />
    </ScrollView>
  );
};
