import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Factory from '../factory.jpg';
import Drylandscape from '../drylandscape.jpg';
import Flood from '../flood.jpg';
import Meltingice from '../meltingice.jpg';
import Fossilmini from '../fossil-mini.jpg';
import TempMini from '../temp-mini.jpg';
import GlaciersMini from '../glacier-mini.jpg'
import SeaMini from '../sea-mini.jpg';

class HomeCards extends Component {
    render(){
        return(
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.43)"}}>
              <div className="HomeCardsBox">
<div class="ui link four cards">
<NavLink to="/fossilfuel">
<div class="ui card" style={{margin: "20px", width: "250px"}}>
    <div class="image">
      <img src={Fossilmini} alt=""/>
    </div>
    <div class="content">
      <div className="cardColor">FOSSIL FUEL</div>
      <div className="cardDescription">
        Read about fossil fuel emissions.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/temperature">
  <div class="ui card" style={{margin: "20px", width: "250px"}}>
    <div class="image">
      <img src={TempMini} alt=""/>
    </div>
    <div class="content">
      <div className="cardColor">TEMPERATURE</div>
      <div className="cardDescription">
        Read about global temperatures.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/sealevel">
  <div class="ui card" style={{margin: "20px", width: "250px"}}>
    <div class="image">
      <img src={SeaMini} alt=""/>
    </div>
    <div class="content">
      <div className="cardColor">SEA LEVELS</div>
      <div className="cardDescription">
        Read about glacier sizes.
      </div>
    </div>
</div>
</NavLink>

<NavLink to="/glacier">
  <div class="ui card" style={{margin: "20px", width: "250px"}}>
    <div class="image">
      <img src={GlaciersMini} alt=""/>
    </div>
    <div class="content">
      <div className="cardColor">GLACIER</div>
      <div className="cardDescription">
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