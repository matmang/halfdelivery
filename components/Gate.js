import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import Auth from "../navigations/Auth";
import Router from "../navigations/router";
import { loginState } from "../recoil/atoms/loginAtom";

export default () => {
  // const { isLoggedIn } = useSelector((state) => state.usersReducer);
  // const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useRecoilState(loginState);
  return (
    <NavigationContainer>
      {!loggedIn ? <Router /> : <Auth />}
    </NavigationContainer>
  );
};
