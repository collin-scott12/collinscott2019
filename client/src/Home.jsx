import React, { Component } from "react";
import "./styles/style.sass";

class Home extends Component {
  render() {
    return (
      <div>
        <div class="home-content-top">
          <h1>Hello, I'm Collin Scott!</h1>
          <h2>A User Experience (UX) Designer</h2>
          <h3>With a knack for Web Development</h3>
        </div>
        <div class="home-content">
          <div class="home-block-1">
            <div class="home-leftImage img-webdes" />
            <div class="home-rightText">
              <h4>Web Design</h4>
              <h5>Filler Text goes here</h5>
            </div>
          </div>
          <div class="home-block-2">
            <div class="home-leftText">
              <h4>Web Dev</h4>
              <h5>Filler Text goes here</h5>
            </div>
            <div class="home-rightImage img-webdev" />
          </div>
          <div class="home-block-3 img-laz">
            <div class="home-centerImage">Lazarus Design Team</div>
          </div>
          <div class="home-block-3 img-app">
            <div class="home-centerImage">
              <div>Appalachian State Football</div>
            </div>
          </div>
          <div class="home-block-3">
            <div class="home-centerImage">RaysWeather</div>
          </div>
          <div class="home-block-3">
            <div class="home-centerImage">Graphic Design</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
