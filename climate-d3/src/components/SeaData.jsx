import React, { Component } from 'react';
import '../App.css';
import SeaLine from './SeaLine';

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
                Year: data.Time,
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
                <SeaLine 
                chartData={this.state.seaChart} />
            </div>
        );
    }
}

export default SeaData;