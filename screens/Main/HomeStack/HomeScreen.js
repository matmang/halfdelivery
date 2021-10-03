import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import Home from "../../../components/Main/Home";
import { ScrollView } from "react-native-gesture-handler";
import { Store } from "../../../AWS/src/models";

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
      console.log(storeData);
      setStores(storeData);
    };
    fetchStores();
  }, []);

  return (
    <ScrollView>
      <Home stores={stores} />
    </ScrollView>
  );
};
