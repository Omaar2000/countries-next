import { Button, ConfigProvider, Layout, theme } from "antd";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import { toggleDarkMode } from "../utils/toggleMode";
import { loadInitialStates } from "../utils/loadInitialStates";
import { toggleLanguage } from "../utils/toggleLang";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  router.push("/home");
}
