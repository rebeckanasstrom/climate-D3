import React, { Component } from 'react';
import '../App.css';
import SeaLine from './SeaLine';
import { Button, Popup } from 'semantic-ui-react';
import {SeaAccordion} from './AllAccordions';

class SeaData extends Component {
    state={
        seaData: [],
        seaChart: [],
    };

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/sealevel.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();

        let filterSea = [];
        data.map(data =>
            filterSea.push({
                Year: new Date(data.Time).getFullYear(),
                "Sea Level (millimeters)": data.GMSL
            })
        );

        //filterSea = filterSea.filter(x => x.Year > 1900);

        console.log(filterSea);
        this.setState({
            seaData: data,
            seaChart: filterSea
        });
      }

    render(){
        return(
            <div>
                <h1 style={{color: "rgb(84, 178, 204)", marginTop: "50px"}}>Line chart for fossil fuel emissions separated into categories</h1>
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing position="bottom center" on='click'>
                    <p>When talking about sea level measurements, we talk about data called “Global Mean Sea Level” or GMSL for short. What the numbers represent <br/>is the changes in sea levels for the world’s oceans since 1880, based on both long time tide measurements as well as recent satellite data. </p>
                    <p>The diagram shows the changes in absolute sea level in millimeters, the “height” of the ocean surface if you will, not taking into account <br/>whether nearby land is rising or falling.</p>
                    <br/>
                </Popup>   
                <SeaLine 
                chartData={this.state.seaChart} />
                <SeaAccordion />
            </div>
        );
    }
}

export default SeaData;