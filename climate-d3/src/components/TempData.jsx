import React, { Component } from "react";
import "../App.css";
import TempLine from "./TempLine";
import { Button, Popup } from "semantic-ui-react";

//TempData.jsx fetches data from API on page load (componentDidMount)
//Filters the data on years after 1900 using the map() function to bind each set of data (year, temperature) to create a filtered array
//Stores the entire data array in tempData and the filtered array in tempChart
//This is so that we can still access all the data, but choose to use years 1900 and forward in the chart
class TempData extends Component {
  state = {
    tempData: [],
    tempChart: []
  };

  async componentDidMount() {
    const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
    const response = await fetch(url);
    const data = await response.json();

    let filterTemp = [];
    data.reverse().map(data =>
      filterTemp.push({
        Year: data.Year,
        "Temperature (degrees celcius)": data.Mean
      })
    );

    filterTemp = filterTemp.filter(x => x.Year > 1899);

    console.log(filterTemp);
    this.setState({
      tempData: data,
      tempChart: filterTemp
    });
  }

  //Rendering two separate pop-ups + the actual chart
  //Pop-up 1 is about how to read the diagram, pop-up 2 is the information about the data itself, teaching the user about methods used for data gathering
  //TempLine is fed the data from the filtered array (tempChart), using it to populate the chart and show only years 1900 and forward
  render() {
    return (
      <div>
        <h1
          style={{ color: "#38A0BC", marginTop: "50px", marginBottom: "30px" }}
        >
          HOT, HOT, HOT! Temperatures are getting closer to the +2 degree mark!
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
              Temperature is measured by collecting data from rougly 6 300
              meterological stations around the world.
            </p>
            <p>
              The collecting is done by scientists at NASA, who then compiles
              all the information to show a global average temperature change
              per year.
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
              <strong>Why should I care?</strong>
              <br />
              One degree here, one degree there. One week it’s cold, another
              week hot. Who cares, really?
              <br /> You, you should care! Why? While warming your front porch
              byone degree from one day
              <br /> to another might not seem significant, and isn’t, it is
              serious when the change is global.
            </p>
            <p>
              <strong>Global change, what is that?</strong>
              <br />
              When talking about temperature changes, we talk about a global
              average. That means
              <br /> the entire surface of the earth is one degree hotter. That
              is significant! To put this into
              <br /> perspective, all it took was a 1-2 degree global decrease
              to put the earth into a minor ice age.
            </p>
            <p>
              <strong>Why is even one degree really alarming?</strong>
              <br />
              Global warming, or temperature changes, might not even mean that
              all of the surface
              <br /> of the earth is one degree hotter always. But it leads to
              some pretty strange ongoings.
              <br /> Unusually cold winters followed by sweltering hot summers.
              Recognize that? Yeah.
              <br /> The world is unbalanced and it needs some help ASAP.
            </p>
            <br />
          </div>
        </Popup>

        <TempLine chartData={this.state.tempChart} />
      </div>
    );
  }
}

export default TempData;
