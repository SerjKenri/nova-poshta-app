import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import ua from "./locales/ua/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "ua",
    whitelist: ["en", "ua"],
    debug: true,
    detection: {
      order: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      ua: {
        translation: ua,
      },
    },
  });

export default i18n;
