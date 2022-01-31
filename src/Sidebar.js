import { Avatar } from "@mui/material";
import React from "react";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://i.pinimg.com/564x/09/6a/2e/096a2ebc712b792820004d6655b41bef.jpg"
          alt=""
        />
        <Avatar
          className="sidebar__avatar"
          src={user.photoUrl}
          style={{ textTransform: "uppercase" }}
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
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
        {recentItem("React JS")}
        {recentItem("Full Stack Dev")}
        {recentItem("Flutter")}
        {recentItem("UI UX")}
        {recentItem("Figma")}
      </div>
    </div>
  );
}

export default Sidebar;
