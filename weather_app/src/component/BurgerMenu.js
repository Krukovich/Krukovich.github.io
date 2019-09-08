import React, { Component } from "react";
import { scaleRotate as Menu } from 'react-burger-menu';

class BurgerMenu extends React.Component {

  componentDidMount() {
    window.addEventListener("click", function(event){
      if (event.target.className === "span-btn" || event.target.className === "span-btn active" ) {
        let str = event.target.className;
        if (str.indexOf("active") > 0) {
          event.target.classList.remove("active");
        } else {
          event.target.classList.add("active");
        }
      }
    });
  }

  render () {
    return (
    <div id="outer-container">
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
    <main id="page-wrap">
    <Menu right>
      <form name="selectWeatherBtn">
        <h3><i className="icon-filter" /> Узнай погоду</h3>
        <label className="main-input">
          <span className="span-btn" id="btnDay">День
          <input type="checkbox" name="options" id="weather_day" />
          </span>
        </label>
        <label className="main-input"><span className="span-btn">Неделя
          <input type="checkbox" name="options" id="weather_week" />
          </span>
        </label>
      </form>
    </Menu>
    </main>
    </div>
    );
  }
}

export default BurgerMenu;