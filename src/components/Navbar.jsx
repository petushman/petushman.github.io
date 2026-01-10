import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [isLight, setIsLight] = useState(
    localStorage.getItem("isThemeLight") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isThemeLight", isLight);
  }, [isLight]);
  return (
    <div className="navbar  bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost primar  text-xl">
          {" "}
          <img
            className="w-10"
            src="../photo_2026-01-08_18-11-59-removebg-preview.png"
          />{" "}
          petushman{" "}
        </Link>
      </div>
      <div className="flex-none">
        <Link to="history" className="btn mx-2">
          История
        </Link>
        <Link to="/izd" className="btn mx-2">
          Издания
        </Link>
        <input
          type="checkbox"
          checked={isLight}
          value='light'
          onChange={() => setIsLight((prev) => !prev)}
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default Navbar;
