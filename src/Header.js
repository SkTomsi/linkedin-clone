import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />

        <div className="header__search">
          {/* SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeRoundedIcon} title="Home" />
        <HeaderOption Icon={PeopleAltRoundedIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterRoundedIcon} title="Jobs" />
        <HeaderOption Icon={MessageRoundedIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsRoundedIcon} title="Notifications" />
        <HeaderOption
          avatar="https://i.pinimg.com/564x/e0/ac/c6/e0acc6f4fbf487952acd6fc49a2afe12.jpg"
          title="Me"
        />
      </div>
    </div>
  );
}

export default Header;
