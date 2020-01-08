import React, { Component } from 'react';
import { Brush, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

class GlacierLine extends Component {
  render() {
    return (
      <div class="ui basic segment">
      <div className="FossilDataBox">
      <AreaChart width={1200} height={700} data={this.props.chartData}
            margin={{top: 0, right: 30, left: 30, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="Year"/>
        <YAxis/>
        <Tooltip/>
          <Area type="monotone" dataKey="Glacier Mass Balance (average value in meters)" stackId="1" stroke="#38A0BC" fill="lightblue" legendType="circle"/>
          <Brush dataKey="Year" width={1050} height={25} travellerWidth={8} x={105} y={670}/>
      </AreaChart>
      </div>
      <p className="SliderText">Use the slider above to zoom in and out in the diagram and compare data by narrowing down the years shown. <br/>Click and drag the sides to zoom and click and drag to pan.</p>
      </div>
    );
  }
}

export default GlacierLine;