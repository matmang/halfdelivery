import { Dimensions } from "react-native";

export const isEmail = (email) => {
  const regEx =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regEx.test(email);
};

export const validPassword = (password) => {
  const regEx =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
  return regEx.test(password);
};

export const isPhoneNum = (phonenumber) => {
  const regEx = /^\d{3}\d{3,4}\d{4}$/;
  return regEx.test(phonenumber);
};

export const basicDimensions = {
  height: 870,
  width: 412,
};

export const height = (
  Dimensions.get("screen").height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width = (
  Dimensions.get("screen").width *
  (1 / basicDimensions.width)
).toFixed(2);
