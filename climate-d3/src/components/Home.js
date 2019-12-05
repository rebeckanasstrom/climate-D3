import React, {Component} from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
  render(){
  return (
<div className="hejhopp">
<div class="ui link four cards">
<NavLink to="/fossilfuel">
<div class="ui card">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header" className="changeColor">FOSSIL FUEL</div>
      <div className="description">
        Read about fossil fuel emissions.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/temperature">
  <div class="ui card">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header" className="changeColor">TEMPERATURE</div>
      <div className="description">
        Read about global temperatures.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/glacier">
  <div class="ui card">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header" className="changeColor">GLACIER</div>
      <div className="description">
        Read about glacier sizes.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/sealevel">
  <div class="ui card">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header" className="changeColor">SEA LEVELS</div>
      <div className="description">
        Read about rising sea levels.
      </div>
    </div>
</div>
</NavLink>
</div>
</div>

  )
}
}; 


