import useCountry from "@/context/countryContext";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import type { KeyboardEvent } from "react";
import useTheme from "@/context/themeContext";

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { countries, setSubCountries, filtered, region } = useCountry();
  const { theme } = useTheme();

  const searchByInputValue = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value === "") return setSubCountries!(countries!);

    if (filtered) {
      setSubCountries!((prev) => {
        return prev[0] === undefined
          ? [...countries!].filter(
              (country) =>
                country.region === region && country.name.common.toLowerCase().startsWith(target.value.toLowerCase())
            )
          : prev.filter((country) => country.name.common.toLowerCase().startsWith(target.value.toLowerCase()));
      });
      return;
    }
    setSubCountries!(
      [...countries!].filter((country) => country.name.common.toLowerCase().startsWith(target.value.toLowerCase()))
    );
  };

  return (
    <>
      <div
        className={`flex items-center justify-between gap-x-3 ${
          theme === "dark" ? "bg-[#2b3945]" : "bg-[#fff]"
        } h-[50px] sm:w-[400px] ps-6 pe-4 rounded-lg overflow-hidden`}
      >
        <FaSearch className="text-slate-500" />
        <input
          placeholder="Search For Country"
          className="bg-transparent text-slate-400 border-none outline-none placeholder:text-slate-400"
          style={{ width: "calc(100% - 50px)" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyUp={searchByInputValue}
        />
      </div>
    </>
  );
}

export default SearchBox;
