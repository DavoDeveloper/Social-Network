import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { Provider } from "./components/MyContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
  root.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
};

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});

reportWebVitals();
