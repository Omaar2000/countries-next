export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  population: string;
  region: string;
  subregion: string;
  capital: string[];
  tld: string;
  cca3: string;
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders?: string[];
}
