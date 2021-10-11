import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";
import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, SafeAreaView, Pressable } from "react-native";
import StoreItem from "../../../components/Matching/StoreItem";
import MenuList from "../../../components/Matching/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/core";
import { setStore, addMenu, cleanMenus, cleanStoreName } from "../../../redux/orderSlice";
import colors from "../../../colors";
import ShoppingItem from "../../../components/Order/ShoppingItem";
import Animated from "react-native-reanimated";
import BottomSheet, { BottomSheetScrollView, BottomSheetFlatList } from "@gorhom/bottom-sheet";

const SelectMenuScreen = (props) => {
  const storeInfo = props.route.params.storeInfo;
  const [store, setStore] = useState(storeInfo ? storeInfo.store : "all");

  // ? orderReducer.menus 가 바뀔때 마다! menus 갱신 됨.
  const menus = useSelector((state) => state.orderReducer);
  console.log("menus: ", menus);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //* ============== BottomSheet 관련 코드임 ===============================
  // hooks
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["8%", "18%", "33%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);
  // render
  // const renderItem = useCallback((item) => <ShoppingItem menuInfo={item} />, []);
  //*  ====================================================================== https://gorhom.github.io/react-native-bottom-sheet/props

  // ? redux 메뉴들 초기화
  useEffect(() => {
    // dispatch(cleanMenus());
    // return () => {
    //   dispatch(cleanStoreName());
    dispatch(cleanMenus());
    // };
  }, []);

  const ShoppingList = () => {
    return (
      <BottomSheetFlatList
        style={{ backgroundColor: colors.mainBlue }}
        contentContainerStyle={styles.contentContainer}
        data={menus}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
        renderItem={({ item }) => <ShoppingItem menuInfo={item.menuInfo} />}
        // inverted

        // data={menus.menus} // ? 임시 설정
        // renderItem={({ item }) => <ChatMenuItem object={item} />}
        // keyExtractor={(item, index) => index.toString()} /
      >
        {/* <View style={{ width: "100%", backgroundColor: "pink" }}>{menus.map(renderItem)}</View> */}
      </BottomSheetFlatList>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={styles.selectedStoreContainer}>
        <View style={styles.selectedStore}>
          <StoreItem storeInfo={storeInfo} />
        </View>
      </View>
      <View style={{ margin: 2 }}>
        <Text style={styles.title}>메뉴 선택</Text>
      </View>
      <View style={styles.list}>
        <MenuList storeInfo={storeInfo} />
      </View>

      {/* 장바구니 BottomSheet */}
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        // bottomInset={10}
        style={{
          // ? 그림자 효과 주기. https://gorhom.github.io/react-native-bottom-sheet/adding-shadow/
          // ! Android 에서는 표출되지 않는 것 같음... 에러임. 해결해야 함.
          shadowColor: "black",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 24,
        }}
      >
        {/* 장바구니 타이틀 */}
        <View style={styles.ShoppingCartRoot}>
          <Text style={styles.topText}>장바구니</Text>
        </View>

        {/* 메뉴목록 */}
        <ShoppingList />

        {/* 선택완료 버튼 */}
        <View style={styles.buttonContainer}>
          {/* <Button
            title="선택완료"
            onPress={() => {
              navigation.navigate("SetMatchingTimeScreen", {});
            }}
          /> */}
          <Pressable
            onPress={() => {
              navigation.navigate("SetMatchingTimeScreen", {});
            }}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>선택완료</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  selectedStore: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    justifyContent: "space-evenly",
    width: "95%",
    height: "auto",
  },
  selectedStoreContainer: {
    width: "95%",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 2,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  list: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "90%",
    height: "65%",
    alignSelf: "center",
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ShoppingCartRoot: {
    // height: "65%",
    // margin: 10,
    // marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.mainPink,
  },
  topText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 3,
  },
  buttonContainer: {
    backgroundColor: colors.mainPink,
    alignItems: "center",
    // backgroundColor: "red",
    padding: 2,
    // marginBottom: 40,
  },
  buttonText: {
    color: colors.mainBlue,
    fontWeight: "bold",
    fontSize: 18,
    // marginVertical: 3,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
  contentContainer: {
    backgroundColor: colors.mainBlue,
    padding: 5,
  },
});

export default SelectMenuScreen;
