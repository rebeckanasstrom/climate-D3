import React, { Component } from 'react';
import '../App.css';
import SeaLine from './SeaLine';
import { Button, Popup } from 'semantic-ui-react';

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
                "Sea Level": data.GMSL
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
                <h1 style={{color: "#E94D95", marginTop: "50px"}}>Line chart for fossil fuel emissions separated into categories</h1>
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
                <SeaLine 
                chartData={this.state.seaChart} />
            </div>
        );
    }
}

export default SeaData;