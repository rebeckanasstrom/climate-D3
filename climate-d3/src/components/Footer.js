import React, {Component} from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
      <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
      <h4>This is the end of the page. Copyright by Group D3.</h4>
      </div>
    )
  }
};

export {Footer};