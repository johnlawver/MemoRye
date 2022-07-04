import React from "react";
import { say } from "../utils";

const Navbar = () => {
  const handleClick = (e) => {
    say(e.target.id);
  };
  return (
    <nav>
      <button id="animals" onClick={handleClick}>
        <span id="animals" role="img" aria-label="Animals">
          🐶
        </span>
      </button>
      <button id="numbers" onClick={handleClick}>
        <span id="numbers" role="img" aria-label="Numbers">
          🔢
        </span>
      </button>
      <button id="colors" onClick={handleClick}>
        <span id="colors" role="img" aria-label="Colors">
          🌈
        </span>
      </button>
      <button id="trucks" onClick={handleClick}>
        <span id="trucks" role="img" aria-label="Trucks">
          🚛
        </span>
      </button>
    </nav>
  );
};

export default Navbar;