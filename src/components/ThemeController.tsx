import useTheme from "@/context/themeContext";
import { FaMoon } from "react-icons/fa";

function ThemeController() {
  const { changeThemeTo, theme } = useTheme();
  return (
    <button
      className="flex items-center gap-1 xs:gap-2"
      onClick={() => changeThemeTo!(theme === "light" ? "dark" : "light")}
    >
      <FaMoon className={`${theme === "dark" ? "text-slate-200" : "text-[#111517]"}`} />
      <span className={`font-medium text-md ${theme === "dark" ? "text-slate-200" : "text-[#111517]"}`}>Dark Mood</span>
    </button>
  );
}

export default ThemeController;
