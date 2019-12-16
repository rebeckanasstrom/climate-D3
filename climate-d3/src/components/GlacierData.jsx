import React, { Component } from 'react';
import '../App.css';
import GlacierLine from './GlacierLine';
import { Button, Popup } from 'semantic-ui-react';

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
                "Glacier Thickness (average value)": data["Mean cumulative mass balance"]
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
                <Popup
                    trigger={<Button icon='info' label='How do I read the diagram?' wide='very' />}
                    content='Total: Total carbon emissions from fossil fuel consumption and cement production (million metric tons of C)
                    Gas fuel: Carbon emissions from gas fuel consumption 
                    Liquid fuel: Carbon emissions from liquid fuel consumption
                    Solid fuel: Carbon emissions from solid fuel consumption
                    Cement production: Carbon emissions from cement production
                    Gas flaring: Carbon emissions from gas flaring'
                    style={{borderRadius: 0,
                        opacity: 0.7,
                        padding: '2em'}}
                    inverted
                    />
                <GlacierLine 
                chartData={this.state.glacierChart} />
            </div>
        );
    }
}

export default GlacierData;