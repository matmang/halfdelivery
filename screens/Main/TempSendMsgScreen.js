import React, { Component, useEffect, useState } from "react";
import { View, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../components/Main/styles";

export default () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [texts, setTexts] = useState("empty haha");

  return (
    <View style={styles.centerize}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={setText}
        maxLength={100}
      />
      <Button
        title="전송"
        onPress={() => {
          setText("");
        }}
      />
    </View>
  );
};
