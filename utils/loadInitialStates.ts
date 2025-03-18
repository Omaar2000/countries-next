import i18n from "../i18n";

export const loadInitialStates = () => {
  const mode = localStorage.getItem("mode") === "dark";
  const lang = localStorage.getItem("lang") || "en";
  const direction = lang === "ar" ? "rtl" : "ltr";

  if (mode) {
    document.documentElement.classList.add("dark");
  }

  i18n.changeLanguage(lang);

  return { mode, direction };
};
