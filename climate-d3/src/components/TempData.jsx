import React, { Component } from 'react';
import '../App.css';
import TempLine from './TempLine';
import Popup from "reactjs-popup";

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
                
                <Popup className='popUpRuta' trigger={open => (
                    <button className="pop-button">How do i read the diagram?</button>
                    )}
                    position="bottom center"
                    
                    closeOnDocumentClick
                >
                    
                    <span> <strong>Total:</strong> Total carbon emissions from fossil fuel consumption and cement production (million metric tons of carbon)<br/>
                    <strong>Gas fuel:</strong> Carbon emissions from gas fuel consumption<br/> 
                    <strong>Liquid fuel:</strong> Carbon emissions from liquid fuel consumption<br/>
                    <strong>Solid fuel:</strong> Carbon emissions from solid fuel consumption<br/>
                    <strong>Cement production:</strong> Carbon emissions from cement production<br/>
                    <strong>Gas flaring:</strong> Carbon emissions from gas flaring<br/> </span>
                   
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