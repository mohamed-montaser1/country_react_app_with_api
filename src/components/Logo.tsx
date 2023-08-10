import useTheme from "@/context/themeContext";

function Logo() {
  const { theme } = useTheme();
  return (
    <h1 className={`text-lg font-semibold ${theme === "dark" ? "text-slate-200" : "text-[#111517]"} xs:text-2xl`}>
      Where In The World?
    </h1>
  );
}
export default Logo;
