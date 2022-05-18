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
  Platform,
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
// import {
//   MatchingCancelled,
//   EjectPartner,
//   CancelMatching,
// } from "../../../components/Chat/modals";
// import {
//   InputOrderPrice,
//   RequestAdditionalTime,
//   AddAdditionalTime,
//   ViewProfilePartner,
//   FinalCheck,
//   EnterMatching,
// } from "../../../components/Matrching/modals/";
import Dropdown from "../../../components/Dropdown";
// import { SelectPlatform } from "../../../components/Matching/modals";
import TEST_react_native_expo_image_cropper from "./TEST_react_native_expo_image_cropper";
import TEST_expo_image_crop from "./TEST_expo_image_crop";
import {
  Participant,
  ParticipantEmpty,
  PriceReadyBoxHost,
  PriceReadyBoxPartner,
} from "../../../components/Matching";
import ImageView from "react-native-image-viewing";
import Timer from "../../../components/Timer";
import MyOrderImages from "../../../components/Matching/MyOrderImages";
import Dropdown_noModal from "../../../components/Dropdown_noModal";
import DeliveryInfo_DlvTip from "../../../components/Matching/waiting/DeliveryInfo_DlvTip";
import BtmLastMessage from "../../../components/Chat/BtmLastMessage";

import talkOn from "../../../assets/images/BottomTabNav/talk.png";
import onMatching from "../../../assets/images/BottomTabNav/onMatching.png";
import DropDownPicker from "react-native-dropdown-picker";
import { width, height } from "../../../utils";
import ButtonBottomTab from "../../../components/common/buttons/ButtonBottomTab";
import ButtonModalBottom from "../../../components/common/buttons/ButtonModalBottom";
import ButtonModalBottomOutlined from "../../../components/common/buttons/ButtonModalBottomOutlined";

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

