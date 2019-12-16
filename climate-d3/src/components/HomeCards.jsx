import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Factory from '../factory.jpg';
import Drylandscape from '../drylandscape.jpg';
import Flood from '../flood.jpg';
import Meltingice from '../meltingice.jpg';

class HomeCards extends Component {
    render(){
        return(
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.43)"}}>
              <div className="HomeCardsBox">
<div class="ui link four cards">
<NavLink to="/fossilfuel">
<div class="ui card" style={{margin: "30px"}}>
    <div class="image">
      <img src={Factory} alt=""/>
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
  <div class="ui card" style={{margin: "30px"}}>
    <div class="image">
      <img src={Drylandscape} alt=""/>
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
  <div class="ui card" style={{margin: "30px"}}>
    <div class="image">
      <img src={Meltingice} alt=""/>
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
  <div class="ui card" style={{margin: "30px"}}>
    <div class="image">
      <img src={Flood} alt=""/>
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