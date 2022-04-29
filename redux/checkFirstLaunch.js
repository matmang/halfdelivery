import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_VALUE = "keyFirstLaunch";
const KEY_VALUE2 = "keyFirstLaunch2";

function setAppLaunched() {
  AsyncStorage.setItem(KEY_VALUE, "true");
}

function setPageLaunched() {
  AsyncStorage.setItem(KEY_VALUE2, "true");
}

export async function checkFirstLaunch() {
  try {
    const isFirstLaunched = await AsyncStorage.getItem(KEY_VALUE);
    if (isFirstLaunched === null) {
      setAppLaunched();
      return true;
    }
    return false;
  } catch (error) {
    console.log(" [check first launch] :" + error);
    return false;
  }
}

export async function checkFirstPage() {
  try {
    const isFirstLaunched = await AsyncStorage.getItem(KEY_VALUE2);
    if (isFirstLaunched === null) {
      setPageLaunched();
      return true;
    }
    return false;
  } catch (error) {
    console.log(" [check first launch] :" + error);
    return false;
  }
}
