import React from "react";
import "./Feed.css";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRoundedIcon />
          <form>
            <input type="text" />
            <button /* onSubmit={} */ type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={InsertPhotoIcon} title="Photo" color="70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="7fc15e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="e7a33e" />
          <InputOption
            Icon={ArticleIcon}
            title="Write Article"
            color="fc9295"
          />
        </div>
      </div>
    </div>
  );
}
export default Feed;
