import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  // Modal,
  SafeAreaView,
  Dimensions,
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
import Modal from "react-native-modal";
import { SendAccount } from "../Matching/Modals";

const MessageInput = ({ chatRoom, me }) => {
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [isBtm, setIsBtm] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCamModal, setIsCamModal] = useState(false);
  const [isAccModal, setIsAccModal] = useState(false);
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

  //! ImagePicker.showImagePicker 는 사라졌다. 나눠서 만들어야함. https://stackoverflow.com/questions/67664806/imagepicker-showimagepicker-is-not-a-function
  //- Image picker
  const pickImage = async (setIsModal) => {
    console.log("pickImage 실행됨");
    await setIsModal(false);

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log("ImagePermission status", status);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1, //? quality 낮추면 서버에 저장되는 파일 용량도 낮아짐.
    });

    console.log("result", result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  //- Camera Launcher
  const takePhoto = async (setIsModal) => {
    console.log("takePhoto 실행됨");
    await setIsModal(false);

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log("CameraPermission status", status);

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
      <Modal
        // coverScreen={false}
        isVisible={isModal}
        animationIn="fadeIn"
        animationOut="fadeOut"
        style={{ justifyContent: "center", alignItems: "center" }}
        onBackdropPress={() => {
          setIsModal(false);
        }}
      >
        <ModalBox>
          <BlueText
            onPress={() => {
              takePhoto(setIsModal);
            }}
          >
            카메라 실행
          </BlueText>

          <BlueText
            onPress={() => {
              pickImage(setIsModal);
            }}
          >
            앨범 실행
          </BlueText>
        </ModalBox>
      </Modal>
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

  //- 계좌번호 보내기
  const sendAccount = async () => {
    const user = await Auth.currentAuthenticatedUser();
    const account = `${me["custom:bank"]} ${me["custom:accountnumber"]}`;
    const newMessage = await DataStore.save(
      new Message({
        content: account,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id,
      })
    );

    updateLastMessage(newMessage);
    resetFields();
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
        {/* 플러스 아이콘 */}
        <PlusBox onPress={expandBtm}>
          <PlusImg
            source={require("../../assets/images/ChatRoomScreen/messageInput/plus.png")}
          />
        </PlusBox>
        <View style={styles.inputContainer}>
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

          {/* 메시지 보내기 버튼 */}
          <SendMsgBox onPress={onPress}>
            <SendMsgImg
              source={require("../../assets/images/ChatRoomScreen/messageInput/send_message.png")}
            />
          </SendMsgBox>
        </View>

        {/* <View
          style={[
            styles.buttonContainer,
            // ? message 가 빈스트링 이면 false 임.
            {
              backgroundColor: message || image ? colors.mainPink : "lightgrey",
            },
          ]}
        ></View> */}
      </InputBox>

      {isBtm && (
        <Btm>
          {/* 카메라/앨범  */}
          <Pressable
            onPress={() => {
              // pickImage();
              setIsCamModal(true);
            }}
          >
            <Image
              source={require("../../assets/images/ChatRoomScreen/messageInput/bottomArea/cam_alb.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 매칭 정보  */}
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../assets/images/ChatRoomScreen/messageInput/bottomArea/matching_info.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 계좌 전송  */}
          <Pressable
            onPress={() => {
              setIsAccModal(true);
            }}
          >
            <Image
              source={require("../../assets/images/ChatRoomScreen/messageInput/bottomArea/send_account.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>

          {/* 연락처 전송  */}
          <Pressable onPress={() => {}}>
            <Image
              source={require("../../assets/images/ChatRoomScreen/messageInput/bottomArea/send_contact.png")}
              style={{ width: 83, height: 96 }}
            />
          </Pressable>
        </Btm>
      )}

      <SendAccount
        isModal={isAccModal}
        setIsModal={setIsAccModal}
        name={me.name}
        bank={me["custom:bank"]}
        accountnumber={me["custom:accountnumber"]}
        sendAccount={sendAccount}
      />
      <CamAlbModal isModal={isCamModal} setIsModal={setIsCamModal} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    flex: 1,
    marginLeft: 12,
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
  buttonContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

const InputBox = styled.View`
  width: 100%;
  height: 65px;
  flex-direction: row;
  padding: 10px;
  background-color: ${colors.primaryBlue};
`;

const PlusBox = styled.Pressable`
  /* background: red; */
  align-self: center;
  margin-left: 12px;
`;

const PlusImg = styled.Image`
  width: 21px;
  height: 21px;
`;

const SendMsgBox = styled(PlusBox)`
  margin-left: 0px;
  margin-right: 12px;
`;

const SendMsgImg = styled(PlusImg)`
  width: 21px;
  height: 14px;
`;

const Btm = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 153px;
  background-color: ${colors.blueGray2};
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
  font-family: "gothica1-regular";
  font-size: 17px;
  margin-left: 8px;
  color: ${colors.primaryBlue};
`;

export default MessageInput;
