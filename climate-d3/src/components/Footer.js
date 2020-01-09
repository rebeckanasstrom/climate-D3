import React, { Component } from "react";
import "../App.css";

//Creates a footer component with a copyright text and some styling :)
class Footer extends Component {
  render() {
    return (
      <div class="FooterStyle">
        <div class="ui basic segment">
          <h4>&copy; 2020 by Group D3 </h4>
        </div>
      </div>
    );
  }
}

export { Footer };
