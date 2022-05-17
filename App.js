import React, { Suspense, useState } from "react";
import * as Font from "expo-font";
import Gate from "./components/Gate";
import AppLoading from "expo-app-loading";
//? AWS Amplify 관련.
import Amplify from "aws-amplify";
import config from "./AWS/src/aws-exports";
import { RecoilRoot } from "recoil";
import { Text } from "react-native";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const getFonts = () => {
  return Font.loadAsync({
    "gothica1-regular": require("./assets/fonts/GothicA1-Regular.ttf"),
    "gothica1-medium": require("./assets/fonts/GothicA1-Medium.ttf"),
    "gothica1-semibold": require("./assets/fonts/GothicA1-SemiBold.ttf"),
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
