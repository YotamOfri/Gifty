// CustomCarousel.tsx
import React from "react";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Dimensions, View } from "react-native";
import { CustomActionSheetRef } from "./BottomSheet/BottomSheet";
import { LinearGradient } from "expo-linear-gradient";
import { ActionSheetRef } from "react-native-actions-sheet";
interface ExtendedActionSheetRef extends ActionSheetRef {
  fadeIndicator: (toValue: number) => void;
}
interface CustomCarouselProps<T> {
  data: T[];
  actionSheetRef?: React.RefObject<ExtendedActionSheetRef>;
  renderItemComponent: (item: T, onClose: () => void) => React.ReactElement;
  defaultIndex: number;
  onItemChange?: (index: number, item: T) => void; // ✅ added
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const CustomCarousel = <T,>({
  data,
  actionSheetRef,
  renderItemComponent,
  defaultIndex,
  onItemChange,
}: CustomCarouselProps<T>): React.ReactElement => {
  const handleScrollStart = () => {
    actionSheetRef?.current?.fadeIndicator(0);
  };

  const handleScrollEnd = () => {
    actionSheetRef?.current?.fadeIndicator(1);
  };

  return (
    <Carousel
      loop
      width={SCREEN_WIDTH * 0.9}
      style={{ overflow: "visible" }}
      data={data}
      defaultIndex={defaultIndex}
      onScrollStart={handleScrollStart}
      onScrollEnd={handleScrollEnd}
      scrollAnimationDuration={100}
      onSnapToItem={(index) => {
        const currentItem = data[index];
        if (typeof onItemChange === "function") {
          onItemChange(index, currentItem); // ✅ call the callback
        }
      }}
      renderItem={({ item }) => (
        <View className="h-full w-full items-center justify-center">
          <View className="h-full flex-1 w-[98%] rounded-3xl overflow-hidden relative">
            <LinearGradient
              colors={["white", "#EDEFF3"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 0.7 }}
              className="h-full w-full relative"
            >
              {renderItemComponent(item, () => actionSheetRef?.current?.hide())}
            </LinearGradient>
          </View>
        </View>
      )}
    />
  );
};

export default CustomCarousel;
