import React, { useEffect, useState } from "react";
import Home from "../../../components/Main/Home";
import { Store } from "../../../AWS/src/models";
import { Auth, DataStore } from "aws-amplify";
import { useNavigation } from "@react-navigation/core";

export default ({ isModalVisible }) => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const storeData = await DataStore.query(Store);
      setStores(storeData);
      console.log(isModalVisible);
    };
    fetchStores();
  }, []);

  return (
    <Home
      stores={stores}
      navigation={navigation}
      isModalVisible={isModalVisible}
    />
  );
};
