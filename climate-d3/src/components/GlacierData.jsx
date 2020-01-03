import React, { Component } from 'react';
import '../App.css';
import GlacierLine from './GlacierLine';
import { Button, Popup } from 'semantic-ui-react';
import {GlacierAccordion} from './AllAccordions';

class GlacierData extends Component {
    state={
        glacierData: [],
        glacierChart: [],
    };

    async componentDidMount() {
        const url = "https://my.api.mockaroo.com/glaciersize.json?key=8eb9e6f0";
        const response = await fetch(url);
        const data = await response.json();

        let filterGlacier = [];
        data.map(data =>
            filterGlacier.push({
                Year: data.Year,
                "Glacier Mass Balance (average value in meters)": data["Mean cumulative mass balance"]
            })
        );

        filterGlacier = filterGlacier.filter(x => x.Year > 1900);

        console.log(filterGlacier);
        this.setState({
            glacierData: data,
            glacierChart: filterGlacier
        });
      }

    render(){
        return(
            <div>
                <h1 style={{color: "#E94D95", marginTop: "50px"}}>A representation of the average thickness of glaciers over time</h1>
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing position="bottom center" on='click'>
                    <p>So, glacier mass balance is the quantitative expression of a glacier’s changes in volume over time. The cumulative <br/>mass balance 
                        (which shows in the diagram below) is the mass of the glacier at a stated time, relative to its mass at some <br/>earlier time. Some 
                        glaciers have mass balance measurements going back decades, which means that scientists can analyse <br/>how mass balance is changing over time. </p>
                        <p>Glacier thickness, or their “Mass balance” can be thought of as the ‘health of a glacier’; glaciers losing more <br/>mass than they receive 
                        will be in negative mass balance and so will recede. Glaciers are sensitive ‘barometers’ <br/>to our changing world, making them a good tool in recording climate change.</p>
                    <br/>
                </Popup>
                <GlacierLine 
                chartData={this.state.glacierChart} />
                <GlacierAccordion />
                </div>
        );
    }
}

export default GlacierData;