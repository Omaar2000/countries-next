const CountryProperty = ({ name, value }) => {
  return (
    <p>
      <span>
        <strong>{name} : </strong>
      </span>
      <span>{value}</span>
    </p>
  );
};

export default CountryProperty;
