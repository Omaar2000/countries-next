import useSWR from "swr";
import { getCountryDetails } from "../../services/getCountry";
import { Country } from "./types/type-country";

export function useGetCountryDetails(id: string) {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR<Country[]>(
    process.env.NEXT_PUBLIC_BASE_URL + `/alpha/${id}`,
    getCountryDetails
  );
  return { country, isLoading, error };
}
