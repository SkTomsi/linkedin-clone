import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar({ avatar, userName, email }) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/564x/09/6a/2e/096a2ebc712b792820004d6655b41bef.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={avatar} />
        <h2>{userName}</h2>
        <h4>{email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on Post</p>
          <p className="sidebar__statNumber">6503</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
