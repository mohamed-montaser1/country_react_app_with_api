import Navbar from "@/components/Navbar";
import { CountryContextProvider } from "@/context/countryContext";
import { ThemeContextProvider, themeValue } from "@/context/themeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<themeValue>("dark");

  useEffect(() => {
    if (window !== undefined) {
      let theme = localStorage.getItem("theme");
      if (!theme) {
        localStorage.setItem("theme", "dark");
        return;
      }
      setTheme(localStorage.getItem("theme")! as themeValue);
    }
  }, []);

  return (
    <>
      <ThemeContextProvider>
        <CountryContextProvider>
          <Navbar />
          <Component {...pageProps} />
        </CountryContextProvider>
      </ThemeContextProvider>
      <style jsx global>
        {`
          body {
            background: ${theme === "dark" ? "#202c37" : "#eee"};
          }
        `}
      </style>
    </>
  );
}
