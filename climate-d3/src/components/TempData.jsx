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
                <h1 style={{color: "#E94D95", marginTop: "50px"}}>Temperatures getting closer to the +2 degree mark</h1>
                <br />
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing position="bottom center" on='click'>
                    <p>Temperature is measured by collecting data from rougly 6 300 meterological stations around the world. </p>
                    <p>The collecting is done by scientists at NASA, who then compiles all the information to show a global average temperature change per year. </p>
                    <br/>
                    <p><i>Use the slider at the bottom of the diagram to narrow down the years that are shown.</i></p>
                </Popup>
               <div class="ui grid">
               <div class="eleven wide column">
                <TempLine 
                chartData={this.state.tempChart} />
            </div>
            <div class="four wide column" style={{marginTop: '60px', padding: '20px', textAlign: 'left'}}>
                <h3 style={{color: "#E94D95"}}>Why does it matter?</h3>
                    <p>One degree here, one degree there. One week it’s cold, another week hot. Who cares, really? You, you should care! Why? While warming your 
                        front porch by one degree from one day to another might not seem significant, and isn’t, it is serious when the change is global. </p>
                    <p>When talking about temperature changes, we talk about a global average. That means the entire surface of the earth is one degree hotter. 
                        That is significant! To put this into perspective, all it took was a 1-2 degree global decrease to put the earth into a minor ice age. </p>               
                    <p>Global warming, or temperature changes, might not even mean that all of the surface of the earth is one degree hotter always. 
                        But it leads to some pretty strange ongoings. Unusually cold winters followed by sweltering hot summers. Recognize that? Yeah. 
                        The world is unbalanced and it needs some help ASAP. </p>
                </div>
                </div>
                
        </div>
        );
    }
}

export default TempData;