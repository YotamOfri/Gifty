import i18n from "i18next";
import { InitOptions, Module } from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "./locales/en.json";
import he from "./locales/he.json";

interface LanguageDetectorModule extends Module {
  type: "languageDetector";
  detect: () => string | string[] | undefined;
  init: (services: any, detectorOptions: any, i18nextOptions: any) => void;
  cacheUserLanguage: (lng: string) => void;
}

const languageDetector: LanguageDetectorModule = {
  type: "languageDetector",
  detect: () => {
    try {
      const languageCode = Localization.locale.split("-")[0];
      // Return the detected language directly
      if (languageCode === "he") return "he";
      if (languageCode === "ar") return "ar";
      return "en";
    } catch (error) {
      console.error("Language detection error:", error);
      return "en";
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const options: InitOptions = {
  resources: {
    en: { translation: en },
    he: { translation: he },
    ar: { translation: {} }, // Empty object for Arabic as it will be loaded from Supabase
  },
  fallbackLng: "he",
  interpolation: { escapeValue: false },
  detection: {
    order: ["languageDetector"],
  },
};

// If we want later to use this - set the deafult lang based on system lang
// i18n.use(languageDetector).use(initReactI18next).init(options);

i18n.use(initReactI18next).init({
  lng: "he", // <- FORCE Hebrew
  fallbackLng: "he",
  resources: {
    en: { translation: en },
    he: { translation: he },
    ar: { translation: {} }, // Empty object for Arabic as it will be loaded from Supabase
  },
  interpolation: { escapeValue: false },
});

export default i18n;
