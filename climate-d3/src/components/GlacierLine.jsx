import React, { Component } from 'react';
import { Brush, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class GlacierLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
      <div className="FossilDataBox">
      <AreaChart width={1100} height={700} data={this.props.chartData}
            margin={{top: 50, right: 30, left: 30, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="Year"/>
        <YAxis/>
        <Tooltip/>
          <Legend />
          <Area type="monotone" dataKey="Glacier Thickness (average value)" stackId="1" stroke="blue" fill="lightblue" legendType="circle"/>
          <Brush dataKey="Year" stroke="grey" slide="red" fill="rgba(250, 211, 202, 0.2)"/>
      </AreaChart>
      </div>

      </div>
    );
  }
}

export default GlacierLine;