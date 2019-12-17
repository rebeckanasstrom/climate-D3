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
                <Popup trigger={<Button icon='question circle' label='How do I read the diagram?'></Button>} flowing hoverable position="bottom center">
                    <p>So, glacier mass balance is the quantitative expression of a glacier’s changes in volume over time. The cumulative <br/>mass balance 
                        (which shows in the diagram below) is the mass of the glacier at a stated time, relative to its mass at some <br/>earlier time. Some 
                        glaciers have mass balance measurements going back decades, which means that scientists can analyse <br/>how mass balance is changing over time. </p>
                        <p>Glacier thickness, or their “Mass balance” can be thought of as the ‘health of a glacier’; glaciers losing more <br/>mass than they receive 
                        will be in negative mass balance and so will recede. Glaciers are sensitive ‘barometers’ <br/>to our changing world, making them a good tool in recording climate change.</p>
                    <br/>
                    <p><i>Use the slider at the bottom of the diagram to narrow down the years that are shown.</i></p>
                </Popup>
               <div class="ui grid">
               <div class="eleven wide column">
                <GlacierLine 
                chartData={this.state.glacierChart} />
            </div>
                        <div class="four wide column" style={{marginTop: '60px', padding: '20px', textAlign: 'left'}}>
                        <h3 style={{color: "#E94D95"}}>How does one measure a glacier, really?</h3>
                            <p>We mentioned on the page about sea levels that you can’t shove a ruler into the ocean and simply measure the changes. So, you’d be surprised to 
                                know that’s exactly how you measure the thickness of a glacier, or the glacier mass balance which is the scientific term. Well, one of the ways. 
                                Teams of scientists will travel to the glacier and stake it out, actually shoving stakes into the snow at exact depths providing point measurements surface. </p>
                            <p>And now you think “Really? Shoving sticks in ice? How does that help?!” We know. Few people, many sticks, even more glaciers to measure. In the 
                                cold nonetheless. It’s a challenging, exhausting and hard logistical nightmare. But it does help in keeping track of a few key points measuring 
                                ice depth, size, movement and water content. So, sticks in ice. That’s it? Of course not! </p>               
                            <p>The stick method is paired with the study of satellite images of glaciers. This is done in part by GLIMS: Global Land Ice Measurements from Space - 
                                100 investigators in over 24 countries building a database! That’s teamwork. The GLIMS team uses high-resolution satellite images from the Advanced 
                                Spaceborne Thermal Emission and Reflection Radiometer (ASTER) instrument and the Landsat Enhanced Thematic Mapper Plus (ETM+). Whoa. That’s a mouthful.  </p>
                        </div>
                        </div>
                </div>
        );
    }
}

export default GlacierData;