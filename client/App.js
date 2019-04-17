/**
 * Root Component
 */
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import IntlWrapper from "./modules/Intl/IntlWrapper";
import { Route, Link, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";

// Import Routes
import routes from "./routes";

// Base stylesheet
// require("./main.css");
import "./styles/style.sass";

export default function App(props) {
  return (
    <BrowserRouter basename="pages">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};
