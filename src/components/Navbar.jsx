import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to='/' className="btn btn-ghost primar  text-xl"> <img className="w-10" src="../photo_2026-01-08_18-11-59-removebg-preview.png"  /> petushman </Link>
      </div>
      <div className="flex-none"><Link className="btn">История</Link><Link className="btn">Издания</Link><Link className="btn"></Link></div>
    </div>
  );
};

export default Navbar;
