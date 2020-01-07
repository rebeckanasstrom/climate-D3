import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';

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
              top: 50, right: 30, left: 30, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="Temperature (degrees celcius)" stroke="red" dot={false} activeDot={{ r: 8 }} legendType="circle"/>
            <Brush dataKey="Year"width={1050} height={25} travellerWidth={8} x={105} y={670}/>
          </LineChart>
      </div>
      <p className="SliderText">Use the slider above to zoom in and out in the diagram and compare data by narrowing down the years shown. <br/>Click and drag the sides to zoom and click and drag to pan.</p>
      </div>
    );
  }
}

export default TempLine;