import React, { Component } from 'react';
import { Brush, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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
          <Area type="monotone" dataKey="Glacier Mass Balance (average value in meters)" stackId="1" stroke="blue" fill="lightblue" legendType="circle"/>
          <Brush dataKey="Year" stroke="grey" slide="red" fill="rgba(250, 211, 202, 0.2)"/>
      </AreaChart>
      </div>
      <h4 style={{marginTop: "0", paddingTop: "0"}}>Use the slider above to zoom in an out in the diagram. Click and drag the sides to zoom and click and drag to pan.</h4>
      </div>
    );
  }
}

export default GlacierLine;