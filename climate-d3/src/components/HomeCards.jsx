import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Beach2 from '../beach-pic.png';

class HomeCards extends Component {
    render(){
        return(
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.43)"}}>
              <div className="HomeCardsBox">
<div class="ui link four cards">
<NavLink to="/fossilfuel">
<div class="ui card" style={{margin: "50px"}}>
    <div class="image">
      <img src={Beach2} alt=""/>
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
  <div class="ui card" style={{margin: "50px"}}>
    <div class="image">
      <img src={Beach2} alt=""/>
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
  <div class="ui card" style={{margin: "50px"}}>
    <div class="image">
      <img src={Beach2} alt=""/>
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
  <div class="ui card" style={{margin: "50px"}}>
    <div class="image">
      <img src={Beach2} alt=""/>
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
</div>

        )
    }
}

export default HomeCards;