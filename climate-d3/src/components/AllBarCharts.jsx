import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const FossilData = [
  { name: "Plane", uv: 4000, amt: 2400 },
  { name: "Car", uv: 3000, amt: 2210 },
  { name: "Train", uv: 2000, amt: 2290 },
  { name: "Bike", uv: 2000, amt: 2290 }
];

class FossilBar extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="FossilDataBox">
          <BarChart
            width={600}
            height={300}
            data={FossilData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    );
  }
}

export { FossilBar };
