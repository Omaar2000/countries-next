import useSWR from "swr";
import { getCountryDetails } from "../services/getCountry";

export function useGetCountryDetails(id) {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + `/alpha/${id}`,
    getCountryDetails
  );
  return { country, isLoading, error };
}
