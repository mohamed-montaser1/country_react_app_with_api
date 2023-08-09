import BorderCountry from "@/components/BorderCountry";
import useCountry from "@/context/countryContext";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import Country from "@/components/Country";

function CountryName() {
  const countryName = (useRouter().query.countryName! as string) || "";
  const router = useRouter();
  const { countries } = useCountry();
  const [country, setCountry] = useState<Country>();
  let found: boolean = false;
  for (let i = 0; i < countries!.length; i++) {
    if (countries![i].name.common.toLowerCase() === countryName.toLowerCase()) {
      found = true;
    }
  }
  useEffect(() => {
    setCountry(
      [...countries!].find(
        (country) =>
          country.name.common.toLowerCase() === countryName.toLowerCase()
      )
    );
  }, [countries, countryName]);
  if (!found) {
    return "Cannot Find This Country...🙇‍♂️";
  }

  const goBack = () => router.back();
  //   const languages = Array.from(Object.values(country!.languages));
  let languages: Array<string> = [];

  if (country) {
    languages = Array.from(Object.values(country!.languages));
  }

  return (
    <>
      <button
        className="bg-[#2b3945] text-slate-200 flex justify-center items-center rounded-lg px-8 py-4 mt-20 ml-4 gap-2 text-lg"
        onClick={goBack}
      >
        <BsArrowLeft /> <span>Back</span>
      </button>
      {country && (
        <div className="container lg:mx-4 my-7 grid grid-col-1 lg:grid-cols-2 w-[95%] mx-auto">
          <div className="imageSide relative aspect-[3/2]">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="details px-10 pt-14">
            <h4 className="text-slate-200 text-3xl font-semibold mb-5">
              {country.name.common}
            </h4>
            <div className="lists-container flex justify-between mb-5 flex-col gap-5 sm:flex-row">
              <ul>
                <li className="text-slate-200">
                  <span className="font-semibold">Native Name:</span>{" "}
                  {country.name.official}
                </li>
                <li className="text-slate-200">
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </li>
                <li className="text-slate-200">
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </li>
                <li className="text-slate-200">
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital}
                </li>
              </ul>
              <ul>
                <li className="text-slate-200">
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {country.tld}
                </li>
                <li className="text-slate-200">
                  <span className="font-semibold">Currencies:</span>{" "}
                  {Array.from(Object.values(country.currencies)).map(
                    (currency) => currency.name
                  )}
                </li>
                <li className="text-slate-200">
                  <span className="font-semibold">Languages:</span>{" "}
                  {languages.map(
                    (lang) =>
                      `${lang}${
                        languages.indexOf(lang) !== languages.length - 1
                          ? ", "
                          : ""
                      }`
                  )}
                </li>
              </ul>
            </div>
            <div className="flex gap-3 sm:items-center items-start flex-col sm:flex-row">
              {country.borders?.length > 0 && (
                <>
                  <h4 className="text-slate-200 font-semibold">
                    Border Countries:
                  </h4>
                  <ul className="flex gap-2 flex-col sm:flex-row">
                    {country.borders.map((border) => (
                      <BorderCountry key={nanoid()}>{border}</BorderCountry>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CountryName;
