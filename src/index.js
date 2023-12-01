import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyled } from "./style/GlobalStyled";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


library.add(faMagnifyingGlass);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);
