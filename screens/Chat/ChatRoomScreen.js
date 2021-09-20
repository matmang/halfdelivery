import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import MessageInput from "../../components/Chat/MessageInput";
import Message from "../../components/Chat/Message";
import ChatRooms from "../../sampleData/ChatRooms";
import StoreItem from "../../components/Matching/StoreItem";
import ChatMenuItem from "../../components/Chat/ChatMenuItem";
import ChatStoreItem from "../../components/Chat/ChatStoreItem";

export default (props) => {
  const matchingRoomInfo = props.route.params.matchingRoomInfo;
  const menuInfo = props.route.params.menuInfo;
  const storeInfo = props.route.params.storeInfo;

  const navigation = useNavigation();

  // ? 헤더바 이름을 여기서도 바꿀 수 있다.
  // navigation.setOptions({ title: "여기서도 바꿀 수 있다." });
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
        data={ChatRooms.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted // ? 렌더링 순서 역전
      />
      {/* 채팅메시지 입력 */}
      <MessageInput />
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
