import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { getAllCountries } from "@/service/api-service/get";
import { apiUrl } from "@/service/apiUrl";
import { useState, useMemo } from "react";
import { Countries } from "@/types/country";
import Country from "@/components/Country";
import { nanoid } from "nanoid";
import Filter from "@/components/Filter";
import useCountry from "@/context/countryContext";
import UpButton from "@/components/UpButton";

export default function Home() {
  const { subCountries } = useCountry();

  return (
    <>
      <Filter />
      <div className="grid grid-cols-auto w-full px-4 py-7 gap-y-5 gap-x-4 place-items-center">
        {subCountries!.map((country) => {
          if (country.name.common === "Israel") return;
          return <Country country={country} key={nanoid()} />;
        })}
      </div>
      <UpButton />
    </>
  );
}
