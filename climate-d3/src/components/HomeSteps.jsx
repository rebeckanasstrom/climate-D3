import React, { Component } from 'react';
import Read from "../read.png";
import Data from "../data-step.png";
import Inspire from "../inspire.png";
import Save from "../save.png";

//Steps segment using grids from semantic UI CSS, showing 4 pictures with text, non clickable
class HomeSteps extends Component {

    render() {
        return(
            <div class="ui basic segment">
            <h2 className="StepsHeader" style={{margin: "20px"}}>And now, you might ask, how can Cosmo help you save the planet?</h2>
                <div className="StepsBox">
                                
            <div class="ui container four column grid">
                <div class="column">
                    <img src={Read} alt="Hand holding books." style={{width:"250px"}} />
                    
                    <h3 className="StepsHeader">STEP ONE</h3>
                    <p>Read, read, read! <br></br>Read more. Get smart.</p>

                </div>
                <div class="column" >
                    <img src={Data} alt="Hand holding phone with diagram on screen." style={{width:"250px"}} />
                    
                    <h3 className="StepsHeader">STEP TWO</h3>
                    <p>Data, baby! <br></br>Look at the numbers.</p>

                </div>
                <div class="column" >
                    <img src={Inspire} alt="Hand holding light bulb." style={{width:"250px"}} />
                    
                    <h3 className="StepsHeader">STEP THREE</h3>
                    <p>Ready, action! <br></br>Get inspired. Do good.</p>

                </div>
                <div class="column" >
                    <img src={Save} alt="Two hands stretching towards planet earth." style={{width:"250px"}} />
                    
                    <h3 className="StepsHeader">STEP FOUR</h3>
                    <p>Save the planet! <br></br>No. Seriously. Do it.</p>

                </div>
            </div>
          </div>
         </div>
        )
    }
}

export default HomeSteps;
