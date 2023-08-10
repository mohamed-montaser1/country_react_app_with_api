import useTheme from "@/context/themeContext";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function BorderCountry({ children }: Props) {
  const { theme } = useTheme();
  return (
    <li
      className={`${
        theme === "dark" ? "bg-[#2b3945]" : "bg-[#fff] text-slate-400"
      } px-3 py-1 text-slate-200 rounded-sm shadow-sm`}
    >
      {children}
    </li>
  );
}

export default BorderCountry;
