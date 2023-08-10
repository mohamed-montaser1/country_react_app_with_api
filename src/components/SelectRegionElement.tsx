import useTheme from "@/context/themeContext";
import { region } from "@/types/country";
import type { ReactNode } from "react";
interface Props {
  onClick: (region: region) => void;
  region: region;
  children: ReactNode;
}

function SelectRegionElement({ onClick, region, children }: Props) {
  const { theme } = useTheme();
  return (
    <li
      className={`${theme === "dark" ? "text-slate-200" : "text-slate-400"} cursor-pointer`}
      onClick={() => onClick(region)}
    >
      {children}
    </li>
  );
}

export default SelectRegionElement;
