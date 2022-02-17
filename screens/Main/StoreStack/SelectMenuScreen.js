import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native-gesture-handler";
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import StoreComponent from "../../../components/Matching/StoreComponent";
import MenuList from "../../../components/Matching/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/core";
import {
  setStore,
  addMenu,
  cleanMenus,
  cleanStoreName,
} from "../../../redux/orderSlice";
import colors from "../../../colors";
import ShoppingItem from "../../../components/Order/ShoppingItem";
import Animated from "react-native-reanimated";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import { Picker } from "@react-native-picker/picker";

const SelectMenuScreen = (props) => {
  const storeInfo = props.route.params.storeInfo;
  const [store, setStore] = useState(storeInfo ? storeInfo.store : "all");
  let isHost = false;
  if (props.route.params.isHost === undefined) {
    isHost = false;
  } else {
    isHost = props.route.params.isHost;
  }

  // ? orderReducer.menus 가 바뀔때 마다! menus 갱신 됨.
  const menus = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //* ============== BottomSheet 관련 코드임 ===============================
  // hooks haha
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => ["4%", "10%", "47.5%"], []);

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
  //*  ============== https://gorhom.github.io/react-native-bottom-sheet/props

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
        style={{ backgroundColor: "white" }}
        contentContainerStyle={styles.contentContainer}
        data={menus}
        keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
        renderItem={({ item }) => <ShoppingItem menuInfo={item.menuInfo} />}
      ></BottomSheetFlatList>
    );
  };

  const nextScreen = (isHost) => {
    if (isHost) {
      navigation.navigate("SetMatchingTimeScreen", {
        storeInfo,
        isHost,
      });
    } else {
      //TODO: (방에서 메뉴수정하는 경우) 매치방으로 이동.
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center", // 가로 정렬
        flexDirection: "column",
      }}
    >
      <View style={styles.storeComponent}>
        {isHost ? (
          <StoreComponent storeInfo={storeInfo} />
        ) : (
          // <ActivityIndicator />
          <StoreComponent storeInfo={storeInfo} />
        )}
      </View>
      {/* <Picker /> */}
      <View style={{ backgroundColor: "lightgrey", width: "100%" }}>
        <Text style={styles.title}>Picker 자리</Text>
      </View>
      <View style={styles.menuList}>
        <MenuList storeInfo={storeInfo} />
      </View>

      {/* 장바구니 BottomSheet */}
      <BottomSheet
        ref={sheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
        // bottomInset={10}
        backgroundStyle={{
          //? 스타일링: https://github.com/gorhom/react-native-bottom-sheet/issues/155
          backgroundColor: colors.blueGray2,
        }}
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
          <Pressable
            onPress={() => nextScreen(isHost)}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>파트너 구하러 가기</Text>
          </Pressable>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storeComponent: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  menuList: {
    // borderWidth: 1,
    // borderColor: "red",
    backgroundColor: "lightgrey",
    width: "100%",
    // height: "65%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  ShoppingCartRoot: {
    // height: "65%",
    // margin: 10,
    // marginBottom: 5,
    // alignItems: "center",
    justifyContent: "center",
    marginLeft: 28,
    marginBottom: 16,
    backgroundColor: colors.blueGray2,
  },
  topText: {
    color: colors.primaryBlue,
    fontFamily: "noto-regular",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginVertical: 3,
  },
  buttonContainer: {
    backgroundColor: colors.primaryPink,
    alignItems: "center",
    // backgroundColor: "red",
    padding: 2,
    marginBottom: 40,
  },
  buttonText: {
    color: colors.primaryBlue,
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
    backgroundColor: "white",
    padding: 5,
  },
});

export default SelectMenuScreen;
