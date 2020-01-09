import React, { Component } from 'react';
import '../App.css';
import FossilLine from './FossilLine';
import { Button, Popup } from 'semantic-ui-react';

//FossilData.jsx fetches data from API on page load (componentDidMount)
//Filters the data on years after 1900 using the map() function to bind each set of data (gas, liquid, etc.) to create a filtered array
//Stores the entire data array in fuelEmissions and the filtered array in fuelEmissionsChart
//This is so that we can still access all the data, but choose to use years 1900 and forward in the chart
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

    //Rendering two separate pop-ups + the actual chart
    //Pop-up 1 is about how to read the diagram, pop-up 2 is the information about the data itself, teaching the user about methods used for data gathering
    //FossilLine is fed the data from the filtered array (fuelEmissionsChart), using it to populate the chart and show only years 1900 and forward
    render(){
        return(
            <div>
                <h1 style={{color: "#38A0BC", marginTop: "50px"}}>Don't be fooled by the beautiful colors, these fossil fuels are dirty!</h1>
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
                    <Popup trigger={<Button icon='question circle' label='I want to learn more!'></Button>} flowing position="bottom center" on='click'>
                    <p><strong>What is million metric tonnes?</strong><br/>You’ll often encounter the term “million metric tonnes of carbon” when reading about fossil fuel emissions.<br/> Crystal clear? Yeah, no, we didn’t get it either. Simply put, fossil fuel emissions are measured by comparing<br/> the emissions from various greenhouse gases based on their global warming potential. The global warming<br/> potential, in turn, describes how long a greenhouse gas is active in the atmosphere. Getting the right<br/> numbers means you multiply the tonnes of the gas with their respective global warming potentials,<br/> ending up with the final million metric tonne of carbon measurement.</p>
                    <p><strong>What's greenhouse gases?</strong><br/>So what’s greenhouse gas then, and why do you need to know about it? Greenhouse gases<br/> are a collection of gases that contribute to global warming. By collecting data about them and<br/> comparing them in million metric tonnes, we can determine their individual impact on climate change.</p>
                    <p><strong>So what's up with the diagram? Fossil fuels?</strong><br/>If you look at the diagram you’ll see a number of different categories. How do they relate<br/> to tonnes and greenhouse gases? Fossil fuel is a term used to describe different kinds of burning<br/>  of non renewable energy sources and are often divided up and measured like here in the diagram..</p>
                    <br/>
                    </Popup>
                <FossilLine 
                chartData={this.state.fuelEmissionsChart} /> 
            </div>
        );
    }
}

export default FossilData;