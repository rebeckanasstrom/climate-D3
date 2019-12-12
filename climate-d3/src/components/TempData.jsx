import React, { Component } from 'react';
import '../App.css';
import TempLine from './TempLine';

class TempData extends Component {
    state={
        tempData: [],
        tempChart: [],
    };

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/temp.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();

        let filterTemp = [];
        data.reverse().map(data =>
            filterTemp.push({
                Year: data.Year,
                Temperature: data.Mean,

            })
        );

        filterTemp = filterTemp.filter(x => x.Year > 1900);

        console.log(filterTemp);
        this.setState({
            tempData: data,
            tempChart: filterTemp
        });
      }

    render(){
        return(
            <div>
                <h1 style={{color: "#E94D95", marginTop: "50px"}}>Temperatures getting closer to the +2 degree mark</h1>
                <TempLine 
                chartData={this.state.tempChart} />
            </div>
        );
    }
}

export default TempData;