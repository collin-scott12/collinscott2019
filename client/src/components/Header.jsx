import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.sass";

import Resume from "../img/resume.pdf";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Dribbble } from "../img/dribbble.svg";
import { ReactComponent as Linkedin } from "../img/linkedin.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import { ReactComponent as Email } from "../img/email.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <div class="col-header-4">
          <Link class="header-links" to="Portfolio">
            PORTFOLIO
          </Link>
          <Link class="header-links" to="About">
            ABOUT
          </Link>
          <a class="header-links" href={Resume} target="_blank">
            RESUME
          </a>
        </div>
        <div class="col-header-2">
          <Link to="../">
            <Logo class="header-logo" />
          </Link>
        </div>
        <div class="col-header-4">
          <a
            class="header-icon-a"
            href="https://dribbble.com/collinscott"
            target="_blank"
          >
            <Dribbble class="header-icon" />
          </a>
          <a
            class="header-icon-a"
            href="https://www.linkedin.com/in/collin-scott/"
            target="_blank"
          >
            <Linkedin class="header-icon" />
          </a>
          <a
            class="header-icon-a"
            href="https://twitter.com/Collin_Scott12"
            target="_blank"
          >
            <Twitter class="header-icon" />
          </a>
          <a class="header-icon-a" href="mailto:collin@collinscott.com">
            <Email class="header-icon" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
