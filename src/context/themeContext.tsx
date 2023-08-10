import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type themeValue = "light" | "dark";
type ProvidedValue = {
  theme: themeValue;
  changeThemeTo: (theme: themeValue) => void;
};

const themeContext = createContext<Partial<ProvidedValue>>({});

interface Props {
  children: ReactNode;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<themeValue>("dark");

  useEffect(() => {
    if (window) {
      setTheme((window.localStorage.getItem("theme") as themeValue) || "dark");
    }
  }, []);

  const changeThemeTo = (theme: themeValue) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    console.log(theme);
  };

  const providedValue: ProvidedValue = {
    theme,
    changeThemeTo,
  };

  return <themeContext.Provider value={providedValue}>{children}</themeContext.Provider>;
};

export default function useTheme() {
  return useContext(themeContext);
}
