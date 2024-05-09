import React from "react";
import ReactDOM from "react-dom";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is H1"),
    React.createElement("h2", {}, "This is H2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
