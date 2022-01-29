import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header avatar="https://i.imgur.com/5dsWyCn.png" />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar
            userName="Tomcy Thomas"
            email="tomcy48@gmail.com"
            avatar="https://i.imgur.com/5dsWyCn.png"
          />
          <Feed />
          {/* Widgets */}
        </div>
      )}
    </div>
  );
}

export default App;
