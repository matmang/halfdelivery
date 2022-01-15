import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import { Auth, DataStore, Storage } from "aws-amplify";
import { Message, ChatRoom } from "../../AWS/src/models";
import colors from "../../colors";
import * as ImagePicker from "expo-image-picker";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ReactNativeModal from "react-native-modal";

const InputBox = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: ${colors.mainBlue};
`;

const Btm = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 153px;
  background-color: ${colors.unAccent};
`;

const ImgProgress = styled.View`
  height: 3px;
  border-radius: 5px;
  background-color: lightblue;
  /* width: 100%; */
  width: ${(props) => props.progress * 100}%;
  margin-right: auto;
`;

const ModalBox = styled.View`
  width: 60%;
  height: 20%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
`;

const BlueText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  margin-left: 8px;
  color: ${colors.mainBlue};
`;

const MessageInput = ({ chatRoom }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [isBtm, setIsBtm] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isModal, setIsModal] = useState(false);
  console.log(`image ${image}`);

  //- 메시지 보내는 함수
  const sendMessage = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const newMessage = await DataStore.save(
      new Message({
        content: message,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id,
      })
    );
    updateLastMessage(newMessage);
    resetFields();
  };

  const updateLastMessage = async (newMessage) => {
    // ? Data in DataStore is NOT Mutable. 그래서 cpoyOf 쓰는 거임!
    DataStore.save(
      ChatRoom.copyOf(chatRoom, (updatedChatRoom) => {
        updatedChatRoom.LastMessage = newMessage;
      })
    );
  };

  const onPress = () => {
    if (image) {
      sendImage();
    } else if (message) {
      sendMessage();
    } else {
    }
  };

  const resetFields = () => {
    setMessage("");
    setImage(null);
    setProgress(0);
  };

  const expandBtm = () => {
    isBtm ? setIsBtm(false) : setIsBtm(true);
  };

  console.log(isBtm);

  //- Image picker
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library | 이제 permission 안 필요한듯.
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1, //? quality 낮추면 서버에 저장되는 파일 용량도 낮아짐.
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //- Camera Launcher
  const takePhoto = async () => {
    // No permissions request is necessary for launching the image library | 이제 permission 안 필요한듯.
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // - 카메라/앨범 선택 Modal
  const CamAlbModal = ({ isModal, setIsModal }) => {
    return (
      <ReactNativeModal
        isVisible={isModal}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <ModalBox>
          <BlueText
            onPress={() => {
              ImagePicker.getCameraPermissionsAsync().then((res) => {
                console.log(res);
              });
              // takePhoto();
              // setIsModal(false);
            }}
          >
            카메라 실행
          </BlueText>

          <BlueText
            onPress={() => {
              pickImage();
              setIsModal(false);
            }}
          >
            앨범 실행
          </BlueText>
          <BlueText
            onPress={() => {
              setIsModal(false);
            }}
          >
            창 닫기
          </BlueText>
        </ModalBox>
      </ReactNativeModal>
    );
  };

  //- Send Images
  const progressCallback = (progress) => {
    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
    setProgress(progress.loaded / progress.total);
  };

  const sendImage = async () => {
    if (!image) {
      return null;
    }

    const blob = await getImageBlob();
    const { key } = await Storage.put(`${uuidv4()}.png`, blob, {
      progressCallback,
    });

    // send message
    const user = await Auth.currentAuthenticatedUser();
    const newMessage = await DataStore.save(
      new Message({
        content: message,
        image: key,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id,
      })
    );

    updateLastMessage(newMessage);
    resetFields();
  };

  const getImageBlob = async () => {
    if (!image) {
      return null;
    }

    const response = await fetch(image);
    const blob = await response.blob();
    return blob;
  };

  return (
    // ? KeyboardAvoidingView 를 사용해야 키보드가 표출될떄 화면을 안 가린다.. 참조: https://reactnative.dev/docs/keyboardavoidingview
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      {image && (
        <View>
          <AntDesign
            name="close"
            size={24}
            color="black"
            style={{ margin: 5 }}
            onPress={() => setImage(null)}
          />
          <Image
            source={{ uri: image }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <ImgProgress progress={progress} />
        </View>
      )}
      <InputBox>
        <View style={styles.inputContainer}>
          {/* 플러스 아이콘 */}
          <Entypo
            name="plus"
            size={24}
            color={colors.mainBlue}
            style={styles.icon}
            onPress={expandBtm}
          />

          {/* 메시지 입력칸 */}
          <TextInput
            style={styles.input}
            value={message}
            onChangeText={setMessage} // ? 이 코드는 아래코드와 "똑같다".
            // ?   onChangeText={(newMessage) => setMessage(newMessage)}
            placeholder="텍스트 박스"
            autoCorrect={false}
            autoCapitalize="none"
          />

          {/* 마이크 아이콘 */}
          {/* <MaterialCommunityIcons
            name="microphone"
            size={24}
            color="grey"
            style={styles.icon}
          /> */}
        </View>

        <View
          style={[
            styles.buttonContainer,
            // ? message 가 빈스트링 이면 false 임.
            {
              backgroundColor: message || image ? colors.mainPink : "lightgrey",
            },
          ]}
        >
          {/* 메시지 보내기 버튼 */}
          <Feather
            name="arrow-up"
            size={30}
            color={message ? colors.mainBlue : "grey"}
            style={styles.icon}
            onPress={onPress}
          />
        </View>
      </InputBox>

      {isBtm && (
        <Btm>
          {/* 카메라/앨범  */}
          <Pressable
            onPress={() => {
              // pickImage();
              setIsModal(true);
            }}
          >
            <Image
              source={require("../../assets/images/ChatRoomScreen/cam_alb.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 카메라 아이콘 */}
          {/* <Pressable onPress={takePhoto}></Pressable> */}

          {/* 주문확인  */}
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../assets/images/ChatRoomScreen/checkOrder.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 계좌전송  */}
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../assets/images/ChatRoomScreen/sendAcc.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 송금확인  */}
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../assets/images/ChatRoomScreen/checkTransfer.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>
        </Btm>
      )}

      <CamAlbModal isModal={isModal} setIsModal={setIsModal} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageInput;
