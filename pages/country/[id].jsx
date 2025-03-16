import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import CountryProperty from "../../components/country-property";
import Loading from "../../components/loading";
import Error from "../../components/error";
import { useGetCountryDetails } from "../../hooks/useGetCountryDetails";
import NoData from "../../components/no-data";

export const getServerSideProps = async (context) => {
  return { props: { id: context.params.id } };
};

const DetailPage = ({ id }) => {
  const { t, i18n } = useTranslation();
  const { country, isLoading, error } = useGetCountryDetails(id);
  const src = country && country[0]?.flags.png;
  if (isLoading) {
    return (
      <section className="h-[calc(100vh-4rem)] dark:text-light-elements text-center text-3xl text-[800] mt-20">
        <Loading />
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-[calc(100vh-4rem)] dark:text-light-elements text-center text-3xl text-[800] mt-20">
        {<Error error={error} />}
      </section>
    );
  }

  if (country?.length > 0)
    return (
      <main class="dark:text-light-elements min-h-[calc(100vh-4rem)] px-6 md:px-20">
        <Link href={"/"}>
          <Button className="mt-10">
            {
              <ArrowLeftOutlined
                rotate={i18n.language === "ar" ? "180" : "0"}
              />
            }
            {t("BACK")}
          </Button>
        </Link>
        <div class="flex flex-col md:flex-row mt-10 justify-between gap-10">
          <Image
            width={500}
            height={300}
            className="country-flag md:w-5/12 mt-10 py-10 pe-20 h-[25rem] object-cover"
            loader={() => src}
            src={src}
            alt="country's flag"
          />
          <div class="details-half md:w-1/2 mt-5">
            <h1 class="country-name text-3xl font-[800] mb-5">
              {country[0]?.name.official}
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-10 w-fit text-[1rem]">
              <CountryProperty
                name={t("NATIVE_NAME")}
                value={country[0]?.name.common}
              />
              <CountryProperty
                name={t("POPULATION")}
                value={country[0]?.population}
              />
              <CountryProperty
                name={t("SUB_REGION")}
                value={country[0]?.subregion}
              />
              <CountryProperty
                name={t("CAPITAL")}
                value={country[0]?.capital[0]}
              />
              <CountryProperty name={t("TLDOMAIN")} value={country[0]?.tld} />
              <CountryProperty
                name={t("CURRENCY")}
                value={Object.keys(country[0]?.currencies)}
              />
              <CountryProperty
                name={t("LANGUAGES")}
                value={Object.values(country[0]?.languages).join(", ")}
              />
            </div>
            <span class="text-base inline-block mb-2">
              <strong>{t("BORDERS")} : </strong>
            </span>
            <div class="border-countries flex gap-2 flex-wrap pe-10 ">
              {country[0]?.borders ? (
                country[0]?.borders.map((border) => (
                  <Link href={`/country/${border}`} key={border}>
                    <Button id={border} class="border-btn">
                      {border}
                    </Button>
                  </Link>
                ))
              ) : (
                <NoData name="Border Countries" />
              )}
            </div>
          </div>
        </div>
      </main>
    );
};

export default DetailPage;
