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
        <div className="col-header-4">
          <Link className="header-links" to="Portfolio">
            PORTFOLIO
          </Link>
          <Link className="header-links" to="About">
            ABOUT
          </Link>
          <a className="header-links" href={Resume} target="_blank">
            RESUME
          </a>
        </div>
        <div className="col-header-2">
          <Link to="../">
            <Logo className="header-logo" />
          </Link>
        </div>
        <div className="col-header-4">
          <a
            className="header-icon-a"
            href="https://dribbble.com/collinscott"
            target="_blank"
          >
            <Dribbble className="header-icon" />
          </a>
          <a
            className="header-icon-a"
            href="https://www.linkedin.com/in/collin-scott/"
            target="_blank"
          >
            <Linkedin className="header-icon" />
          </a>
          <a
            className="header-icon-a"
            href="https://twitter.com/Collin_Scott12"
            target="_blank"
          >
            <Twitter className="header-icon" />
          </a>
          <a className="header-icon-a" href="mailto:collin@collinscott.com">
            <Email className="header-icon" />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
