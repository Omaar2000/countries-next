export const getCountryDetails = async (url) => {
  const res = await fetch(url);
  return res.json();
};
