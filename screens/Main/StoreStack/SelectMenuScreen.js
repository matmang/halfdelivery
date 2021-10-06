import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import StoreItem from "../../../components/Matching/StoreItem";
import MenuList from "../../../components/Matching/MenuList";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/core";
import { setStore, addMenu, cleanMenus } from "../../../redux/orderSlice";
import colors from "../../../colors";

// import BottomDrawer from "react-native-bottom-drawer-view";
import ShoppingItem from "../../../components/Order/ShoppingItem";
import { ScrollView, FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

// ? BottomDrawer 관련 상수들.
const TAB_BAR_HEIGHT = 49;
const HEADER_HEIGHT = 60;
const ADDITIONAL_HEIGHT = 20;

const SelectMenuScreen = (props) => {
  const storeInfo = props.route.params.storeInfo;
  const [store, setStore] = useState(storeInfo ? storeInfo.store : "all");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // ? 스크린 떠나면 redux 메뉴들 초기화
  useEffect(() => {
    return () => {
      dispatch(cleanMenus(""));
    };
  }, []);

  // ? TabBar를 가리기 위한 시도들...
  // useEffect(() => {
  //   const parent = props.navigation.getParent();
  //   parent.setOptions({
  //     tabBarVisible: false,
  //   });
  //   return () =>
  //     parent.setOptions({
  //       tabBarVisible: true,
  //     });
  // }, []);

  // useEffect(() => {
  //   console.log(props);
  //   props.navigation.setOptions({
  //     tabBarVisible: false,
  //   });
  //   // return () =>
  //   //   navigation.setOptions({
  //   //     tabBarVisible: true,
  //   //   });
  // }, []);

  const menusFromRedux = [];

  const ShoppingCart = () => {
    return (
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.ShoppingCartRoot}>
            <Text style={styles.topText}>장바구니</Text>
            <ShoppingList />
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const ShoppingList = () => {
    return (
      <View style={{ width: "100%", backgroundColor: "pink" }}>
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />
        <ShoppingItem />

        {/* <FlatList
          data={menusFromRedux}
          renderItem={(item) => {
            <ShoppingItem menuInfo={item} />;
          }}
          keyExtractor={(item, index) => index.toString()} // ? Warning 메시지 해결. https://github.com/facebook/react-native/issues/18291
        /> */}
      </View>
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
        <MenuList selectedStore={store} storeInfo={storeInfo} />
      </View>

      {/* 장바구니 BottomSheet */}

      {/* 장바구니 BottomDrawer */}
      {/* <BottomDrawer
        containerHeight={300}
        offset={TAB_BAR_HEIGHT + HEADER_HEIGHT + ADDITIONAL_HEIGHT}
        startUp={false}
        backgroundColor={colors.mainBlue}
        panResponder={false}

        // borderRadius={500}
        // borderTopLeftRadius={500}
        // borderTopRightRadius={500}
      >
        <ShoppingCart />
        <View style={styles.buttonContainer}>
          <Button
            title="선택완료"
            onPress={() => {
              navigation.navigate("SetMatchingTimeScreen", {});
            }}
          />
        </View>
      </BottomDrawer> */}
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
    margin: 10,
    marginTop: 2,
    padding: 2,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "skyblue",
  },
  topText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 3,
  },
  buttonContainer: {
    backgroundColor: "orange",
    marginBottom: 40,
  },
});

export default SelectMenuScreen;
