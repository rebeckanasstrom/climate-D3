import React, { Component } from 'react';
import '../App.css';
import Logo from '../cosmologo.png';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

/*function Nav() {
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

export default Nav;*/


export default class MenuExampleSecondary extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div class="sticky">
        
      <Menu secondary>
      <NavLink className="menuLogo" to="/">
        <img src={Logo} alt="logo" className="logo-style"/>
 
           </NavLink>
        <Menu.Menu position='right'>
         <NavLink className="menuLinks" to="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
         </NavLink>
         <NavLink className="menuLinks" to="/fossilfuel">
        <Menu.Item
          name='fossilFuel'
          active={activeItem === 'fossilFuel'}
          onClick={this.handleItemClick}
        />
         </NavLink>
         <NavLink className="menuLinks" to="/temperature">
        <Menu.Item
          name='temperature'
          active={activeItem === 'temperature'}
          onClick={this.handleItemClick}
        />
         </NavLink>
         <NavLink className="menuLinks" to="/sealevel">
        <Menu.Item
          name='seaLevel'
          active={activeItem === 'sealevel'}
          onClick={this.handleItemClick}
        />
         </NavLink>
         <NavLink className="menuLinks" to="/glacier">
        <Menu.Item
          name='glacier'
          active={activeItem === 'glacier'}
          onClick={this.handleItemClick}
          style={{marginRight:"50px"}}
        />
        </NavLink>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}