import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Fossilmini from "../fossil-mini.jpg";
import TempMini from "../temp-mini.jpg";
import GlaciersMini from "../glacier-mini.jpg";
import SeaMini from "../sea-mini.jpg";

//Start of HomeCards: using Semantic UI CSS, 4 clickable cards are rendered as links to the pages of the application
//NavLink is used to work with React Router Dom
class HomeCards extends Component {
  render() {
    return (
      <div
        class="ui basic segment"
        style={{ backgroundColor: "rgba(250, 211, 202, 0.43)" }}
      >
        <div className="HomeCardsBox">
          <div class="ui link four cards">
            <NavLink to="/fossilfuel">
              <div class="ui card" style={{ margin: "20px", width: "250px" }}>
                <div class="image">
                  <img
                    src={Fossilmini}
                    alt="Illustrative collage of a power plant in a blue circle behind grey mountains."
                  />
                </div>
                <div class="content">
                  <div className="CardHeader">FOSSIL FUEL</div>
                  <div className="CardDescription">
                    Read about fossil fuel emissions.
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/temperature">
              <div class="ui card" style={{ margin: "20px", width: "250px" }}>
                <div class="image">
                  <img
                    src={TempMini}
                    alt="Illustrative collage of a map of the earth that is burning in a yellow circle with dry desert and a koala on a branch."
                  />
                </div>
                <div class="content">
                  <div className="CardHeader">TEMPERATURE</div>
                  <div className="CardDescription">
                    Read about global temperatures.
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/sealevel">
              <div class="ui card" style={{ margin: "20px", width: "250px" }}>
                <div class="image">
                  <img
                    src={SeaMini}
                    alt="Illustrative collage of a city that is being surrounded by water in a pink circle."
                  />
                </div>
                <div class="content">
                  <div className="CardHeader">SEA LEVELS</div>
                  <div className="CardDescription">
                    Read about glacier sizes.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </NavLink>

            <NavLink to="/glacier">
              <div class="ui card" style={{ margin: "20px", width: "250px" }}>
                <div class="image">
                  <img
                    src={GlaciersMini}
                    alt="Illustrative collage of a sad polar bear in a pink circle surrounded by ice. The headline reads Our glaciers are melting away - bit by bit."
                  />
                </div>
                <div class="content">
                  <div className="CardHeader">GLACIER</div>
                  <div className="CardDescription">
                    Read about rising sea levels.
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeCards;
