import useTheme from "@/context/themeContext";
import { Country } from "@/types/country";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {
  country: Country;
}

function Country({ country }: Props) {
  const router = useRouter();
  const { theme } = useTheme();

  const goToDetailsPage = () => {
    router.push(`/details/${country.name.common}`);
  };

  return (
    <div
      className={`w-[300px] ${
        theme === "dark" ? "bg-[#2b3945]" : "bg-[#fff]"
      } flex flex-col mb-3 rounded-lg overflow-hidden cursor-pointer`}
      onClick={goToDetailsPage}
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={country.flags.svg}
          className="object-cover"
          alt={country.flags.alt || "Country Without Alt Text"}
          fill
        />
      </div>
      <div className="body p-4">
        <h4 className={`text-2xl mb-3 ${theme === "dark" ? "text-slate-200" : "text-slate-400"}`}>
          {country.name.common}
        </h4>
        <ul>
          <li className={`text-slate-200 ${theme === "dark" ? "text-slate-200" : "text-slate-400"}`}>
            Population: {country.population}
          </li>
          <li className={`text-slate-200 ${theme === "dark" ? "text-slate-200" : "text-slate-400"}`}>
            Region: {country.region}
          </li>
          <li className={`text-slate-200 ${theme === "dark" ? "text-slate-200" : "text-slate-400"}`}>
            Capital: {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
