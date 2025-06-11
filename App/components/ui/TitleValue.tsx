import { useAuth } from "@/hooks/useAuth";
import { useRTL } from "@/hooks/useRtl";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

interface TitleValueProps {
  title: string;
  value: string | React.ReactNode;
}

const TitleValue: React.FC<TitleValueProps> = ({ title, value }) => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { getNameByLanguage, flexDirection, isRtl, textAlign } = useRTL();
  return (
    <View className={`items-center ${flexDirection}`}>
      <Text className={`text-secondary w-2/5 ${textAlign}`}>{title}</Text>
      <Text className={`text-text ${textAlign}`}>{value}</Text>
    </View>
  );
};

export default TitleValue;
