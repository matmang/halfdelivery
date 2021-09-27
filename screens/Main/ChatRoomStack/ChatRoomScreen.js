import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { DataStore, SortDirection } from "@aws-amplify/datastore";
import Message from "../../../components/Chat/Message";
import MessageInput from "../../../components/Chat/MessageInput";
import { Message as MessageModel, ChatRoom } from "../../../AWS/src/models";

import StoreItem from "../../../components/Matching/StoreItem";
import ChatMenuItem from "../../../components/Chat/ChatMenuItem";
import ChatStoreItem from "../../../components/Chat/ChatStoreItem";

const ChatRoomScreen = (props) => {
  const [messages, setMessages] = useState([]);
  const [chatRoom, setChatRoom] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();

  // ? 첫 렌더링에만 호출. ChatRoom 가져오기.
  useEffect(() => {
    fetchChatRoom();
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

  const fetchChatRoom = async () => {
    if (!route.params.id) {
      console.warn("No chatroom id provided");
    }
    const chatRoom = await DataStore.query(ChatRoom, route.params.id);
    if (!chatRoom) {
      console.error("Couldn't find a chat room with this id");
    } else {
      console.log(chatRoom);
      setChatRoom(chatRoom);
    }
  };

  const fetchMessages = async () => {
    if (!chatRoom) {
      return;
    }
    const fechedMessages = await DataStore.query(
      MessageModel,
      (message) => message.chatroomID("eq", chatRoom?.id),
      {
        sort: (message) => message.createdAt(SortDirection.DESCENDING),
      } // ? chatroomID() 는 Amplify 내장 함수다.
    );
    console.log(fechedMessages);
    setMessages(fechedMessages);
  };

  const matchingRoomInfo =
    props.route.params !== undefined
      ? props.route.params.matchingRoomInfo
      : "No Data";

  // ! 임시 값.
  const storeInfo = undefined;
  const menuInfo = undefined;

  console.log(props.route.params);

  // ? chatRoom 이 null 이면...
  if (!chatRoom) {
    return <ActivityIndicator />;
  }

  return (
    // ? View 대신 SafeAreaView 를 쓰면, 노치 같은 곳에 데이터가 표출되지 않는다. 굳!
    <SafeAreaView style={styles.page}>
      {/* 주문정보 불러오기. */}
      <View style={styles.nonChatBox}>
        <ChatStoreItem storeInfo={storeInfo} />
        <ChatMenuItem menuInfo={menuInfo} />
      </View>

      {/* 채팅메시지 */}
      <FlatList
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted // ? 렌더링 순서 역전 - 왜 이렇게 하는지는, fechedMessages() 함수 속 "sort" 문장 확인해볼 것.
      />
      {/* 채팅메시지 입력 */}
      <MessageInput chatRoom={chatRoom} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
  },
  nonChatBox: {
    padding: 10,
    backgroundColor: "grey",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default ChatRoomScreen;
