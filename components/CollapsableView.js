import React, { useCallback, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import colors from "../colors";
import { height, width } from "../utils";

function CollapsibleView(props) {
  const { sectionTitle, maxheight, children } = props;
  const [isEnableCollapsible, setIsEnableCollapsible] = useState(true);
  const [isFirst, setIsFirst] = useState(true);
  const [contentLineHeight, setContentLineHeight] = useState(0);
  const [contentLineCnt, setContentLineCnt] = useState(0);
  const [contentNumberOfLines, setContentNumberOfLines] = useState(0);
  const isOpen = useRef(false);

  const contentContainerHeight = useSharedValue(0);
  const moreButtonDeg = useSharedValue(0);

  const contentContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: isFirst ? undefined : contentContainerHeight.value,
    };
  }, [isFirst]);

  const moreButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${moreButtonDeg.value}deg`,
        },
      ],
    };
  }, []);

  const onPress = useCallback(() => {
    if (isOpen.current) {
      moreButtonDeg.value = withTiming(0, {});
      contentContainerHeight.value = withTiming(0, { duration: 250 }, () => {
        runOnJS(setContentNumberOfLines)(0);
      });
    } else {
      moreButtonDeg.value = withTiming(180, {});
      setContentNumberOfLines(contentLineCnt);
      contentContainerHeight.value = withTiming(maxheight, { duration: 250 });
    }
    isOpen.current = !isOpen.current;
  }, [contentLineCnt, contentLineHeight]);

  const onTextLayout = useCallback(
    (event) => {
      if (isFirst) {
        setIsEnableCollapsible(false);
        setContentLineCnt(0);
        setContentLineHeight(0);
        contentContainerHeight.value = 0;
        setIsFirst(false);
      }
    },
    [isFirst]
  );

  return (
    <View style={styles.rootContainer}>
      <TouchableWithoutFeedback
        onPress={onPress}
        disabled={isEnableCollapsible}
      >
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTItle}>{sectionTitle}</Text>
          <Animated.View style={moreButtonAnimatedStyle}>
            <Image
              source={require("../assets/images/active-arrow.png")}
              style={{ width: 10.29 * width, height: 5 * height }}
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.contentContainer, contentContainerAnimatedStyle]}
      >
        <View style={styles.contentContainer} onLayout={onTextLayout}>
          {children}
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    width: "100%",
  },
  sectionContainer: {
    minHeight: height * 38,
    paddingHorizontal: width * 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.blueGray2,
  },
  sectionTItle: {
    fontFamily: "noto-medium",
    fontSize: 14,
    lineHeight: 22,
    color: "#000000",
  },
  contentContainer: {
    overflow: "hidden",
    backgroundColor: "white",
  },
  content: {
    fontFamily: "noto-medium",
    fontSize: 15,
    lineHeight: 17,
    color: "rgb(26, 26, 26)",
  },
});

export default CollapsibleView;
