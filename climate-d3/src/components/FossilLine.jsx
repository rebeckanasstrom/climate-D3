import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class FossilLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="FossilDataBox"> 
            <LineChart
            width={1200}
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
            <Line type="monotone" dataKey="Total" stroke="#8884d8" activeDot={{ r: 8 }}/>
            <Line type="monotone" dataKey="Gas Fuel" stroke="#F8B195" />
            <Line type="monotone" dataKey="Solid Fuel" stroke="#355C7D" />
            <Line type="monotone" dataKey="Liquid Fuel" stroke="#C06C84" />
            <Line type="monotone" dataKey="Cement" stroke="#6C5B7B" />
            <Line type="monotone" dataKey="Gas Flaring" stroke="#F67280" />
          </LineChart>
      </div>
      </div>
    );
  }
}

export default FossilLine;