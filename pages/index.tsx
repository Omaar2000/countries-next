import { useTranslation } from "react-i18next";
import { Input, Select, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { filter } from "../utils/filter";
import CountryCard from "../components/country-card";
import Loading from "../components/loading";
import Error from "../components/error";
import { useGetAllCountries } from "../hooks/countries/useGetAllCountries";

export default function Home() {
  const { data, isLoading, error } = useGetAllCountries();

  const { t } = useTranslation();
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    data &&
      setFilteredData(
        filter(data, selectValue.toLowerCase(), searchValue.toLowerCase())
      );
  }, [data, selectValue, searchValue]);

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

  return (
    <div className="min-h-[calc(100vh-4rem)] pb-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center px-20 my-8">
        <Input
          placeholder={`  ${t("search")}`}
          prefix={<SearchOutlined />}
          className="w-72 mb-3 md:mb-0"
          type="secondary"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <Space wrap>
          <Select
            placeholder={t("filter")}
            onChange={(value) => {
              setSelectValue(value);
            }}
            className="min-w-20"
            options={[
              {
                value: t("filter"),
                label: t("filter"),
                disabled: true,
              },
              {
                value: "Africa",
                label: "Africa",
              },
              {
                value: "Europe",
                label: "Europe",
              },
              {
                value: "Asia",
                label: "Asia",
              },
              {
                value: "Oceania",
                label: "Oceania",
              },
              {
                value: "Americas",
                label: "Americas",
              },
            ]}
          />
        </Space>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-20 gap-y-12 px-20 justify-between w-full">
        {filteredData &&
          filteredData.map((country) => (
            <CountryCard country={country} key={country.cca3} />
          ))}
      </div>
    </div>
  );
}
