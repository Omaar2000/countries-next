import { Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import CountryProperty from "./country-property";

const CountryCard = ({ country }) => {
  const { t } = useTranslation();
  const navigate = useRouter();
  return (
    <Link href={`/country/${country.cca3}`}>
      <Card
        hoverable
        cover={<img alt="example" src={country.flags.png} className="h-40" />}
        className="shadow-md"
        onClick={() => navigate.push("/country/" + country.cca3)}
      >
        <Card.Meta
          title={<span className="font-[700]"> {country.name.official}</span>}
        />
        <CountryProperty
          name={t("population")}
          value={country.population}
          className={"mt-4"}
        />
        <CountryProperty
          name={t("region")}
          value={country.region}
          className={"mt-1"}
        />
        <CountryProperty
          name={t("capital")}
          value={country.capital ? country?.capital[0] : ""}
          className={"mt-1"}
        />
      </Card>
    </Link>
  );
};

export default CountryCard;
