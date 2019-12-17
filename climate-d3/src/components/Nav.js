import React from 'react';
import '../App.css';
import Logo from '../cosmologo.png';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div><nav>
          <NavLink className="link-style" to="/">
               <img src={Logo} alt="logo" className="logo-style"/>
           </NavLink>
       <ul className="nav-links">
       <NavLink className="link-style" activeStyle={{color:'#54b2cc'}} to="/home">
               <li>HOME</li>
               </NavLink>
          <NavLink className="link-style" activeStyle={{color:'#54b2cc'}} to="/fossilfuel">
               <li>FOSSIL FUEL</li>
           </NavLink>
           <NavLink className="link-style" activeStyle={{color:'#54b2cc'}} to="/temperature">
               <li>TEMPERATURE</li>
           </NavLink>
           <NavLink className="link-style" activeStyle={{color:'#54b2cc'}} to="/glacier">
              <li>GLACIER</li>
           </NavLink>
           <NavLink className="link-style" activeStyle={{color:'#54b2cc'}} to="/sealevel">
              <li>SEA LEVEL</li>
           </NavLink>
       </ul>
    </nav></div>
  );
}

export default Nav;