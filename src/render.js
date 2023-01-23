import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { newPost } from "./state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEnireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} newPost={newPost} />
    </React.StrictMode>
  );
};
