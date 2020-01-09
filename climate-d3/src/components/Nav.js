import React, { Component } from 'react';
import '../App.css';
import Logo from '../cosmologo.png';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

//Start of menu: NavLink for react router dom to work, menu.iten is for each item in the menu
export default class MenuExampleSecondary extends Component {
  state = { activeItem: '' } //State change to active for the clicked menu link

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
          name='home' //Name of the menu item
          active={activeItem === 'home'} //Code for changing the state for when it's active
          onClick={this.handleItemClick} //Handle the state change on click
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