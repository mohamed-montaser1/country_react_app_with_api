export interface Country {
  image: string;
  name: {
    common: string;
    official: string;
  };
  tld: Array<string>;
  capital: Array<string>;
  population: number;
  region: region;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  translations: {
    [key: string]: {
      [key: string]: string;
    };
  };
  capita: string;
  borders: Array<string>;
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  postalCode: {
    format: string;
    regex: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

export type Countries = Array<Country>;

export type region =
  | "Africa"
  | "Asia"
  | "Americas"
  | "Europe"
  | "Oceania"
  | "All";
