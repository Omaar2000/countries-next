export const getCountryDetails = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
