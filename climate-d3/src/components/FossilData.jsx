import React, { Component } from 'react';
import '../App.css';
import FossilLine from './FossilLine';
import { Button, Popup } from 'semantic-ui-react';
import {FossilAccordion} from './AllAccordions';

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
                <h1 style={{color: "#54B2CC", marginTop: "50px"}}>Line chart for fossil fuel emissions separated into categories</h1>
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing position="bottom center" on='click'>
                    <p><strong>Gas Fuel:</strong> fuels that are gas in their normal condition, like methane, propane and carbon monoxide.</p>
                    <p><strong>Liquid Fuel:</strong> a broad term to describe different liquid fuels, such as petroleum and oil.</p>
                    <p><strong>Solid Fuel:</strong> refers to coal based fuels, such as coal, charcoal, soot and wood. </p>
                    <p><strong>Cement:</strong> in order to make cement, chemical processes and burning of materials and fuel is required, in turn releasing high amounts of carbon dioxide.</p>
                    <p><strong>Gas Flaring:</strong>  the burning of gas and liquids in industrial processes, for example in petroleum refineries and chemical plants.</p>
                    <br/>
                    <p>Emissions are measured in "million metric tonnes of carbon dioxide equivalents" (MMTCDE). Every category has its own color and is represented by a <br/>
                    red line at the top.</p>

                </Popup>
                <FossilLine 
                chartData={this.state.fuelEmissionsChart} />
                <FossilAccordion />
            </div>
        );
    }
}

export default FossilData;