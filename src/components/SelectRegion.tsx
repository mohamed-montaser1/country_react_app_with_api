import useCountry from "@/context/countryContext";
import type { Countries, region } from "@/types/country";
import { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";

function SelectRegion() {
  let [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const { countries, setSubCountries, setFiltered, setRegion, region } =
    useCountry();

  const filterByRegion = (region: region) => {
    if (region === "All") {
      setSubCountries!(countries!);
      setRegion!("All");
      setIsOpenSelect(false);
      return;
    }
    setSubCountries!(
      [...countries!].filter((country) => country.region === region)
    );
    setFiltered!(true);
    setRegion!(region);
    setIsOpenSelect(false);
  };

  return (
    <>
      <button
        className="bg-[#2b3945] flex items-center justify-center gap-2 rounded-lg text-slate-200 px-4 border-none outline-none select-none font-semibold min-h-[50px]"
        onClick={() => setIsOpenSelect((prev) => !prev)}
      >
        {region === "All" || region === null ? "Filter By Region" : region}
        <AiOutlineCaretDown />
      </button>
      {isOpenSelect && (
        <ul className="absolute right-4 bg-[#2b3945] z-50 px-[51px] py-2 flex flex-col items-center gap-3 top-[150px] rounded-lg">
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "All")}
          >
            All
          </li>
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "Africa")}
          >
            Africa
          </li>
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "Americas")}
          >
            Americas
          </li>
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "Asia")}
          >
            Asia
          </li>
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "Europe")}
          >
            Europe
          </li>
          <li
            className="text-slate-200 cursor-pointer"
            onClick={filterByRegion.bind(null, "Oceania")}
          >
            Oceania
          </li>
        </ul>
      )}
    </>
  );
}

export default SelectRegion;
