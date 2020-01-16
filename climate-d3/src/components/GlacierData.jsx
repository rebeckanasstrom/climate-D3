import React, { Component } from "react";
import "../App.css";
import GlacierLine from "./GlacierLine";
import { Button, Popup } from "semantic-ui-react";

//GlacieData.jsx fetches data from API on page load (componentDidMount)
//Filters the data on years after 1900 using the map() function to bind each set of data (year, Mean) to create a filtered array
//Stores the entire data array in glacierData and the filtered array in glacierChart
//This is so that we can still access all the data, but choose to use years 1900 and forward in the chart
class GlacierData extends Component {
  state = {
    glacierData: [],
    glacierChart: []
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    let filterGlacier = [];
    data.map(data =>
      filterGlacier.push({
        Year: data.Year,
        "Glacier Mass Balance (average value in meters)":
          data["Mean cumulative mass balance"]
      })
    );

    filterGlacier = filterGlacier.filter(x => x.Year > 1899);

    console.log(filterGlacier);
    this.setState({
      glacierData: data,
      glacierChart: filterGlacier
    });
  }

  //Rendering two separate pop-ups + the actual chart
  //Pop-up 1 is about how to read the diagram, pop-up 2 is the information about the data itself, teaching the user about methods used for data gathering
  //GlacierLine is fed the data from the filtered array (glacierChart), using it to populate the chart and show only years 1900 and forward
  render() {
    return (
      <div>
        <h1 style={{ color: "#38A0BC", marginTop: "50px" }}>
          The glaciers are getting unhealthy and are loosing thickness by the
          day!
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
              So, glacier mass balance is the quantitative expression of a
              glacier's changes in volume over time. The cumulative <br />
              mass balance (which shows in the diagram below) is the mass of the
              glacier at a stated time, relative to its mass at some <br />
              earlier time. Some glaciers have mass balance measurements going
              back decades, which means that scientists can analyse <br />
              how mass balance is changing over time.
            </p>
            <p>
              Glacier thickness, or their "Mass balance" can be thought of as
              the "health of a glacier"; glaciers losing more <br />
              mass than they receive will be in negative mass balance and so
              will recede. Glaciers are sensitive "barometers" <br />
              to our changing world, making them a good tool in recording
              climate change.
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
              <strong>Shoving a ruler into a glacier, really?</strong>
              <br />
              We mentioned on the page about sea levels that you can’t shove a
              ruler into
              <br /> the ocean and simply measure the changes. So, you’d be
              surprised to know that’s exactly how
              <br /> you measure the thickness of a glacier, or the glacier mass
              balance which is the scientific term.
              <br /> Well, one of the ways. Teams of scientists will travel to
              the glacier and stake it out, actually
              <br /> shoving stakes into the snow at exact depths providing
              point measurements of the glacier surface.
            </p>
            <p>
              <strong>How does the stick method help?</strong>
              <br />
              We mentioned on the page about sea levels that you can't shove a
              ruler into
              <br /> the ocean and simply measure the changes. So, you'd be
              surprised to know that's exactly how
              <br /> you measure the thickness of a glacier, or the glacier mass
              balance which is the scientific term.
              <br /> Well, one of the ways. Teams of scientists will travel to
              the glacier and stake it out, actually
              <br /> shoving stakes into the snow at exact depths providing
              point measurements of the glacier surface.
            </p>
            <p>
              <strong>How does the stick method help?</strong>
              <br />
              You might think "Really? Shoving sticks in ice? How does that
              help?!"" We know. Few people,
              <br /> many sticks, even more glaciers to measure. In the cold
              nonetheless. It's a challenging,
              <br /> exhausting and hard logistical nightmare. But it does help
              in keeping track of a few key
              <br /> points measuring ice depth, size, movement and water
              content.
            </p>
            <p>
              <strong>Are there other types measurements?</strong>
              <br />
              The stick or stake method is paired with the study of satellite
              images of glaciers.
              <br /> This is done in part by GLIMS: Global Land Ice Measurements
              from Space - 100 investigators in
              <br /> over 24 countries building a database! That's teamwork. The
              GLIMS team uses high-resolution
              <br /> satellite images from the Advanced Spaceborne Thermal
              Emission and Reflection Radiometer (ASTER)
              <br /> instrument and the Landsat Enhanced Thematic Mapper Plus
              (ETM+). Whoa. That's a mouthful.
            </p>
            <br />
          </div>
        </Popup>
        <GlacierLine chartData={this.state.glacierChart} />
      </div>
    );
  }
}

export default GlacierData;
