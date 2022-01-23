import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar
          userName="Tomcy Thomas"
          email="tomcy48@gmail.com"
          avatar="https://i.pinimg.com/564x/e0/ac/c6/e0acc6f4fbf487952acd6fc49a2afe12.jpg"
        />
        {/* Feed  */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
