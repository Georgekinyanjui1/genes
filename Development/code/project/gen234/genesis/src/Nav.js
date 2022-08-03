import React from "react";
import Section from "./Section";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
      <div className="nav-cont">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfTfJjd_XZrU1hLSwxyUYKic7whedj-rQbSw&usqp=CAU"
          alt="logo"
        />
        <h1>Gene<span>sis</span></h1>
        <NavLink className="nav-but" to="/">Home</NavLink>
        <NavLink className="nav-but"to="/section">Section</NavLink>
        <NavLink className="nav-but"to="/quiz">Quiz</NavLink>
       
        
        
      </div>
    );
}
export default Nav