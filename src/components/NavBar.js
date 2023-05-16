import React from "react";
import { Link, useLocation } from "react-router-dom";
import SvgMaker from "./SvgMaker";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav id="NavBar">
      <Link
        className={`${location.pathname === "/" ? "active-link" : ""}`}
        to="/"
      >
        <SvgMaker item="account" />
      </Link>
      <Link
        className={`${location.pathname === "/stack" ? "active-link" : ""}`}
        to="/stack"
      >
        <SvgMaker item="construction" />
      </Link>
      <Link
        className={`${location.pathname === "/portfolio" ? "active-link" : ""}`}
        to="/portfolio"
      >
        <SvgMaker item="image" />
      </Link>
      <Link
        className={`${location.pathname === "/contact" ? "active-link" : ""}`}
        to="/contact"
      >
        <SvgMaker item="courrier" />
      </Link>
    </nav>
  );
};

export default NavBar;
