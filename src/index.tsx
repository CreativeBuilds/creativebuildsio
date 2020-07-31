import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Missing404 from "./pages/Missing404";

// The React App
const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">
        <Missing404 />
      </Route>
    </Switch>
  </Router>
);

// find our div element with an id of root
const root = document.getElementById("root");

// render the <App /> inside the "root" element
render(<App />, root);
