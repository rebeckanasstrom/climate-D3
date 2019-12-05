import React, { Component } from 'react';

class HomeSteps extends Component {
    render() {
        return(
            <div class="ui basic segment">
            <h2 className="StepsHeader" style={{margin: "20px"}}>And now, you might ask, how can Cosmo help you save the planet?</h2>
               <div className="HomeStepsBox"> 
                    <div class="ui equal width grid">
                        <div class="column" style={{margin: "40px"}}>
                            <h3 className="StepsHeader">STEP ONE</h3>
                            <p>Read, read, read! <br></br>Read more. Get smart.</p>
                        </div>
                        <div class="column" style={{margin: "40px"}}>
                            <h3 className="StepsHeader">STEP TWO</h3>
                            <p>Data, baby! <br></br>Look at the numbers.</p>
                        </div>
                        <div class="column" style={{margin: "40px"}}>
                            <h3 className="StepsHeader">STEP THREE</h3>
                            <p>Ready, action! <br></br>Get inspired. Do good.</p>
                        </div>
                        <div class="column" style={{margin: "40px"}}>
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
