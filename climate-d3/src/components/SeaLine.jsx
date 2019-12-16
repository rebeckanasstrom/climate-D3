import React, { Component } from 'react';
import { Brush, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class SeaLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="FossilDataBox"> 
            <LineChart
            width={1100}
            height={700}
            data={this.props.chartData}
            margin={{
              top: 50, right: 30, left: 30, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Sea Level" stroke="darkblue" fill="darkblue" dot={false} activeDot={{ r: 8 }} legendType="circle"/>
            <Brush dataKey="Year" stroke="grey" slide="red" fill="rgba(250, 211, 202, 0.2)"/>
          </LineChart>
      </div>
      </div>
    );
  }
}

export default SeaLine;