import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settinngs/Settings";
import Login from "./components/Login/Login";
import Loader from "./common/Loader/Loader";

const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="container">
          <div className="row">
            <div className="col-3">
              {/* <Navbar friends={props.state.sidebar.friends} /> */}
              <Navbar />
            </div>
            <div className="col-9">
              <React.Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/profile/:userId?" element={<ProfileContainer />} />
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/users/*" element={<UsersContainer />} />
                  <Route path="/login/*" element={<Login />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
