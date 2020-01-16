import React, { Component } from "react";
import "../App.css";
import SeaLine from "./SeaLine";
import { Button, Popup } from "semantic-ui-react";

//SeaData.jsx fetches data from API on page load (componentDidMount)
//Filters the data on years after 1900 using the map() function to bind each set of data (year, GMSL) to create a filtered array
//Stores the entire data array in seaData and the filtered array in seaChart
//This is so that we can still access all the data, but choose to use years 1900 and forward in the chart
class SeaData extends Component {
  state = {
    seaData: [],
    seaChart: []
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    let filterSea = [];
    data.map(data =>
      filterSea.push({
        Year: new Date(data.Time).getFullYear(),
        "Sea Level (millimeters)": data.GMSL
      })
    );

    filterSea = filterSea.filter(x => x.Year > 1899);

    console.log(filterSea);
    this.setState({
      seaData: data,
      seaChart: filterSea
    });
  }

  //SeaData.jsx fetches data from API on page load (componentDidMount)
  //Filters the data on years after 1900 using the map() function to bind each set of data (year, GMSL) to create a filtered array
  //Stores the entire data array in seaData and the filtered array in seaChart
  //This is so that we can still access all the data, but choose to use years 1900 and forward in the chart
  render() {
    return (
      <div>
        <h1 style={{ color: "#38A0BC", marginTop: "50px" }}>
          Put on your swimmies - sea levels are rising so soon you might have to
          swim to work!
        </h1>
        <br />
        <Popup
          trigger={
            <Button
              icon="question circle"
              label="How do I read the diagram?"
            ></Button>
          }
          flowing
          position="bottom center"
          on="click"
        >
          <div className="PopUpText">
            <p>
              When talking about sea level measurements, we talk about data
              called “Global Mean Sea Level” or GMSL for short. What the numbers
              represent <br />
              is the changes in sea levels for the world's oceans since 1880,
              based on both long time tide measurements as well as recent
              satellite data.
            </p>
            <p>
              The diagram shows the changes in absolute sea level in
              millimeters, the "height" of the ocean surface if you will, not
              taking into account <br />
              whether nearby land is rising or falling.
            </p>
            <br />
          </div>
        </Popup>
        <Popup
          trigger={
            <Button
              icon="question circle"
              label="I want to learn more!"
            ></Button>
          }
          flowing
          position="bottom center"
          on="click"
        >
          <div className="PopUpText">
            <p>
              <strong>So, what methods are used?</strong>
              <br />
              Okay, so shoving a ruler into the ocean is by no means a way to
              measure the rising sea levels.
              <br /> What is? If your guess is satellites, you're right. If your
              second guess was through NASA,
              <br /> bonus point. Space born satellites measures changes in
              water mass, including groundwater,
              <br /> rivers, snow and ice. It also measures and mass changes
              within the ocean itself, as well as the
              <br /> movement of water between land and ocean.
            </p>
            <p>
              <strong>Satellites - check. What else?</strong>
              <br />
              Measurements from the satellites are paired with measurements from
              something called
              <br /> Argo sensors, which are basically free floating sensors
              (roughly 4000 of them!) measuring
              <br /> sea temperature and salt levels. But! Yes, there's always a
              but. It doesn't stop there.
              <br /> Changes are also measured via aircraft.
            </p>
            <p>
              <strong>
                Satellites and sensors - check. But planes, really?
              </strong>
              <br />
              Planes? To measure sea levels? What? Yeah. It even has a fancy
              mission name:
              <br /> Operation IceBridge. Typical NASA. The measurements are
              made by laser altimetry.
              <br /> This is a method that uses lasers that bounce off the
              surface of for example glaciers,
              <br /> giving scientists a topographic map of the measured area.
              This can then be used to track
              <br /> changes over time, when glaciers melt, ending up in? You
              guessed it. The ocean.
            </p>
            <br />
          </div>
        </Popup>
        <SeaLine chartData={this.state.seaChart} />
      </div>
    );
  }
}

export default SeaData;
