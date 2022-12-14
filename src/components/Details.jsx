import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import "../details.css";
const api_url = "https://restcountries.com/v3.1/";

function Details() {
  const [data, setData] = useState([]);
  const [countriesName, setCountriesName] = useState([]);
  const { countryName } = useParams();
  useEffect(() => {
    const getCountryByName = async () => {
      const res = await axios.get(`${api_url}/name/${countryName}`);
      const data = await res.data;
      setData(data);
    };
    getCountryByName();
  }, []);
  const getCountryByCode = async (countryCode) => {
    const res = await axios.get(
      `https://restcountries.com/v2/alpha/${countryCode}`
    );
    const data = res.data.name;
    console.log(data)
  };
  return (
    <div className="container container-d">
      <NavLink to={"/"} className="back">
        <FaLongArrowAltLeft /> Back
      </NavLink>
      <main className="main-content">
        {data?.map((country) => {
          // console.log(country);
          let arrayOfLangs = [];
          let arrayOfCurrencies = [];
          for (let i in country.languages) {
            arrayOfLangs.push(i);
          }
          for (let i in country.currencies) {
            arrayOfCurrencies.push(i);
          }
          return (
            <>
              <div className="details-container">
                <div className="image-side">
                  <img src={country.flags.svg} />
                </div>
                <div className="details">
                  <div className="body">
                    <div className="left">
                      <h1>{country.name.common}</h1>
                      <ul>
                        <li>Native Name: {country.name.official}</li>
                        <li>Region: {country.region}</li>
                        <li>Sub Region: {country.subregion}</li>
                        <li>Capital: {country.capital}</li>
                      </ul>
                    </div>
                    <div className="right">
                      <ul>
                        <li>Top Level Domain: {country.tld}</li>
                        <li>
                          Currencies:{" "}
                          {arrayOfCurrencies.map((e) =>
                            arrayOfCurrencies.indexOf(e) !==
                            arrayOfLangs.length - 1
                              ? e + ","
                              : e
                          )}
                        </li>

                        <li>
                          Languges:{" "}
                          {arrayOfLangs.map((e) =>
                            arrayOfLangs.indexOf(e) !== arrayOfLangs.length - 1
                              ? e + ","
                              : e
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer">
                    {country?.borders ? "Border Countries" : ""}{" "}
                    {country?.borders?.map((e) => {
                      getCountryByCode(e);
                      return (
                        <ul className="border-countries">
                          <li>{e}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </main>
    </div>
  );
}

export default Details;
