import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';

class HomeHero extends Component {
    render() {
        return(
                    <div>
                        <LazyHero imageSrc="/images/beach-hero.jpg" alt="Picture of beach" color={"white"} opacity={0.4}>
                            <h4 style={{textAlign: "left", marginBottom: "0px", fontSize: "1em"}}>UNDERSTANDING CLIMATE CHANGE WITH COSMO</h4>
                            <h1 style={{textAlign: "left", marginTop: "0px", fontSize: "3em"}}>Saving the planet - did we screw up or is there still time?</h1>
                        </LazyHero>
            
                        {/* ... */}
                    </div>
                );
            }
    }

export default HomeHero;
