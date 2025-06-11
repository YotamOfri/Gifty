import { NavigationIconProps } from "@/types/navigation.types";
import { View, Text } from "react-native";

interface TabIconProps {
  focused: boolean;
  icon: React.FC<NavigationIconProps>;
  title: string;
}
export const TabIcon: React.FC<TabIconProps> = ({
  focused,
  icon: IconComponent,
  title,
}) => (
  <View className="flex-1 flex flex-col gap-1 items-center mt-6">
    <IconComponent height={22.5} width={22.5} isFocused={focused} />
    {title && (
      <Text
        className={`${
          focused ? "text-primary" : "text-primary-foreground"
        } text-sm w-full text-center`}
      >
        {title}
      </Text>
    )}
  </View>
);
