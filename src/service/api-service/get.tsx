import { Countries, Country } from "@/types/country";
import axios from "axios";

export async function getAllCountries(api: string): Promise<Countries> {
  const { data } = await axios.get<Countries>(api, {
    method: "GET",
  });
  return data;
}

function getCountry() {}

function getByRegion() {}
