import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation () {

  return (
    <div className="sidebar">
      <img className="sidebar_profile" src="https://i.pinimg.com/736x/28/33/2b/28332bde2d3dd35ee18f7e0c680dc9cb.jpg"></img>
      <h2>Mike's Realm</h2>
      <div>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/resume" activeClassName="navActive">
              <i></i>
              <span>Resume</span>
            </NavLink>
          </li>          
        </ul>
      </div>
    </div>
  )
}