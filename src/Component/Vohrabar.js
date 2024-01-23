import React from 'react'
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import { Menuitems } from './Menuitem';
import "./Navbarstyle.css";
// import { ReactDOM } from 'react';

class Vohrabar extends Component {
// clicked event logic

state = {};
handleClick = () =>{
    this.setState({Clicked: !this.state.Clicked})
}

    render()
  {
    return (
        <>
     <nav className='navbarItem'>

        <h1 className='navbar-Logo'>TrippyM</h1>

      {/* navbar close tag mate */}

        <div className='navbar-menu-icons' onClick=
        {this.handleClick}>
        <i
         className={this.state.Clicked ? 
         "fa-regular fa-circle-xmark" : 
         "fa-solid fa-bars"}>
        </i>
        </div>



        <ul className={this.state.Clicked ? "navbar-menu active" : 
        "navbar-menu"}>
           {Menuitems.map((item, index)=>{
             return(
                       <li key={index}>
                          <NavLink className={item.cName} to={item.url}>
                            <i className={item.icon}></i>
                            {item.title}
                          </NavLink>
                       </li>
             );
            })}

        <button> Sign Up</button>
        </ul>
     </nav>
     </>
      )
 }
}
export default Vohrabar;

