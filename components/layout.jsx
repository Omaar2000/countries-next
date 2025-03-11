import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./navbar";
import { useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";
import { loadInitialStates } from "../utils/loadInitialStates";
import { toggleDarkMode } from "../utils/toggleMode";
import { toggleLanguage } from "../utils/toggleLang";

export default function Layout({ children }) {
  let mode, direction;
  const [isDark, setIsDark] = useState(true);
  const [dir, setDir] = useState(direction);

  useEffect(() => {
    const { mode: colorMode, direction: dir } = loadInitialStates();
    setDir(dir);
    setIsDark(colorMode);
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: isDark ? "#fff" : "hsl(207, 26%, 17%)", // Custom primary color
          colorBgBase: isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)", // Background color
          colorTextBase: isDark ? "#ffffff" : "hsl(200, 15%, 8%)", // Text color
        },
      }}
    >
      <div dir={dir} className="dark:bg-[#202c37]">
        <Navbar
          onChangeLanguage={() => setDir(toggleLanguage())}
          onChangeMode={() => setIsDark(toggleDarkMode(isDark))}
          isDark={isDark}
        />
        <main>{children}</main>
      </div>
    </ConfigProvider>
  );
}
