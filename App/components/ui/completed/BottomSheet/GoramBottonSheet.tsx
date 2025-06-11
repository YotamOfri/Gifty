import React, { forwardRef, useMemo, useCallback, useRef } from "react";
import {
  View,
  StyleSheet,
  NativeEventSubscription,
  BackHandler,
  Text,
} from "react-native";
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetView,
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type GoramBottomSheetModalProps = {
  children: React.ReactNode;
  snapPoints?: (string | number)[];
  bottomComponent?: React.ReactNode;
} & Partial<BottomSheetModalProps>;

const GoramBottomSheetModal = forwardRef<
  BottomSheetModal,
  GoramBottomSheetModalProps
>(
  (
    {
      children,
      snapPoints = ["25%", "50%", "100%"],
      bottomComponent,
      ...props
    },
    ref
  ) => {
    const { top: topSafeArea, bottom: bottomSafeArea } = useSafeAreaInsets();
    const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);
    const { handleSheetPositionChange } = useBottomSheetBackHandler(ref);
    // ✅ Backdrop renderer
    const renderFooter = useCallback(
      (props) => (
        <BottomSheetFooter {...props}>{bottomComponent}</BottomSheetFooter>
      ),
      [bottomComponent]
    );
    const renderBackdrop = useCallback(
      (backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ref}
        snapPoints={memoizedSnapPoints}
        enableDynamicSizing={false}
        footerComponent={renderFooter}
        onChange={handleSheetPositionChange}
        backdropComponent={renderBackdrop}
        enablePanDownToClose
        bottomInset={bottomSafeArea}
        {...props}
        containerStyle={{ backgroundColor: "transparent" }}
        style={{ backgroundColor: "transparent" }}
        backgroundStyle={{ backgroundColor: "transparent", width: "100%" }}
      >
        <BottomSheetView style={[styles.contentContainer]}>
          <BottomSheetTextInput className="w-full h-20" />

          <View style={{ flex: 1 }}>{children}</View>
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default GoramBottomSheetModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export const useBottomSheetBackHandler = (
  bottomSheetRef: React.RefObject<BottomSheetModal | null>
) => {
  const backHandlerSubscriptionRef = useRef<NativeEventSubscription | null>(
    null
  );
  const handleSheetPositionChange = useCallback<
    NonNullable<BottomSheetModalProps["onChange"]>
  >(
    (index) => {
      const isBottomSheetVisible = index >= 0;
      if (isBottomSheetVisible && !backHandlerSubscriptionRef.current) {
        // setup the back handler if the bottom sheet is right in front of the user
        backHandlerSubscriptionRef.current = BackHandler.addEventListener(
          "hardwareBackPress",
          () => {
            bottomSheetRef.current?.dismiss();
            return true;
          }
        );
      } else if (!isBottomSheetVisible) {
        backHandlerSubscriptionRef.current?.remove();
        backHandlerSubscriptionRef.current = null;
      }
    },
    [bottomSheetRef, backHandlerSubscriptionRef]
  );
  return { handleSheetPositionChange };
};
