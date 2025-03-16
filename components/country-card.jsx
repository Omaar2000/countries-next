import { Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

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
        <p className="mt-4">
          <span>
            <strong>{t("POPULATION")} :</strong>
          </span>
          <span> {country.population}</span>
        </p>
        <p className="mt-1">
          <span>
            <strong>{t("REGION")} : </strong>
          </span>
          <span>{country.region}</span>
        </p>
        <p className="mt-1">
          <span>
            <strong>{t("CAPITAL")} : </strong>
          </span>
          <span>{country.capital}</span>
        </p>
      </Card>
    </Link>
  );
};

export default CountryCard;
