import i18n from "../i18n";

export function toggleLanguage() {
  const newLang = i18n.language === "en" ? "ar" : "en";
  i18n.changeLanguage(newLang);
  localStorage.setItem("lang", newLang);
  return newLang === "ar" ? "rtl" : "ltr";
}
