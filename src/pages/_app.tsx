import Navbar from "@/components/Navbar";
import { CountryContextProvider } from "@/context/countryContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CountryContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </CountryContextProvider>
    </>
  );
}
