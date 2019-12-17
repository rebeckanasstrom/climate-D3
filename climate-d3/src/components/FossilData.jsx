import React, { Component } from 'react';
import '../App.css';
import FossilLine from './FossilLine';
import { Button, Popup } from 'semantic-ui-react';

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
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing hoverable position="bottom center">
                    <p><strong>Gas Fuel:</strong> fuels that are gas in their normal condition, like methane, propane and carbon monoxide.</p>
                    <p><strong>Liquid Fuel:</strong> a broad term to describe different liquid fuels, such as petroleum and oil.</p>
                    <p><strong>Solid Fuel:</strong> refers to coal based fuels, such as coal, charcoal, soot and wood. </p>
                    <p><strong>Cement:</strong> in order to make cement, chemical processes and burning of materials and fuel is required, in turn releasing high amounts of carbon dioxide.</p>
                    <p><strong>Gas Flaring:</strong>  the burning of gas and liquids in industrial processes, for example in petroleum refineries and chemical plants.</p>
                    <br/>
                    <p><i>Emissions are measured in "million metric tonnes of carbon dioxide equivalents" (MMTCDE). Every category has its own color and is represented by a <br/>
                    red line at the top. Use the slider at the bottom of the diagram to narrow down the years that are shown.</i></p>

                </Popup>
                <div class="ui grid">
                <div class="eleven wide column">
                <FossilLine 
                chartData={this.state.fuelEmissionsChart} />
                </div>
                <div class="four wide column" style={{marginTop: '60px', padding: '20px', textAlign: 'left'}}>
                <h3 style={{color: "#E94D95"}}>So, what does this mean, really?</h3>
                    <p>You’ll often encounter the term “million metric tonnes of carbon dioxide equivalents” (MMTCDE for short) when reading about fossil fuel emissions.
                        Crystal clear? Yeah, no, we didn’t get it either. Simply put, fossil fuel emissions are measured by comparing the emissions from various 
                        greenhouse gases based on their global warming potential. The global warming potential, in turn, describes how long a greenhouse 
                        gas is active in the atmosphere. Getting the right numbers means you multiply the tonnes of the gas with their respective global 
                        warming potentials, ending up with the final million metric tonne of carbon measurement. </p>
                    <p>Got it? Sort of? Good. So what’s greenhouse gas then, and why do you need to know about it? Greenhouse gases are a collection 
                        of gases that contribute to global warming. By collecting data about them and comparing them in million metric tonnes, we 
                        can determine their individual impact on climate change. </p>
                    <p>Moving on! If you look at the diagram you’ll see a number of different categories. How do they relate to tonnes and greenhouse 
                        gases? Fossil fuel is a term used to describe different kinds of burning of non renewable energy sources and are often divided 
                        up and measured like here in the diagram. These fuels originate from plants and animals that existed in the geological past 
                        (for example, millions of years ago).  </p>
                </div>
                </div>
            </div>
        );
    }
}

export default FossilData;