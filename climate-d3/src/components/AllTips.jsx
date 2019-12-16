import React, { Component } from 'react';
import Tools from '../tools.png';
import Plastic from "../plastic.png";
import Subway from "../subway.png";

class FossilTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h3 style={{paddingBottom:"5rem"}}>Dont worry - we got you! We asked our community what they do to live a more sustainable everyday life</h3>
                    </div>
                    <div class="ui grid">
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a plastic recyling bin." src={Plastic} />
                        </div>
                        <div class="twelve wide column">
                            <h3>Unfriend the plastic in your life!</h3>
                            <p>Start with getting a pretty water bottle and make it a habit filling it up before you leave in the morning. Invest in a set of those nifty (and cute!) reusable cutlery sets for lunches on the go and bring a reusable straw. Keep it going with reusable bags for fruit and veggies and bring a tote bag for shopping!</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a subway train." src={Subway}/>

                        </div>
                        <div class="twelve wide column">
                            <h3>Embrace the commute!</h3>
                            <p>Say no thanks to cars and start embracing the public transport system. Getting from point A to B is often more time efficient and saves you money - especially if you’re living in the city. Still need a car? Try to share rides with coworkers or family and plan trips around going back and forth as few times as possible. And hey, after a night out - is that cab ride home really worth it?</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={Tools}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>It's probably not that broken, right?</h3>
                            <p>We’ve all been there. Something stops working and your first reaction is ”Shit, I need to buy a new one”. Before you go all trigger happy on that ”Add to cart”-button, consider getting it repaired. Computer or phone? Get it to a technician. Beloved jacket lost its zipper? Consult a tailor. Nothing is truly broken, until… well… it is. But then at least you tried. And don’t forget to recycle!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TempTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h3 style={{paddingBottom:"5rem"}}>Dont worry - we got you! We asked our community what they do to live a more sustainable everyday life</h3>
                    </div>
                    <div class="ui grid">
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a plastic recyling bin." src={Plastic}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Unfriend the plastic in your life!</h3>
                            <p>Start with getting a pretty water bottle and make it a habit filling it up before you leave in the morning. Invest in a set of those nifty (and cute!) reusable cutlery sets for lunches on the go and bring a reusable straw. Keep it going with reusable bags for fruit and veggies and bring a tote bag for shopping!</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a subway train." src={Subway}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Embrace the commute!</h3>
                            <p>Say no thanks to cars and start embracing the public transport system. Getting from point A to B is often more time efficient and saves you money - especially if you’re living in the city. Still need a car? Try to share rides with coworkers or family and plan trips around going back and forth as few times as possible. And hey, after a night out - is that cab ride home really worth it?</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={Tools}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>It's probably not that broken, right?</h3>
                            <p>We’ve all been there. Something stops working and your first reaction is ”Shit, I need to buy a new one”. Before you go all trigger happy on that ”Add to cart”-button, consider getting it repaired. Computer or phone? Get it to a technician. Beloved jacket lost its zipper? Consult a tailor. Nothing is truly broken, until… well… it is. But then at least you tried. And don’t forget to recycle!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class GlacierTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h3 style={{paddingBottom:"5rem"}}>Dont worry - we got you! We asked our community what they do to live a more sustainable everyday life</h3>
                    </div>
                    <div class="ui grid">
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a plastic recyling bin."/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Unfriend the plastic in your life!</h3>
                            <p>Start with getting a pretty water bottle and make it a habit filling it up before you leave in the morning. Invest in a set of those nifty (and cute!) reusable cutlery sets for lunches on the go and bring a reusable straw. Keep it going with reusable bags for fruit and veggies and bring a tote bag for shopping!</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a subway train." src={Subway}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Embrace the commute!</h3>
                            <p>Say no thanks to cars and start embracing the public transport system. Getting from point A to B is often more time efficient and saves you money - especially if you’re living in the city. Still need a car? Try to share rides with coworkers or family and plan trips around going back and forth as few times as possible. And hey, after a night out - is that cab ride home really worth it?</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={Tools}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>It's probably not that broken, right?</h3>
                            <p>We’ve all been there. Something stops working and your first reaction is ”Shit, I need to buy a new one”. Before you go all trigger happy on that ”Add to cart”-button, consider getting it repaired. Computer or phone? Get it to a technician. Beloved jacket lost its zipper? Consult a tailor. Nothing is truly broken, until… well… it is. But then at least you tried. And don’t forget to recycle!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SeaTips extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"60%", marginLeft:"29rem"}}>
                    <div>
                        <h1 className="tipHeader"> So, what can you do to save the planet?</h1>
                    </div>
                    <div>
                        <h3 style={{paddingBottom:"5rem"}}>Dont worry - we got you! We asked our community what they do to live a more sustainable everyday life</h3>
                    </div>
                    <div class="ui grid">
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a plastic recyling bin." src={Plastic}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Unfriend the plastic in your life!</h3>
                            <p>Start with getting a pretty water bottle and make it a habit filling it up before you leave in the morning. Invest in a set of those nifty (and cute!) reusable cutlery sets for lunches on the go and bring a reusable straw. Keep it going with reusable bags for fruit and veggies and bring a tote bag for shopping!</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a subway train." src={Subway}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>Embrace the commute!</h3>
                            <p>Say no thanks to cars and start embracing the public transport system. Getting from point A to B is often more time efficient and saves you money - especially if you’re living in the city. Still need a car? Try to share rides with coworkers or family and plan trips around going back and forth as few times as possible. And hey, after a night out - is that cab ride home really worth it?</p>
                        </div>
                        <div class="four wide column">
                            <img class="ui small circular image" className="tipsPic" alt="Icon of a wrench and a screwdriver." src={Tools}/>
                        </div>
                        <div class="twelve wide column">
                            <h3>It's probably not that broken, right?</h3>
                            <p>We’ve all been there. Something stops working and your first reaction is ”Shit, I need to buy a new one”. Before you go all trigger happy on that ”Add to cart”-button, consider getting it repaired. Computer or phone? Get it to a technician. Beloved jacket lost its zipper? Consult a tailor. Nothing is truly broken, until… well… it is. But then at least you tried. And don’t forget to recycle!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { FossilTips, TempTips, GlacierTips, SeaTips };