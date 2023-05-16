import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div id="title">
        <h1>- Romain Fouillaron -</h1>
        <div>
          <p>Développeur Web Frontend</p>
          <span>_</span>
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
