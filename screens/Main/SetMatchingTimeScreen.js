import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import QuantitySelector from "../../components/Matching/QuantitySelector";
import { connect } from "react-redux";
// import {  } from "../../redux/Order/orderStore";

const SetMatchingTimeScreen = (props) => {
  const menuInfo = props.route.params.menuInfo;
  const storeInfo = props.route.params.storeInfo;

  const navigation = useNavigation();
  const [time, setTime] = useState(10);
  const [persons, setPersons] = useState(2);

  return (
    <View style={styles.root}>
      {/* 매칭 요청 시간 */}
      <View style={styles.setTimeView}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>매칭 요청 시간</Text>
        </View>
        <View style={styles.rightContainer}>
          <Picker
            selectedValue={time}
            onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="10분" value={10} />
            <Picker.Item label="7분" value={7} />
            <Picker.Item label="5분" value={5} />
          </Picker>
        </View>
      </View>

      {/* 매칭 희망 인원 */}
      <View style={styles.setPersonsView}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>매칭 희망 인원</Text>
        </View>
        <View style={styles.rightContainer}>
          <QuantitySelector quantity={persons} setQuantity={setPersons} />
        </View>
      </View>

      <View style={styles.buttonView}>
        <View style={styles.buttonContainer}>
          <Button
            title="매칭방 만들기"
            onPress={() =>
              navigation.navigate("ChatRoomScreen", {
                matchingRoomInfo: { time, persons },
                menuInfo,
                storeInfo,
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
  },
  setTimeView: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  leftContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    flex: 3,
    width: "auto",
    alignItems: "flex-end",
  },
  picker: {
    width: "50%",
  },
  setPersonsView: {
    flex: 1,
    flexDirection: "row",
  },
  buttonView: {
    flex: 1,
    // alignContent: "flex-end",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "80%",
    borderWidth: 1,
    borderRadius: 80,
    marginBottom: 30,
  },
});

// const mapStateToProps = (state, ownProps) => {
//   // 1. "state" : from "store"
//   // 1. "ownProps" : component Home's ownProps
//   // console.log(state, ownProps);
//   console.log("mapStateToProps", state);
//   console.log("mapStateToProps", ownProps);

//   // ! In order to PUT states to ownProps, We use React-Redux
//   // ! to do that, "return".
//   // ? whatever I return here, It will be added to component "Home" as a "new props"
//   return { sexy: true };
// };

// export default connect(mapStateToProps)(SetMatchingTimeScreen);

export default SetMatchingTimeScreen;
