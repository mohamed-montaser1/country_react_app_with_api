import Country from "@/components/Country";
import { nanoid } from "nanoid";
import Filter from "@/components/Filter";
import useCountry from "@/context/countryContext";
import useTheme from "@/context/themeContext";

export default function Home() {
  const { subCountries } = useCountry();
  const { theme } = useTheme();

  return (
    <div className={`${theme === "dark" ? "bg-[#202c37]" : "bg-[#eee]"} page`}>
      <Filter />
      <div className={`grid grid-cols-auto w-full px-4 py-7 gap-y-5 gap-x-4 place-items-center`}>
        {subCountries!.map((country) => {
          if (country.name.common === "Israel") return;
          return <Country country={country} key={nanoid()} />;
        })}
      </div>
    </div>
  );
}
