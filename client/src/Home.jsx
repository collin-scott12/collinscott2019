import React, { Component } from "react";
import "./styles/style.sass";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-content-top">
          <h1>Hello, I'm Collin Scott!</h1>
          <h2>A User Experience (UX) Designer</h2>
          <h3>With a knack for Web Development</h3>
        </div>
        <div className="home-content">
          <div className="home-block-1">
            <div className="home-leftImage img-webdes" />
            <div className="home-rightText">
              <h4>Web Design</h4>
              <h5 className="home-block-text">
                From low fidelity wireframes to high fidelity prototypes,
                website design is a process that requires dedication and skill.
                There is no proper way to complete a project, but a faulty
                design will cause headache for the user. As a UX Designer, it is
                crucial to keep the user front and center.
              </h5>
            </div>
          </div>
          <div className="home-seperator" />
          <div className="home-block-2">
            <div className="home-leftText">
              <h4>Web Dev</h4>
              <h5 className="home-block-text">
                Producing a website can be a tough challenge because web
                technologies are constantly changing. Finding a balance between
                the new and standard technologies has become an art. I focus my
                time on the front-end working with user interfaces using ReactJS
                or HTML, CSS, and JavaScript. My thrill comes from seeing my
                work come to life inside a web browser.
              </h5>
            </div>
            <div className="home-rightImage img-webdev" />
          </div>
          <div className="home-seperator" />
          <a href="https://lazaruscharlotte.com" target="_blank">
            <div className="home-block-3 img-laz">
              <div className="home-centerImage img-laz-logo" />
            </div>
          </a>
          <div className="home-seperator" />
          <div className="home-block-3 img-app">
            <div className="home-centerImage">
              <div>Appalachian State Football</div>
            </div>
          </div>
          <div className="home-seperator" />
          <div className="home-block-3 img-rwc">
            <div className="home-centerImage" />
          </div>
          <div className="home-seperator" />
          <div className="home-block-3 img-gd">
            <div className="home-centerImage">Graphic Design</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
