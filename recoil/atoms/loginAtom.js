import { atom, DefaultValue } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";

// https://github.com/polemius/recoil-persist/issues/20
const persistAtom = ({ node, setSelf, onSet }) => {
  setSelf(
    AsyncStorage.getItem(node.key).then((savedValue) =>
      savedValue != null ? JSON.parse(savedValue) : new DefaultValue()
    )
  );

  onSet((newValue) => {
    if (newValue instanceof DefaultValue) {
      AsyncStorage.removeItem(node.key);
    } else {
      AsyncStorage.setItem(node.key, JSON.stringify(newValue));
    }
  });
};

export const loginState = atom({
  key: "login",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
