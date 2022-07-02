import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/13/YOUTUBE_LOGO.png"
          alt=""
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <SearchIcon className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar
          alt="any person"
          src="https://upload.wikimedia.org/wikipedia/commons/d/dd/236456%2B%D8%A7%D9%84%D9%84%D8%AA%D8%A7%D8%A1%D8%AA%D8%A7%D9%8A%D8%A1%D8%AA.jpg"
        />
      </div>
    </div>
  );
}

export default Header;
