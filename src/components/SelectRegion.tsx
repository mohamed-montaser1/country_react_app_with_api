import useCountry from "@/context/countryContext";
import useTheme from "@/context/themeContext";
import type { region } from "@/types/country";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import SelectRegionElement from "./SelectRegionElement";

function SelectRegion() {
  let [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const { countries, setSubCountries, setFiltered, setRegion, region } = useCountry();
  const { theme } = useTheme();

  const filterByRegion = (region: region) => {
    if (region === "All") {
      setSubCountries!(countries!);
      setRegion!("All");
      setIsOpenSelect(false);
      return;
    }
    setSubCountries!([...countries!].filter((country) => country.region === region));
    setFiltered!(true);
    setRegion!(region);
    setIsOpenSelect(false);
  };

  return (
    <>
      <button
        className={`${
          theme === "dark" ? "bg-[#2b3945]" : "bg-[white]"
        } flex items-center justify-center gap-2 rounded-lg ${
          theme === "dark" ? "text-slate-200" : "text-slate-500"
        } px-4 border-none outline-none select-none font-semibold min-h-[50px]`}
        onClick={() => setIsOpenSelect((prev) => !prev)}
      >
        {region === "All" || region === null ? "Filter By Region" : region}
        <AiOutlineCaretDown />
      </button>
      {isOpenSelect && (
        <ul
          className={`absolute right-4 ${
            theme === "dark" ? "bg-[#2b3945]" : "bg-[#fff]"
          } z-50 px-[51px] py-2 flex flex-col items-center gap-3 top-[150px] rounded-lg shadow-md`}
        >
          <SelectRegionElement onClick={filterByRegion} region="All">
            All
          </SelectRegionElement>

          <SelectRegionElement onClick={filterByRegion} region="Africa">
            Africa
          </SelectRegionElement>

          <SelectRegionElement onClick={filterByRegion} region="Americas">
            Americas
          </SelectRegionElement>

          <SelectRegionElement onClick={filterByRegion} region="Asia">
            Asia
          </SelectRegionElement>

          <SelectRegionElement onClick={filterByRegion} region="Europe">
            Europe
          </SelectRegionElement>

          <SelectRegionElement onClick={filterByRegion} region="Oceania">
            Oceania
          </SelectRegionElement>
        </ul>
      )}
    </>
  );
}

export default SelectRegion;
