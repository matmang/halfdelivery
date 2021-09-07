import React, { useState } from "react";
import * as Font from "expo-font";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Gate from "./components/Gate";
import store, { persistor } from "./redux/store";
import AppLoading from "expo-app-loading";

const getFonts = () => {
  return Font.loadAsync({
    'noto-regular' : require('./assets/fonts/NotoSansKR-Regular.otf'),
    'nunito-regular' : require('./assets/fonts/NunitoSans-Regular.ttf'),
  })
}

export default function App() {
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
