import React from "react";
import { slide as Menu } from "react-burger-menu";

class HamburguerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <a className="menu-item" href="/">
          Home
        </a>
        <a className="menu-item" href="/about">
          About
        </a>
        <a className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item" href="#" onClick={this.showSettings}>
          Settings
        </a>
      </Menu>
    );
  }
}

export default HamburguerMenu;
