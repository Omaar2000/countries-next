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
        className="dark:bg-dark-elements shadow-lg bg-light-elements flex justify-between items-center p-6"
      >
        <h2 className="text-lg font-[700] ms-6">{t("title")}</h2>
        <div className="flex gap-3 me-10 text-md">
          <Button onClick={onChangeLanguage}>
            {i18n.language === "ar" ? t("english") : t("arabic")}
          </Button>

          <Button onClick={onChangeMode}>
            {isDark ? t("light") : t("dark")}
          </Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navbar;
