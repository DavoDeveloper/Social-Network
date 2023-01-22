import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { message: "Hi!,how are you", like: 50 },
  { message: "Its my first post", like: 35 },
];

let dialogs = [
  { name: "Simon", id: 1 },
  { name: "Jack", id: 2 },
  { name: "John", id: 3 },
  { name: "Angel", id: 4 },
  { name: "Ann", id: 5 },
  { name: "Smith", id: 6 },
];

let messages = [
  { message: "Hi", id: 1 },
  { message: "How are you", id: 2 },
  { message: "Yo", id: 3 },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
