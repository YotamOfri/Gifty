import React, { useImperativeHandle, forwardRef, useRef } from "react";
import {
  Animated,
  StyleSheet,
  View,
  Dimensions,
  Platform,
  Text,
  Button,
} from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";

export interface CustomActionSheetRef {
  show: () => void;
  hide: () => void;
  fadeIndicator: (toValue: number) => void;
}

export interface ExtendedActionSheetRef extends ActionSheetRef {
  fadeIndicator: (toValue: number) => void;
}

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const CustomActionSheet = forwardRef<
  CustomActionSheetRef,
  {
    children: React.ReactNode;
    bottomComponent?: React.ReactNode;
    snapPoints?: number[];
  }
>(({ children, bottomComponent, snapPoints }, ref) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const indicatorOpacity = useRef(new Animated.Value(1)).current;

  useImperativeHandle(ref, () => ({
    show: () => actionSheetRef.current?.show(),
    hide: () => actionSheetRef.current?.hide(),
    fadeIndicator: (toValue: number) => {
      Animated.timing(indicatorOpacity, {
        toValue,
        duration: 100,
        useNativeDriver: true,
      }).start();
    },
  }));

  return (
    <>
      <ActionSheet
        ref={actionSheetRef}
        overlayOpacity={1}
        overlayColor="rgba(237, 239, 243, 0.9)"
        defaultOverlayOpacity={1}
        statusBarTranslucent
        gestureEnabled
        elevation={0}
        snapPoints={snapPoints || [90]}
        initialSnapIndex={0}
        bounceOnOpen={false}
        bounceOnClose={false}
        closable={true}
        overDragResistanceFactor={10}
        indicatorStyle={[styles.indicator, { opacity: indicatorOpacity }]}
        containerStyle={styles.container}
      >
        {children}
      </ActionSheet>
    </>
  );
});

const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    top: 10,
    left: "50%",
    transform: [{ translateX: -25 }],
    width: 50,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#CFD7F4",
    zIndex: 9999,
  },
  container: {
    backgroundColor: "transparent",
    shadowColor: "transparent",
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    overflow: "hidden",
  },
  absoluteBottomContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 10,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    pointerEvents: "box-none", // allow touches to pass through if needed
  },
  contentContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  footerContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default CustomActionSheet;
