import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function BorderCountry({ children }: Props) {
  return (
    <li className="bg-[#2b3945] px-3 py-1 text-slate-200 rounded-sm shadow-sm">
      {children}
    </li>
  );
}

export default BorderCountry;
