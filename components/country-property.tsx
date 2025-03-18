type CountryPropertyProps = {
  name: string;
  value: string | string[];
  className?: string;
};

const CountryProperty = ({ name, value, className }: CountryPropertyProps) => {
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
