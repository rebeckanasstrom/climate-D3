import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush
} from "recharts";

//Code for generating a linechart using ReCharts
//Data used is the filtered array from TempData passed as props and dataKey is used to determine which data points are to be shown in the diagram
//Brush is the slider/comparison component, used to zoom and pan in the diagram, giving the user the ability to explore and interact with the data and compare between years
class TempLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="FossilDataBox">
          <LineChart
            width={1200}
            height={700}
            data={this.props.chartData}
            margin={{
              top: 10,
              right: 30,
              left: 30,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Temperature (degrees celcius)"
              stroke="rgb(228, 94, 63)"
              dot={false}
              activeDot={{ r: 8 }}
              legendType="circle"
            />
            <Brush
              dataKey="Year"
              width={1050}
              height={25}
              travellerWidth={8}
              x={105}
              y={670}
            />
          </LineChart>
        </div>
        <p className="SliderText">
          Use the slider above to zoom in and out in the diagram and compare
          data by narrowing down the years shown. <br />
          Click and drag the sides to zoom and click and drag to pan.
        </p>
      </div>
    );
  }
}

export default TempLine;
