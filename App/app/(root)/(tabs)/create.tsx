import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
const CreateScreen = () => {
  return (
    <View>
      <Text>CreateScreen</Text>
    </View>
  );
};

export const PlusTab = ({ focused }: { focused: boolean }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openSheet = () => {
    bottomSheetRef.current?.present();
  };

  return (
    <>
      <TouchableOpacity
        onPress={openSheet}
        activeOpacity={0.7}
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <View
          className={`w-20 h-20 rounded-full items-center justify-center ${
            focused ? "bg-primary" : "bg-primary"
          }`}
          style={{
            marginTop: 0,
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
              },
            }),
          }}
        >
          <View className="items-center justify-center">
            <View className="w-5 h-0.5 bg-white absolute" />
            <View className="w-0.5 h-5 bg-white absolute" />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CreateScreen;
