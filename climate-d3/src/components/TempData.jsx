import React, { Component } from 'react';
import '../App.css';
import TempLine from './TempLine';
import { Button, Popup } from 'semantic-ui-react';

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
                <TempLine 
                chartData={this.state.tempChart} />
            </div>
        );
    }
}

export default TempData;