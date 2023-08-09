import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function UpButton() {
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    if (window && window !== undefined) {
      window.addEventListener("scroll", (e) => {
        setIsShow(window.scrollY >= 1000);
      });
    }
  }, []);

  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <button
        className={`fixed bottom-14 right-7 bg-[#385874] text-slate-200 w-[50px] aspect-square rounded-xl flex justify-center items-center text-2xl shadow-lg border-none outline-none transition ease-in-out duration-300	 ${
          isShow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={goUp}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
}

export default UpButton;
