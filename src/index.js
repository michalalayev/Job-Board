import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

// ReactDom.render(
//   <App />, document.getElementById("root")
// );

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
