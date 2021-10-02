import Auth, { CognitoUser } from "@aws-amplify/auth";
import { DataStore } from "@aws-amplify/datastore";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../../../AWS/src/models";
import UserProfile from "../../../components/Main/UserProfile";

export default ({ navigation }) => {
  const [authUser, setAuthUser] = useState(undefined);
  const [userImgUri, setUserImgUri] = useState("");
  const [userHalfMoney, setUserHalfMoney] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await Auth.currentAuthenticatedUser().then(setAuthUser);
    };
    fetchUserData();
    const fetchImageUri = async () => {
      const user = await DataStore.query(User, authUser.attributes.sub);
      setUserImgUri(user?.imageUri);
      setUserHalfMoney(user?.halfmoney);
    };
    fetchImageUri();
  }, []);

  return (
    <ScrollView>
      <UserProfile
        username="김지우"
        halfmoney={userHalfMoney}
        image={userImgUri}
        fullName="김지우"
      />
    </ScrollView>
  );
};
