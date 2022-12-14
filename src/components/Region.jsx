import React, { useRef, useState, Fragment } from "react";
import "../region.css";
import { FaAngleDown } from "react-icons/fa";
function Regoan() {
  const select = useRef(null);
  let [status, setStatus] = useState(false);
  const toggleOptions = () => {
    const selectEL = select.current;
    if (!status) {
      selectEL.classList.add("open");
      setStatus(true);
    } else if (status) {
      selectEL.classList.remove("open");
      setStatus(false);
    }
  };
  return (
    <Fragment>
      <div className="select-container">
        <div className="select" onClick={toggleOptions}>
          Filter by Region <FaAngleDown />
        </div>
        <ul className="filters" ref={select}>
          <li>Africa</li>
          <li>Amercia</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </Fragment>
  );
}

export default Regoan;
