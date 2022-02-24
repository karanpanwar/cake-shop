import React from "react";
import ReactDOM from "react-dom";
import Home from "./theme/home.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
