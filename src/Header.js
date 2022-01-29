import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

function Header(avatar) {
  return (
    <div className="header">
      <div className="header__left">
        <img src={avatar} alt="" />

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={PeopleAltRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={MessageRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOption avatar="https://i.imgur.com/5dsWyCn.png" title="Me" />
      </div>
    </div>
  );
}

export default Header;
