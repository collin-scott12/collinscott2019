import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./styles/style.sass";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import PortfolioItemPage from "./pages/PortfolioItemPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="pages">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolioitempage/:id" component={PortfolioItemPage} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
