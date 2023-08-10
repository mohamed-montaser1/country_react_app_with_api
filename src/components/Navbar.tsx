import useTheme from "@/context/themeContext";
import Logo from "./Logo";
import ThemeController from "./ThemeController";
function Navbar() {
  const { theme } = useTheme();

  return (
    <nav
      className={`${
        theme === "dark" ? "bg-[#2b3945]" : "bg-[#eee]"
      } flex justify-between items-center p-4 border-b-[#111517] border-b-2`}
    >
      <Logo />
      <ThemeController />
    </nav>
  );
}

export default Navbar;
