import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Button,
  Pressable,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ActivityIndicator,
  Modal,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Auth, DataStore, SortDirection } from "aws-amplify";
import Message from "../../../components/Chat/Message";
import MessageInput from "../../../components/Chat/MessageInput";
import {
  Message as MessageModel,
  ChatRoom,
  Order,
} from "../../../AWS/src/models";
import { useSelector, useDispatch } from "react-redux";
import { setStore, addMenu, cleanMenus } from "../../../redux/orderSlice";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components";
import Svg, { Path } from "react-native-svg";
import {
  OnMatching,
  Matched,
  Failed,
  OnTransfering,
  Transferred,
} from "../../../components/Statuses";
import colors from "../../../colors";
import { MaterialIcons } from "@expo/vector-icons";
import EjectModal from "../../../components/Chat/Modals/EjectModal_deprecated/EjectModal";
import {
  MatchingCancelled,
  EjectPartner,
  CancelMatching,
} from "../../../components/Chat/Modals/";
import {
  InputOrderPrice,
  RequestAdditionalTime,
  AddAdditionalTime,
  ViewProfilePartner,
} from "../../../components/Matching/Modals/";
import Dropdown from "../../../components/Dropdown";
import SelectPlatform from "../../../components/Matching/Modals/SelectPlatform";
import TEST_react_native_expo_image_cropper from "./TEST_react_native_expo_image_cropper";
import TEST_expo_image_crop from "./TEST_expo_image_crop";
import {
  Participant,
  ParticipantEmpty,
  PriceReadyBoxHost,
  PriceReadyBoxPartner,
} from "../../../components/Matching";

import ImageView from "react-native-image-viewing";

const images = [
  {
    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
  },
  {
    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
  },
  {
    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
  },
];

const ChatRoomScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [chatRoom, setChatRoom] = useState(null);
  const [is3dots, setIs3dots] = useState(false);
  const [isDetail, setIsDetail] = useState(false);
  const [authUser, setAuthUser] = useState([]);
  const route = useRoute();
  const [selectedDropdown, setSelectedDropdown] = useState(undefined);

  const [visible, setIsVisible] = useState(false);

  //- 헤더바, 점3개 버튼누르면 작동
  const navigation = props.navigation;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={{ marginRight: 20, marginVertical: 10, flexDirection: "row" }}
          onPress={() => {
            is3dots ? setIs3dots(false) : setIs3dots(true);
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </Pressable>
      ),
    });
  }, [navigation, is3dots]);
  // console.log("is3dots", is3dots);

  // const storeInfo = route.params.storeInfo;
  // console.log("storeInfo", storeInfo);
  // const storeName = storeInfo.store;
  // const menus = route.params.menus;

  // ? 첫 렌더링에만 호출. ChatRoom 가져오기.
  useEffect(() => {
    fetchChatRoom();
    // updateOrder();
  }, []);

  // ? chatRoom 에 변화가 있을때마다 호출. MessageModel 가져오기.
  useEffect(() => {
    if (!chatRoom) {
      return;
    } else {
      fetchMessages();
    }
  }, [chatRoom]);

  // ? Listening to new messages. https://docs.amplify.aws/lib/datastore/real-time/q/platform/js/
  // ? In Real Time!
  // ? 새 메시지가 생길때마다 렌더링 하기위해서, messages state를 수정하자.
  useEffect(() => {
    // ? 그러기 위해서 우선, Message 모델을 구독, subscription 해야 한다.
    const subscription = DataStore.observe(MessageModel).subscribe((msg) => {
      // console.log(msg.model, msg.opType, msg.element);
      // ? 새 메시지 추가!
      if (msg.model === MessageModel && msg.opType === "INSERT") {
        // * setState 에 함수를 넣으면, 그 함수의 첫번쨰 인자는 현재 state를 갖는다.
        setMessages((existingMessage) => [msg.element, ...existingMessage]);
      }
    });
    // ? 죽을땐 unsubscribe
    return () => subscription.unsubscribe();
  }, []);

  // ? 채팅방 가져오기.
  const fetchChatRoom = async () => {
    if (!route.params.id) {
      console.warn("No chatroom id provided");
    }
    const chatRoom = await DataStore.query(ChatRoom, route.params.id);
    if (!chatRoom) {
      console.error("Couldn't find a chat room with this id");
    } else {
      console.log("chatRoom이다", chatRoom);
      setChatRoom(chatRoom);
    }
  };

  // ? 메시지 가져오기.
  const fetchMessages = async () => {
    if (!chatRoom) {
      return;
    }
    const fechedMessages = await DataStore.query(
      MessageModel,
      (message) => message.chatroomID("eq", chatRoom?.id),
      {
        sort: (message) => message.createdAt(SortDirection.DESCENDING),
      } // ? ("eq", chatRoom?.id) 는 Amplify 내장 함수다.
    );
    console.log("펫치드메시지스", fechedMessages);
    setMessages(fechedMessages);
  };

  useEffect(() => {
    const fetchAuthUser = async () => {
      const _authUser = await Auth.currentAuthenticatedUser();
      setAuthUser(_authUser);
    };
    fetchAuthUser();
  }, []);
  console.log("authUser", authUser);

  // ? chatRoom 이 null 이면...
  if (!chatRoom) {
    return <ActivityIndicator />;
  }

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  return (
    <View>
      <Participant />
      <ParticipantEmpty />
      <PriceReadyBoxHost />
      <PriceReadyBoxPartner />

      {/* <ImageView
        images={images}
        imageIndex={0}
        visible={true}
        onRequestClose={() => setIsVisible(false)}
        FooterComponent={({ imageIndex }) => (
          <View
            style={{
              height: "20%",
              backgroundColor: "red",
              marginBottom: 100,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              {imageIndex}
            </Text>
          </View>
        )}
      /> */}

      {/* <TEST_react_native_expo_image_cropper /> */}
      {/* <TEST_expo_image_crop /> */}
    </View>
    // <ScrollView style={styles.page}>
    //   {/* <Pressable
    //     style={{ width: "100%", height: 50, backgroundColor: "blue" }}
    //     // onPress={openImagePicker}
    //   />
    //   <View
    //     style={{
    //       width: 364,
    //       height: 100,
    //       backgroundColor: "lightgreen",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       alignSelf: "center",
    //     }}
    //   >
    //     <Dropdown
    //       placeholder="은행을 선택해주세요"
    //       data={[
    //         { label: "One", value: "1" },
    //         { label: "Two", value: "2" },
    //         { label: "Three", value: "3" },
    //         { label: "Four", value: "4" },
    //         { label: "Five", value: "5" },
    //       ]}
    //       onSelect={setSelectedDropdown}
    //     />
    //   </View>

    //   <ViewProfilePartner />
    //   <AddAdditionalTime />
    //   <RequestAdditionalTime />
    //   <InputOrderPrice />
    //   <CancelMatching />
    //   <MatchingCancelled />
    //   <EjectPartner /> */}
    // </ScrollView>

    // // ? View 대신 SafeAreaView 를 쓰면, 노치 같은 곳에 데이터가 표출되지 않는다. 굳!
    // // <SafeAreaView style={styles.page}>
    // //   {is3dots && (
    // //     <TopBox>
    // //       <Pressable
    // //         style={{
    // //           marginLeft: 20,
    // //           marginVertical: 10,
    // //           flexDirection: "row",
    // //         }}
    // //         onPress={() => {
    // //           console.log("Im pressed");
    // //           alert("신고해");
    // //         }}
    // //       >
    // //         <Image
    // //           source={require("../../../assets/images/ChatRoomScreen/alert4x.png")}
    // //           style={{ width: 18, height: 18.5 }}
    // //         />

    // //         <TextBox>신고하기</TextBox>
    // //         <MaterialCommunityIcons
    // //           name="arrow-top-right"
    // //           size={24}
    // //           color="black"
    // //           style={{ marginRight: 24 }}
    // //         />
    // //       </Pressable>
    // //       <Pressable
    // //         style={{
    // //           marginLeft: 20,
    // //           marginVertical: 10,
    // //           flexDirection: "row",
    // //         }}
    // //         onPress={() => {}}
    // //       >
    // //         <Image
    // //           source={require("../../../assets/images/ChatRoomScreen/ban4x.png")}
    // //           style={{ width: 18, height: 18 }}
    // //         />
    // //         <TextBox>차단하기</TextBox>
    // //         <MaterialCommunityIcons
    // //           name="arrow-top-right"
    // //           size={24}
    // //           color="black"
    // //           style={{ marginRight: 24 }}
    // //         />
    // //       </Pressable>
    // //       <Pressable
    // //         style={{
    // //           marginLeft: 20,
    // //           marginVertical: 10,
    // //           flexDirection: "row",
    // //         }}
    // //         onPress={() => {}}
    // //       >
    // //         <Image
    // //           source={require("../../../assets/images/ChatRoomScreen/leave4x.png")}
    // //           style={{ width: 15.95, height: 22.37 }}
    // //         />
    // //         <TextBox>채팅방 나가기</TextBox>
    // //         <MaterialCommunityIcons
    // //           name="arrow-top-right"
    // //           size={24}
    // //           color="black"
    // //           style={{ marginRight: 24 }}
    // //         />
    // //       </Pressable>
    // //     </TopBox>
    // //   )}
    // //   {/* //TODO: 어떠 컴포넌트로 위치시켜야 할까.. */}
    // //   {/* <EjectModal /> */}
    // //   <ProcessBox>
    // //     <ProcessImg
    // //       source={require("../../../assets/images/ChatRoomScreen/processBox/process_menuChecked.png")}
    // //     />
    // //   </ProcessBox>
    // //   {isDetail && <InfoDetail></InfoDetail>}
    // //   {/* 채팅메시지 */}
    // //   <FlatList
    // //     data={messages}
    // //     renderItem={({ item }) => (
    // //       <Message message={item} masterId={chatRoom.master} />
    // //     )}
    // //     inverted // ? 렌더링 순서 역전 - 왜 이렇게 하는지는, fechedMessages() 함수 속 "sort" 문장 확인해볼 것.
    // //   />
    // //   {/* 채팅메시지 입력 */}
    // //   <MessageInput chatRoom={chatRoom} me={authUser.attributes} />
    // // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#F5F6F6",
    // backgroundColor: "red",
    flex: 1,
  },
  chatMenuList: {
    marginTop: 5,
    padding: 10,
    backgroundColor: "lightgrey",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

const TopBox = styled.View`
  flex: 1;
  padding: 10px;
  justify-content: center;
  background-color: white;
  /* opacity: 0.8; */
  width: 100%;
  height: 144px;
  position: absolute;
  z-index: 3;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
`;

const ProcessBox = styled.View`
  margin-top: 12px;
  border-radius: 16px;
  align-self: center;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
`;

const ProcessImg = styled.Image`
  width: 364px;
  height: 50px;
  border-radius: 16px;
  /* border-width: 1px; */
`;

const RoomInfoBox = styled.View`
  /* flex: 1; */
  /* padding: 10px; */
  align-items: center;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: 48px;
  z-index: 1;
`;

const InfoDetail = styled.View`
  width: 100%;
  height: 257px;
  background-color: white;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

const RoomText = styled.Text`
  font-family: "noto-regular";
  font-size: 17px;
  text-decoration: underline;
  color: ${colors.primaryBlue};
  margin-left: 14px;
`;

const PrfImgView = styled.View`
  flex-direction: row;
  /* //! 안드로이드는 margin-left: 33% 가 맞음 */
  /* margin-left: 33%; */
  margin-left: 25%;
  margin-right: auto;
  /* border-width: 1px; */
  justify-content: space-evenly;
`;

const ProfileImg = styled.Image`
  height: 22px;
  width: 22px;
  border-radius: 22px;
  margin-left: 2%;
  margin-right: 3px;
  border-width: 1px;
`;

const TextBox = styled.Text`
  /* //! noto로 폰트바꾸면 이상하게 줄맞춤이 깨진다.. */
  font-family: "noto-regular";
  font-size: 17px;
  line-height: 19px;
  margin-left: 12px;
  margin-right: auto;
`;

export default ChatRoomScreen;
