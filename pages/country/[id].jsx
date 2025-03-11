import { useQuery } from "@tanstack/react-query";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
// import { getCountryDetails } from "../../../utils/getCountry";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import { getCountryDetails } from "../../utils/getCountry";

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://restcountries.com/v3.1/all`);
//   const data = await res.json();
//   const paths = data.map((country) => {
//     return {
//       params: {
//         id: country.cca3,
//       },
//     };
//   });
//   console.log(paths);

//   return { paths, fallback: true };
// };

export const getServerSideProps = async (context) => {
  // const res = await fetch(
  //   `https://restcountries.com/v3.1/alpha/${context.params.id}`
  // );
  // const country = await res.json();
  return { props: { id: context.params.id } };
};

const DetailPage = ({ id }) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  // const { id } = router.query;
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(`https://restcountries.com/v3.1/alpha/${id}`, getCountryDetails);

  console.log(country);

  if (isLoading) {
    return (
      <section className="h-[calc(100vh-4rem)] dark:text-white text-center text-3xl text-[800] mt-20">
        {t("LOADING")}
      </section>
    );
  }

  if (error) {
    return <>error</>;
  }

  if (country)
    return (
      <main class="dark:text-[#fff] min-h-[calc(100vh-4rem)] px-20">
        <Link href={"/home"}>
          <Button className="mt-10">
            {
              <ArrowLeftOutlined
                rotate={i18n.language === "ar" ? "180" : "0"}
              />
            }
            {t("BACK")}
          </Button>
        </Link>
        <div class="flex flex-col md:flex-row justify-between gap-10">
          <img
            class="country-flag md:w-5/12 py-10 pe-20 h-[25rem] object-cover"
            src={country[0]?.flags.png}
            alt="country's flag"
          />
          <div class="details-half md:w-1/2 mt-5">
            <h1 class="country-name text-3xl font-[800] mb-5">
              {country[0]?.name.official}
            </h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-10 w-fit text-[1rem]">
              <p>
                <span>
                  <strong>{t("NATIVE_NAME")} : </strong>
                </span>
                <span>{country[0]?.name.common}</span>
              </p>
              <p>
                <span>
                  <strong>{t("POPULATION")} : </strong>
                </span>
                <span>{country[0]?.population}</span>
              </p>
              <p>
                <span>
                  <strong>{t("REGION")} : </strong>
                </span>
                <span>{country[0]?.region}</span>
              </p>
              <p>
                <span>
                  <strong>{t("SUB_REGION")} : </strong>
                </span>
                <span>{country[0]?.subregion}</span>
              </p>
              <p>
                <span>
                  <strong>{t("CAPITAL")} : </strong>
                </span>
                <span>{country[0]?.capital[0]}</span>
              </p>
              <p>
                <span>
                  <strong>{t("TLDOMAIN")} : </strong>
                </span>
                <span>{country[0]?.tld}</span>
              </p>
              <p>
                <span>
                  <strong>{t("CURRENCY")} : </strong>
                </span>
                <span>{Object.keys(country[0]?.currencies)}</span>
              </p>
              <p>
                <span>
                  <strong>{t("LANGUAGES")} : </strong>
                </span>
                <span>{Object.values(country[0]?.languages).join(", ")}</span>
              </p>
            </div>
            <span class="text-base inline-block mb-2">
              <strong>{t("BORDERS")} : </strong>
            </span>
            <div class="border-countries flex gap-2 flex-wrap pe-10 ">
              {country[0]?.borders
                ? country[0]?.borders.map((border) => (
                    <Link href={`/api/country/${border}`}>
                      <Button
                        onClick={() => navigate()}
                        id={border}
                        class="border-btn"
                      >
                        {border}
                      </Button>
                    </Link>
                  ))
                : "NO Border Countries"}
            </div>
          </div>
        </div>
      </main>
    );
};

export default DetailPage;
