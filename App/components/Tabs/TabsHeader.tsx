import { View, Text, Platform } from "react-native";
import React, { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface TabsHeaderProps {
  text?: string;
  children?: ReactNode;
}

const TabsHeader: React.FC<TabsHeaderProps> = ({ text, children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="w-full bg-white min-h-24 flex items-center justify-center z-50"
      style={{
        paddingTop: insets.top + 6,
        ...Platform.select({
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.07,
            shadowRadius: 3,
          },
          android: {
            elevation: 2.5,
          },
        }),
      }}
    >
      {text ? (
        <Text className="text-primary font-semibold text-2xl">{text}</Text>
      ) : (
        children
      )}
    </View>
  );
};

export default TabsHeader;
