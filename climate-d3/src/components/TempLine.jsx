import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';

class TempLine extends Component {
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
            <Line type="monotone" dataKey="Temperature (degrees celcius)" stroke="red" dot={false} activeDot={{ r: 8 }} legendType="circle"/>
            <Brush dataKey="Year" stroke="grey" slide="red" fill="rgba(250, 211, 202, 0.2)"/>
          </LineChart>
      </div>
      <h4 style={{marginTop: "0", paddingTop: "0"}}>Use the slider above to zoom in an out in the diagram. Click and drag the sides to zoom and click and drag to pan.</h4>
      </div>
    );
  }
}

export default TempLine;