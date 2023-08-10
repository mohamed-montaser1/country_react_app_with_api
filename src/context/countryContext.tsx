import { createContext, useState, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { Countries, region } from "@/types/country";
import { apiUrl } from "@/service/apiUrl";
import { getAllCountries } from "@/service/api-service/get";

interface contextType {
  countries: Countries;
  setCountries: React.Dispatch<React.SetStateAction<Countries>>;
  subCountries: Countries;
  setSubCountries: React.Dispatch<React.SetStateAction<Countries>>;
  filtered: boolean;
  setFiltered: React.Dispatch<React.SetStateAction<boolean>>;
  region: null | region;
  setRegion: React.Dispatch<React.SetStateAction<null | region>>;
}

const countryContext = createContext<Partial<contextType>>({});

interface Props {
  children: ReactNode;
}

export function CountryContextProvider({ children }: Props) {
  const [countries, setCountries] = useState<Countries>([]);
  const [subCountries, setSubCountries] = useState<Countries>([]);
  const [filtered, setFiltered] = useState(false);
  const [region, setRegion] = useState<null | region>(null);

  useEffect(() => {
    async function getCountries() {
      let newCountries = await getAllCountries(apiUrl);
      setCountries(newCountries);
      setSubCountries(newCountries);
    }
    getCountries();
  }, []);

  let providedValue: contextType = {
    countries,
    setCountries,
    subCountries,
    setSubCountries,
    filtered,
    setFiltered,
    region,
    setRegion,
  };
  return (
    <>
      <countryContext.Provider value={providedValue}>{children}</countryContext.Provider>
    </>
  );
}

export default function useCountry() {
  return useContext(countryContext);
}