const BottomTab = (props) => {
  return (
    <BottomTabView>
      <Image source={props} style={{ width: "110%", height: "110%" }} />
    </BottomTabView>
  );
};

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

      tabBarBackground: () => {
        return BottomTab(onMatching);
      },
    });
  }, [navigation, is3dots]);

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
      // console.log("chatRoom이다", chatRoom);
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
  // console.log("authUser", authUser);

  // ? chatRoom 이 null 이면...
  // if (!chatRoom) {
  //   return <ActivityIndicator />;
  // }

  const openImagePicker = () => {
    ImagePicker.openPicker({
      width: DROPDOWN_WIDTH,
      height: 400,
      cropping: true,
    }).then((image) => {
      // console.log(image);
    });
  };

  const [school, setSchool] = useState("");
  const [college, setCollege] = useState("");
  const [accent, setAccent] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [collegeOpen, setCollegeOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [schoolItems, setSchoolItems] = useState([
    { label: "한양대학교 ERICA", value: "ERICA" },
  ]);
  const [collegeItems, setCollegeItems] = useState([
    { label: "공학대학", value: "1" },
    { label: "소프트웨어융합대학", value: "2" },
    { label: "약학대학", value: "3" },
    { label: "과학기술융합대학", value: "4" },
    { label: "국제문화대학", value: "5" },
    { label: "언론정보대학", value: "6" },
    { label: "경상대학", value: "7" },
    { label: "디자인대학", value: "8" },
    { label: "예체능대학", value: "9" },
    { label: "창의융합교육원", value: "10" },
  ]);

  const DROPDOWN_WIDTH = width * 300;

  const PLACE_HOLDER = "단과대학을 선택해주세요";

  const [collegePlaceholder, setCollegePlaceholder] = useState(PLACE_HOLDER);

  // console.log("collegePlaceholder", collegePlaceholder);
  return (
    <View>
      <ButtonBottomTab
        text={"확인"}
        accent={""}
        onPress={() => {
          handleSubmit();
        }}
      />
      <ButtonModalBottom
        text={"확인"}
        accent={""}
        onPress={() => {
          handleSubmit();
        }}
      />

      <ButtonModalBottomOutlined
        text={"확인"}
        accent={""}
        onPress={() => {
          handleSubmit();
        }}
      />

      <DropDownPicker
        //! DropDown 은 ScrollView 안에 있으면 안 된다. (같은 스크롤 방향이면 안 됨, Nested ScrollView error)
        open={collegeOpen}
        value={value}
        setOpen={setCollegeOpen}
        setValue={setValue}
        setItems={setCollegeItems}
        items={collegeItems}
        placeholder={collegePlaceholder}
        textStyle={{
          color: collegePlaceholder === PLACE_HOLDER ? "#ADB1C0" : "black",
        }}
        //! border 스타일링 주의: containerStyle 로 borderColor, backgroundColor 를 주면, Dropdown 정상 작동 하지 않는다. : https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/rules/#avoid-inappropriate-styles
        style={{
          width: DROPDOWN_WIDTH,
          borderRadius: 8,
          borderWidth: 1.5,
          borderColor:
            collegePlaceholder === PLACE_HOLDER ? "#ADB1C0" : "#0E257C",
        }}
        disableBorderRadius={false}
        dropDownContainerStyle={{
          width: DROPDOWN_WIDTH,
          borderTopWidth: 0,
          marginTop: height * 1,
          borderColor: "white",
          paddingTop: height * 8,
          paddingBottom: height * 8,
          elevation: 6, //! 안드로이드는 여기다가 쓰는게 맞음
        }}
        renderListItem={(props) => {
          return (
            <Pressable
              {...props}
              style={{
                backgroundColor:
                  props.label === collegePlaceholder ? "#F5F6F6" : "#FFFFFF",
                width: DROPDOWN_WIDTH,
                height: height * 48,
                justifyContent: "center",
                paddingLeft: width * 16,
              }}
              onPress={() => {
                setCollege(props.label);
                setCollegePlaceholder(props.label);
                setCollegeOpen(false);
                // setIsSelected(true);
              }}
              onSelectItem={(item) => {
                setCollege(item.label);
                setCollegePlaceholder(item.label);
              }}
            >
              <Text>최소주문금액 </Text>
              <Text>{props.label}</Text>

              {/* <Text>은행명</Text> */}
            </Pressable>
          );
        }}
      />

      {/* <EnterMatching />

      <FinalCheck />

      <InputOrderPrice />
      <RequestAdditionalTime />
      <AddAdditionalTime />
      <ViewProfilePartner /> */}

      {/* <BtmLastMessage
        isMaster={true}
        username="윤동현"
        message="나는 누굴까 내일을 꿈꾸는가 "
      />

      <BtmLastMessage
        isMaster={false}
        username="최수민"
        message="어떤이는 꿈을 잊은채로 살고 어떤이는 남의 꿈을 뺏고 살며 다른이는 꿈은 이런거라 하네
        세상에 이처럼 많은 사람들과 세상에 이처럼 많은 개성들 저마다 자기가 옳다말을 하고 꿈이란 이런거라 말하지만"
      /> */}
      {/* <DeliveryInfo_DlvTip /> */}

      <View style={{ marginTop: 300 }}>
        <MyOrderImages />
      </View>
      <Participant />
      <ParticipantEmpty />
      <PriceReadyBoxHost />
      <PriceReadyBoxPartner />
      <Timer />
      {/* 
      <ImageView
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
      />
    </ScrollView>

    // <View style={styles.page}>
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
    </View>

    //! View 대신 SafeAreaView 를 쓰면, 노치 같은 곳에 데이터가 표출되지 않는다. 굳!
    // <SafeAreaView style={styles.page}>
    //   {is3dots && (
    //     <TopBox>
    //       <Pressable
    //         style={{
    //           marginLeft: 20,
    //           marginVertical: 10,
    //           flexDirection: "row",
    //         }}
    //         onPress={() => {
    //           console.log("Im pressed");
    //           alert("신고해");
    //         }}
    //       >
    //         <Image
    //           source={require("../../../assets/images/ChatRoomScreen/alert4x.png")}
    //           style={{ width: 18, height: 18.5 }}
    //         />

    //         <TextBox>신고하기</TextBox>
    //         <MaterialCommunityIcons
    //           name="arrow-top-right"
    //           size={24}
    //           color="black"
    //           style={{ marginRight: 24 }}
    //         />
    //       </Pressable>
    //       <Pressable
    //         style={{
    //           marginLeft: 20,
    //           marginVertical: 10,
    //           flexDirection: "row",
    //         }}
    //         onPress={() => {}}
    //       >
    //         <Image
    //           source={require("../../../assets/images/ChatRoomScreen/ban4x.png")}
    //           style={{ width: 18, height: 18 }}
    //         />
    //         <TextBox>차단하기</TextBox>
    //         <MaterialCommunityIcons
    //           name="arrow-top-right"
    //           size={24}
    //           color="black"
    //           style={{ marginRight: 24 }}
    //         />
    //       </Pressable>
    //       <Pressable
    //         style={{
    //           marginLeft: 20,
    //           marginVertical: 10,
    //           flexDirection: "row",
    //         }}
    //         onPress={() => {}}
    //       >
    //         <Image
    //           source={require("../../../assets/images/ChatRoomScreen/leave4x.png")}
    //           style={{ width: 15.95, height: 22.37 }}
    //         />
    //         <TextBox>채팅방 나가기</TextBox>
    //         <MaterialCommunityIcons
    //           name="arrow-top-right"
    //           size={24}
    //           color="black"
    //           style={{ marginRight: 24 }}
    //         />
    //       </Pressable>
    //     </TopBox>
    //   )}
    //   {/* //TODO: 어떠 컴포넌트로 위치시켜야 할까.. */}
    //   {/* <EjectModal /> */}
    //   <ProcessBox>
    //     <ProcessImg
    //       source={require("../../../assets/images/ChatRoomScreen/processBox/process_menuChecked.png")}
    //     />
    //   </ProcessBox>
    //   {isDetail && <InfoDetail></InfoDetail>}
    //   {/* 채팅메시지 */}
    //   <FlatList
    //     data={messages}
    //     renderItem={({ item }) => (
    //       <Message message={item} masterId={chatRoom.master} />
    //     )}
    //     inverted // ? 렌더링 순서 역전 - 왜 이렇게 하는지는, fechedMessages() 함수 속 "sort" 문장 확인해볼 것.
    //   />
    //   {/* 채팅메시지 입력 */}
    //   <MessageInput chatRoom={chatRoom} me={authUser.attributes} />
    // </SafeAreaView>
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
  font-family: "gothica1-regular";
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
  font-family: "gothica1-regular";
  font-size: 17px;
  line-height: 19px;
  margin-left: 12px;
  margin-right: auto;
`;

export default ChatRoomScreen;
