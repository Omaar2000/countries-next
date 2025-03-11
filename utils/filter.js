export function filter(data, selectValue, searchValue) {
  return data.filter(
    (country) =>
      country.region.toLowerCase().includes(selectValue) &&
      country.name.official.toLowerCase().includes(searchValue)
  );
}
