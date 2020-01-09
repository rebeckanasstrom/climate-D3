import React, { Component } from "react";
import {
  Brush,
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

//Code for generating a composed chart (line + area chart) using ReCharts
//Data used is the filtered array from FossilData passed as props and dataKey is used to determine which data points are to be shown in the diagram
//Brush is the slider/comparison component, used to zoom and pan in the diagram, giving the user the ability to explore and interact with the data and compare between years
class FossilLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="FossilDataBox">
          <ComposedChart
            width={1200}
            height={700}
            data={this.props.chartData}
            margin={{ top: 0, right: 30, left: 30, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Total"
              stroke="#111"
              strokeWidth="2px"
              dot={false}
              legendType="circle"
            />
            <Area
              type="monotone"
              dataKey="Gas Fuel"
              stackId="1"
              stroke="#E84D95"
              fill="#E84D95"
              dot={false}
              legendType="circle"
            />
            <Area
              type="monotone"
              dataKey="Solid Fuel"
              stackId="1"
              stroke="#2AA1B5"
              fill="#2AA1B5"
              dot={false}
              legendType="circle"
            />
            <Area
              type="monotone"
              dataKey="Liquid Fuel"
              stackId="1"
              stroke="#9C245C"
              fill="#9C245C"
              dot={false}
              legendType="circle"
            />
            <Area
              type="monotone"
              dataKey="Cement"
              stackId="1"
              stroke="#F6D544"
              fill="#F6D544"
              dot={false}
              legendType="circle"
            />
            <Area
              type="monotone"
              dataKey="Gas Flaring"
              stackId="1"
              stroke="#FFA08F"
              fill="#FFA08F"
              dot={false}
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
          </ComposedChart>
        </div>
        <p className="SliderText">
          Use the slider above to zoom in and out in the diagram and compare
          data by narrowing down the years shown. <br /> Click and drag the
          sides to zoom and click and drag to pan.
        </p>
      </div>
    );
  }
}

export default FossilLine;
