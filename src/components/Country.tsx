import { Country } from "@/types/country";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {
  country: Country;
}

function Country({ country }: Props) {
  const router = useRouter();
  const goToDetailsPage = () => {
    router.push(`/details/${country.name.common}`);
  };

  return (
    <div
      className="w-[300px] bg-[#2b3945] flex flex-col mb-3 rounded-lg overflow-hidden cursor-pointer"
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
        <h4 className="text-2xl mb-3 text-slate-200">{country.name.common}</h4>
        <ul>
          <li className="text-slate-200">Population: {country.population}</li>
          <li className="text-slate-200">Region: {country.region}</li>
          <li className="text-slate-200">Capital: {country.capital}</li>
        </ul>
      </div>
    </div>
  );
}

export default Country;
