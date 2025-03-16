const CountryProperty = ({ name, value, className }) => {
  return (
    <p className={className}>
      <span>
        <strong>{name} : </strong>
      </span>
      <span>{value}</span>
    </p>
  );
};

export default CountryProperty;
