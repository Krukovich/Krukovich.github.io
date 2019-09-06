import React, { Component } from 'react';
import { bubble as Menu } from 'react-burger-menu'
import "../css/menu.css";

class BurgerMenu extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    render () {
      // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
      return (
        <div id="outer-container">
          <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <main id="page-wrap" />
              <a id="home" className="menu-item" href="/">Выбрать город</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
          </Menu>
        </div>  
      );
    }
  }

export default BurgerMenu;