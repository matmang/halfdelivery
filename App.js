import React, { Suspense, useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";
import AppLoading from "expo-app-loading";
//? AWS Amplify 관련.
import Amplify, { AuthModeStrategyType } from "aws-amplify";
import config from "./AWS/src/aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
import { atom, RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Text } from "react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const getFonts = () => {
  return Font.loadAsync({
    // "noto-regular": require("./assets/fonts/NotoSansKR-Regular.otf"),
    // "noto-medium": require("./assets/fonts/NotoSansKR-Medium.otf"),
    // "noto-bold": require("./assets/fonts/NotoSansKR-Bold.otf"),
    "noto-regular": require("./assets/fonts/GothicA1-Regular.ttf"),
    "noto-medium": require("./assets/fonts/GothicA1-Medium.ttf"),
    "noto-bold": require("./assets/fonts/GothicA1-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nunito-semibold": require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    "nunito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
  });
};

function App() {
  const [isReady, setIsReady] = useState(false);
  const handleFinish = () => setIsReady(true);
  return isReady ? (
    <RecoilRoot>
      <Suspense fallback={<Text>로딩...</Text>}>
        <Gate />
      </Suspense>
    </RecoilRoot>
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
