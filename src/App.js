import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settinngs/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              {/* <Navbar friends={props.state.sidebar.friends} /> */}
              <Navbar />
            </div>
            <div className="col-9">
              <Routes>
                <Route path="/profile" element={<Profile state={props.state} profilePage={props.state.posts.profilePage} dispatch={props.dispatch} />} />
                {/* <Route path="/dialogs/*" element={<Dialogs messages={props.state.messages.dialogsPage.messages} dialogs={props.state.messages.dialogsPage.dialogs} dialogsPage={props.state.messages.dialogsPage} dispatch={props.dispatch} />} /> */}
                <Route path="/dialogs/*" element={<DialogsContainer state={props.state} dispatch={props.dispatch} />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
