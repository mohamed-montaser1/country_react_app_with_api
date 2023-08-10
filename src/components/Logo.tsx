import useTheme from "@/context/themeContext";
import Link from "next/link";

function Logo() {
  const { theme } = useTheme();
  return (
    <h1 className={`text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-[#111517]"} xs:text-2xl`}>
      <Link href={"/"}>Where In The World?</Link>
    </h1>
  );
}
export default Logo;
