import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Home from "../../../components/Main/Home";
import { ScrollView } from "react-native-gesture-handler";
import { Store } from "../../../AWS/src/models";
import { DataStore } from "@aws-amplify/datastore";

export default ({ navigation }) => {
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
      <Home stores={stores} />
    </ScrollView>
  );
};
