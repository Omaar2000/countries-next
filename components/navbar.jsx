import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { Button, Layout } from "antd";

const Navbar = ({ onChangeLanguage, onChangeMode, isDark }) => {
  const { Header } = Layout;
  const { t } = useTranslation();
  return (
    <Layout>
      {/* Header Section */}
      <Header
        itemType="primary"
        className="dark:bg-[#2b3945] shadow-lg bg-white flex justify-between items-center p-6"
      >
        <h2 className="text-lg font-[700] ms-6">{t("TITLE")}</h2>
        <div className="flex gap-3 me-10 text-md">
          <Button onClick={onChangeLanguage}>
            {i18n.language === "ar" ? t("English") : t("العربية")}
          </Button>

          <Button onClick={onChangeMode}>
            {isDark ? t("LIGHT") : t("DARK")}
          </Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
