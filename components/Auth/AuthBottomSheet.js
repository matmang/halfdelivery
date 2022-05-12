import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { height, width } from "../../utils";
import colors from "../../colors";
import Btn from "./Btn";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import {
  termLocationState,
  termPersonalState,
  termServiceState,
} from "../../recoil/atoms/termAtoms";

const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.4);
`;

const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${width * 24}px;
  margin-top: ${height * 20}px;
`;

const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: ${height * 12}px;
  padding-bottom: ${height * 16}px;
  height: ${height * 78}px;
  margin-top: ${height * 31}px;
  bottom: 0;
`;

const Distributionline = styled.View`
  height: 0;
  width: ${width * 364}px;
  margin-top: ${height * 23}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.unselectedGrey};
`;

const TitleText = styled.Text`
  font-family: "noto-medium";
  font-size: 20px;
  margin-top: ${height * 14}px;
  margin-left: ${width * 24}px;
  margin-bottom: ${height * 34}px;
  line-height: 32px;
`;

const TermText = styled.Text`
  font-family: "noto-medium";
  font-size: 17px;
  color: ${(props) => (props.accent ? colors.primaryBlue : colors.darkGray)};
  margin-right: ${width * 11}px;
`;

const AuthBottomSheet = (props) => {
  const { modalVisible, setModalVisible } = props;
  const [termAllCheck, setTermAllCheck] = useState(false);
  const [termService, setTermService] = useState(false);
  const [termPersonal, setTermPersonal] = useState(false);
  const [termLocation, setTermLocation] = useState(false);
  const [accent, setAccent] = useState(false);

  const [service, setService] = useRecoilState(termServiceState);
  const [personal, setPersonal] = useRecoilState(termPersonalState);
  const [location, setLocation] = useRecoilState(termLocationState);

  const navigation = useNavigation();

  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    setAccent(termService && termPersonal && termLocation);
  }, [termService, termPersonal, termLocation]);

  useEffect(() => {
    if (props.modalVisible) {
      resetBottomSheet.start();
    }
  }, [props.modalVisible]);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  const handleSubmit = () => {
    setService(termService);
    setPersonal(termPersonal);
    setLocation(termLocation);
    setModalVisible(false);
    navigation.navigate("SignUpAuth");
  };

  return (
    <Modal
      visible={modalVisible}
      animationType={"fade"}
      transparent
      statusBarTranslucent
    >
      <Overlay>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            ...styles.bottomSheetContainer,
            transform: [{ translateY: translateY }],
          }}
          {...panResponders.panHandlers}
        >
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Image
              source={require("../../assets/images/delete.png")}
              style={{
                width: width * 16,
                height: height * 16,
                marginLeft: "auto",
                marginRight: width * 24,
                marginTop: height * 16,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <TitleText>
            {"학생증을 준비해주세요\n모바일 학생증도 가능해요!"}
          </TitleText>
          <ButtonContainer>
            <Btn
              text={"카메라/앨범"}
              accent={accent}
              onPress={() => handleSubmit()}
            />
          </ButtonContainer>
        </Animated.View>
      </Overlay>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: height * 434,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default AuthBottomSheet;
