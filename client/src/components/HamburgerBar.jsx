import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.sass";

import Resume from "../img/resume.pdf";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as Dribbble } from "../img/dribbble.svg";
import { ReactComponent as Linkedin } from "../img/linkedin.svg";
import { ReactComponent as Twitter } from "../img/twitter.svg";
import { ReactComponent as Email } from "../img/email.svg";
import { NONAME } from "dns";

class HamburgerBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  handleLinkClick() {
    this.setState({ menuOpen: false });
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        // background: "black",
        width: "100%",
        // color: "white",
        fontFamily: "Lobster"
      }
    };
    const menu = ["Portfolio"];
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick();
          }}
        >
          {val}
        </MenuItem>
      );
    });

    return (
      <div className="header-hamburgerbar">
        <div style={styles.container}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="black"
          />
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
        {/* <Menu open={this.state.menuOpen} /> */}
      </div>
    );
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay
      },
      menuItem: {
        // fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        // marginTop: "50px",
        lineHeight: "60px",
        cursor: "pointer",
        color: this.state.hover ? "#1199EE" : "black",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
        textDecoration: "none"
      },
      line: {
        width: "90%",
        height: "1px",
        background: "#ddd",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay
      }
    };
    return (
      <div style={styles.container}>
        {/* <div
          style={styles.menuItem}
          onMouseEnter={() => {
            this.handleHover();
          }}
          onMouseLeave={() => {
            this.handleHover();
          }}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
        <div style={styles.line} /> */}

        <Link to="../" onClick={this.props.onClick} style={styles.menuItem}>
          Home
        </Link>
        <div style={styles.line} />
        <Link
          to="Portfolio"
          onClick={this.props.onClick}
          style={styles.menuItem}
        >
          Portfolio
        </Link>
        <div style={styles.line} />
        <Link to="About" onClick={this.props.onClick} style={styles.menuItem}>
          About
        </Link>
        <div style={styles.line} />
        <Link to="Resume" onClick={this.props.onClick} style={styles.menuItem}>
          Resume
        </Link>
        <div style={styles.line} />
        <a
          href="https://dribbble.com/collinscott"
          style={styles.menuItem}
          target="_blank"
        >
          <Dribbble className="header-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/collin-scott/"
          style={styles.menuItem}
          target="_blank"
        >
          <Linkedin className="header-icon" />
        </a>
        <a
          href="https://twitter.com/Collin_Scott12"
          style={styles.menuItem}
          target="_blank"
        >
          <Twitter className="header-icon" />
        </a>
        <a href="mailto:collin@collinscott.com" style={styles.menuItem}>
          <Email className="header-icon" />
        </a>
        <div style={styles.line} />
      </div>
    );
  }
}

/* Menu.jsx MENU DROP DOWN */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "white",
        opacity: 0.95,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2
      },
      menuList: {
        paddingTop: "3rem"
      }
    };
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
        {/* <div style={styles.menuList}>Hello</div> */}
      </div>
    );
  }
}

/* MenuButton.jsx  HAMBURGER BUTTON */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black"
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        marginTop: "20px",
        marginLeft: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px"
      },
      line: {
        height: "2px",
        width: "25px",
        background: this.state.color,
        transition: "all 0.2s ease"
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "7px"
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none"
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "7px"
      }
    };
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    );
  }
}

export default HamburgerBar;
