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
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing hoverable position="bottom center">
                    <p>En paragraf.</p>
                    <br/>
                    <p><i>Use the slider at the bottom of the diagram to narrow down the years that are shown.</i></p>
                </Popup>
               <div class="ui grid">
               <div class="eleven wide column"></div>    
                <SeaLine 
                chartData={this.state.seaChart} />
               <div class="four wide column" style={{marginTop: '60px', padding: '20px', textAlign: 'left'}}>
                <h3 style={{color: "#E94D95"}}>Sea level description</h3>
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

export default SeaData;