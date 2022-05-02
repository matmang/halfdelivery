import { View, Text, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";

export default ({
  text,
  viewStyle,
  textStyle,
  parentSetState,
  //   parentState,
}) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    !!parentSetState && selected ? parentSetState(text) : parentSetState(null);
  }, [selected]);

  return (
    <View style={[{ flexDirection: "row" }, viewStyle]}>
      <Pressable
        onPress={() => {
          selected ? setSelected(false) : setSelected(true);
        }}
      >
        <Image
          source={
            selected
              ? require("../assets/images/ChatRoomScreen/RadioButton_On.png")
              : require("../assets/images/ChatRoomScreen/RadioButton_Off.png")
          }
          style={{ width: 20, height: 20, marginLeft: 20 }}
        />
      </Pressable>
      <Text
        style={[
          { marginLeft: 10, fontFamily: "gothica1-regular", fontSize: 14 },
          textStyle,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};
