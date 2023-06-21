import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import io from "socket.io-client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "../src/components/Store/store";
// const socket = io("http://localhost:8001", {
//   autoConnect: false,
// });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
