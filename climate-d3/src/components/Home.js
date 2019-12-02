import React, {Component} from 'react';
import '../App.css';

export default class Home extends Component {
  render(){
  return (
<div className="hejhopp">
<div class="ui link four cards">
<a class="ui card" href="/fossilfuel">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header">Fossil Fuel</div>
      <div class="description">
        Read about fossil fuel emissions.
      </div>
    </div>
</a>

<a class="ui card" href="/temperature">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header">Temperature</div>
      <div class="description">
        Read about global temperatures.
      </div>
    </div>
</a>

<a class="ui card" href="/glacier">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header">Glacier</div>
      <div class="description">
        Read about glacier sizes.
      </div>
    </div>
</a>

<a class="ui card" href="/sealevel">
    <div class="image">
      <img src="images/beach-pic.png" alt=""/>
    </div>
    <div class="content">
      <div class="header">Sea Levels</div>
      <div class="description">
        Read about rising sea levels.
      </div>
    </div>
</a>
</div>
</div>

  )
}
}; 


