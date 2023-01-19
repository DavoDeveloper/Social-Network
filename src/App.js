import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Navbar />
          </div>
          <div className="col-9">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
