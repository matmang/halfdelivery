import React, { useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";
import AppLoading from "expo-app-loading";
//? AWS Amplify 관련.
import Amplify from "aws-amplify";
import config from "./AWS/src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const getFonts = () => {
  return Font.loadAsync({
    "noto-regular": require("./assets/fonts/NotoSansKR-Regular.otf"),
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
  });
};

function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  return isReady ? (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Gate />
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={getFonts}
    />
  );
}

//? 앱 시작시 AWS Amplify 로 로그인하게 하기.
export default App;
