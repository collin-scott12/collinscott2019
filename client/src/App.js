import React, { Component } from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import "./styles/style.sass";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { normalize } from "path";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }
  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }
  // componentWillMount() {
  //   this.callAPI();
  // }
  render() {
    return (
      // <p className="App-intro">{this.state.apiResponse}</p>
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
}

export default App;
