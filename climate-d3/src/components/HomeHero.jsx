import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import Hero from '../mountain-hero.jpg';


class HomeHero extends Component {
    render() {
        return(
                    <div className="heroContainer">
                        <LazyHero imageSrc={Hero} alt="Picture of beach" color={"white"} opacity={0} minHeight={'500px'}>
                            <h4 style={{textAlign: "left", marginBottom: "0px", fontSize: "1em", color: 'rgba(250, 211, 202)'}}>UNDERSTANDING CLIMATE CHANGE WITH COSMO</h4>
                            <h1 style={{textAlign: "left", marginTop: "0px", fontSize: "3em", color: 'rgba(250, 211, 202)'}}>Saving the planet - did we screw up or is there still time?</h1>
                        </LazyHero>
            
                        {/* ... */}
                    </div>
                );
            }
    }

export default HomeHero;
