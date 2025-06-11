import { View, Text } from "react-native";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const isRTL = () => {
  const { i18n } = useTranslation();
  return i18n.language === "he" || i18n.language === "ar";
};

export default isRTL;

export const useToggleLanguage = () => {
  const { i18n } = useTranslation();
  const toggleLanguage = useCallback(() => {
    const newLang = i18n.language === "he" ? "en" : i18n.language === "en" ? "ar" : "he";
    i18n.changeLanguage(newLang);
  }, [i18n]);

  return toggleLanguage;
};
