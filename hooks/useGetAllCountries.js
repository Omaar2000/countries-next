import useSWR from "swr";
import { getCountries } from "../services/getCountries";

export function useGetAllCountries() {
  const { data, isLoading, error } = useSWR(
    process.env.NEXT_PUBLIC_BASE_URL + `/all`,
    getCountries
  );
  return { data, isLoading, error };
}
