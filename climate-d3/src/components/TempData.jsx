import React, { Component } from 'react';
import '../App.css';
import TempLine from './TempLine';
import { Button, Popup } from 'semantic-ui-react';
import {TempAccordion} from './AllAccordions';

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
                "Temperature (degrees celcius)": data.Mean,

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
                <h1 style={{color: "rgb(84, 178, 204)", marginTop: "50px"}}>Temperatures getting closer to the +2 degree mark</h1>
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing position="bottom center" on='click'>
                    <p>Temperature is measured by collecting data from rougly 6 300 meterological stations around the world. </p>
                    <p>The collecting is done by scientists at NASA, who then compiles all the information to show a global average temperature change per year. </p>
                    <br/>
                </Popup>
                <TempLine 
                chartData={this.state.tempChart} />
                <TempAccordion />
            </div>
        );
    }
}

export default TempData;