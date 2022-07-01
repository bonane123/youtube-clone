import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
    <div className="header">
      <h1>I am the header</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
        alt=""
      />
      <input type="text" />
      <SearchIcon />
      <MenuIcon />
    </div>
  );
}

export default Header;
