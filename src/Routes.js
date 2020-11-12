import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./core/About";
import ContactUs from "./core/Contact";
import Home from "./core/Home";
import Team from "./core/Team";

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
