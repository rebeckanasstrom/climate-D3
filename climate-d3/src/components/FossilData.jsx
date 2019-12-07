import React, { Component } from 'react';
import '../App.css';
import FossilLine from './FossilLine';

class FossilData extends Component {
    state={
        fuelEmissions: [],
        fuelEmissionsChart: [],
    };

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/co2.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();

        let fuelData = [];
        data.map(data =>
            fuelData.push({
                Year: data.Year,
                Total: data.Total,
                "Gas Fuel": data["Gas Fuel"],
                "Liquid Fuel": data["Liquid Fuel"],
                "Solid Fuel": data["Solid Fuel"], 
                Cement: data.Cement,
                "Gas Flaring": data["Gas Flaring"]
            })
        );

        fuelData = fuelData.filter(x => x.Year > 1900);

        console.log(fuelData);
        this.setState({
            fuelEmissions: data,
            fuelEmissionsChart: fuelData
        });
      }

    render(){
        return(
            <div>
                <h1 style={{color: "#E94D95", marginTop: "50px"}}>Line chart for fossil fuel emissions separated into categories</h1>
                <FossilLine 
                chartData={this.state.fuelEmissionsChart} />
            </div>
        );
    }
}

export default FossilData;