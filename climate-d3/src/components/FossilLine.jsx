import React, { Component } from 'react';
import { Brush, ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class FossilLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
      <div className="FossilDataBox">
      <ComposedChart width={1300} height={700} data={this.props.chartData}
            margin={{top: 50, right: 30, left: 30, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="Year"/>
        <YAxis/>
        <Tooltip/>
          <Line type='monotone' dataKey='Total' stroke="red" strokeWidth="3px" dot={false} legendType="circle"/>
          <Area type="monotone" dataKey="Gas Fuel" stackId="1" stroke="#F8B195" fill="#F8B195" dot={false} legendType="circle"/>
          <Area type="monotone" dataKey="Solid Fuel" stackId="1" stroke="#355C7D" fill="#355C7D" dot={false} legendType="circle"/>
          <Area type="monotone" dataKey="Liquid Fuel" stackId="1" stroke="#C06C84" fill="#C06C84" dot={false} legendType="circle"/> 
          <Area type="monotone" dataKey="Cement" stackId="1" stroke="#6C5B7B" fill="#6C5B7B" dot={false} legendType="circle"/>
          <Area type="monotone" dataKey="Gas Flaring" stackId="1" stroke="#F67280" fill="#F67280" dot={false} legendType="circle"/>
          <Brush dataKey="Year"/>
      </ComposedChart>
      </div>
      <h4 style={{marginTop: "0", paddingTop: "0", fontSize: "1.1em", marginLeft: "60px"}}>Use the slider above to zoom in and out in the diagram and compare data by narrowing down the years shown. Click and drag the sides to zoom and click and drag to pan.</h4> 
      </div>
    );
  }
}

export default FossilLine;