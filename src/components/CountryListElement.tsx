import useTheme from "@/context/themeContext";
import type { ReactNode } from "react";

interface Props {
  label: string;
  children: ReactNode;
}

function CountryListElement({ label, children }: Props) {
  const { theme } = useTheme();
  return (
    <li className={`${theme === "dark" ? "text-slate-200" : "text-slate-400"}`}>
      <span className="font-semibold">{label}</span> {children}
    </li>
  );
}

export default CountryListElement;
