import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      SEARCH: "Search here...",
      FILTER: "Filter by Region",
      BACK: "Back",
      TITLE: "Where in the world?",
      NATIVE_NAME: "Native Name",
      REGION: "Region ",
      SUB_REGION: "Sub Region ",
      POPULATION: "Population ",
      CAPITAL: "Capital ",
      TLDOMAIN: "Top Level Domain ",
      LANG: "Lang",
      LANGUAGES: "Languages ",
      CURRENCY: "Currencies ",
      BORDERS: "Border Countries",
      NO_BORDERS: "NO Border Countries",
      DARK: "Dark Mode",
      LIGHT: "Light Mode",
      LOADING: "Loading....",
    },
  },
  ar: {
    translation: {
      SEARCH: "ابحث هنا...",
      FILTER: "تصفية حسب المنطقة",
      BACK: "رجوع",
      TITLE: "أين في العالم؟",
      NATIVE_NAME: " الاسم الأصلي",
      REGION: " المنطقة",
      SUB_REGION: " المنطقة الفرعية",
      POPULATION: " عدد السكان",
      CAPITAL: " العاصمة",
      TLDOMAIN: " النطاق الأعلى",
      LANG: "اللغة",
      LANGUAGES: " اللغات",
      CURRENCY: " العملات",
      BORDERS: "البلدان المجاورة",
      NO_BORDERS: "لا يوجد دول مجاورة",
      DARK: "داكن",
      LIGHT: "مضئ",
      LOADING: "جاري التحميل....",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
