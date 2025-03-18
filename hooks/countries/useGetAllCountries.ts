import useSWR from "swr";
import { getCountries } from "../../services/getCountries";
import { Country } from "./types/type-country";

export function useGetAllCountries() {
  const { data, isLoading, error } = useSWR<Country[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/all`,
    getCountries
  );

  return { data, isLoading, error };
}
