import React, { Component } from "react";
import "../styles/style.sass";

import ProfilePic from "../img/profile-pic.jpg";

class About extends Component {
  render() {
    return (
      <section>
        <img className="profile-pic profile-main" src={ProfilePic} />
        <div className="profile-main">
          <h4>Collin A Scott</h4>
          <h5>User Experience Designer</h5>
        </div>
        <br />
        <div>
          <div className="display">
            <h3 className="about-title">My Story</h3>
            <p className="para-type about-text">
              As a designer and developer with a computer science degree from
              Appalachian State University, I strive to have the ability to
              communicate with teams eliminating the language gap between
              designers and developers. Thanks to years of working in web design
              and development, I have mastered the tricks and patterns needed
              accomplishing many different issues.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
