import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ArticleIcon from "@mui/icons-material/Article";
import Posts from "./Posts";
import { db } from "./firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Tomcy Thomas",
      desc: "Student",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateRoundedIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
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

      {post.map(({ id, data: { name, desc, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          desc={desc}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}
export default Feed;
