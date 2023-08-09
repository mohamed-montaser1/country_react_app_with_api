import { FaMoon } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-[#2b3945] flex justify-between items-center p-4">
      <h1 className="text-lg font-semibold text-slate-200 xs:text-2xl">
        Where In The World?
      </h1>
      <button className="flex items-center gap-1 xs:gap-2">
        <FaMoon className="text-slate-200" />
        <span className="text-slate-200 font-medium text-md">Dark Mood</span>
      </button>
    </nav>
  );
}

export default Navbar;
