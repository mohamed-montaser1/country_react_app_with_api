import React, { useEffect, useState, useRef, useReducer } from "react";
import axios from "axios";
import "../maincontent.css";
import "../filter.css";
import "../region.css";
import "../input.css";
import { FaSearch, FaAngleDown, FaArrowUp } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const api_url = "https://restcountries.com/v3.1/";
export function MainContent() {
  const select = useRef(null);
  let [status, setStatus] = useState(false);
  const [data, setData] = useState([]);
  const [reducerValue, foceUpdate] = useReducer((x) => x + 1, 0);
  const buttonElementRef = useRef(null);
  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios.get(`${api_url}/all`);
      const data = res.data;
      setData(data);
    };
    fetchAllCountries();
  }, [reducerValue]);
  const getCountryByName = async (countryName) => {
    if (countryName == "") {
      const fetchAllCountries = async () => {
        foceUpdate();
      };
      fetchAllCountries();
    } else {
      const res = await axios.get(`${api_url}/name/${countryName}`);
      const data = res.data;
      setData(data);
    }
  };
  const toggleOptions = () => {
    const selectEL = select.current;
    if (!status) {
      selectEL.classList.add("open");
      setStatus(true);
    } else if (status) {
      selectEL.classList.remove("open");
      setStatus(false);
    }
  };
  const filterByRegion = async function (x) {
    if (x == "all") {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      const data = res.data;
      setData(data);
    } else {
      const res = await axios.get(`https://restcountries.com/v3.1/region/${x}`);
      const data = res.data;
      setData(data);
    }
  };
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY >= 600) {
        buttonElementRef.current.classList.add("show");
      } else {
        buttonElementRef.current.classList.remove("show");
      }
    };
  }, [window.scrollY]);
  return (
    <>
      <div className="container">
        <div className="filter-container">
          <div className="input">
            <FaSearch />
            <input
              onInput={(e) => getCountryByName(e.target.value)}
              type="search"
              placeholder="Search for a country..."
              autoFocus={true}
            />
          </div>
          <div className="select-container">
            <div className="select" onClick={toggleOptions}>
              Filter by Region <FaAngleDown />
            </div>
            <ul className="filters" ref={select}>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"all"}
              >
                all
              </li>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"Africa"}
              >
                Africa
              </li>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"Americas"}
              >
                Americas
              </li>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"Asia"}
              >
                Asia
              </li>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"Europe"}
              >
                Europe
              </li>
              <li
                onClick={(e) => filterByRegion(e.target.getAttribute("value"))}
                value={"Oceania"}
              >
                Oceania
              </li>
            </ul>
          </div>
        </div>
        <main className="main">
          {data.map((e) => {
            if (e.name.common == "Israel") {
              return "";
            } else {
              return (
                <>
                  <NavLink
                    to={`/details/${e.name.common}`}
                    data-name={e.name.common}
                  >
                    <div className="country">
                      <img src={e.flags.png} alt="" />
                      <div className="text-body">
                        <h2>{e.name.common}</h2>
                        <ul>
                          <li>
                            Population: <span>{e.population}</span>
                          </li>
                          <li>
                            Region: <span>{e.region}</span>
                          </li>
                          <li>
                            Capital: <span>{e.capital}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            }
          })}
        </main>
        <button
          className="back-to-top"
          onClick={(e) => window.scrollTo(0, 0)}
          ref={buttonElementRef}
        >
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}
