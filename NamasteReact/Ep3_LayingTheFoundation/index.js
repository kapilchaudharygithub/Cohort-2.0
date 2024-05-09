import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const element = (
  <div className="container">
    <App />
    <h1 id="headingS">This is H1 written in JSX</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render([<App />, element]);
root.render(element);
