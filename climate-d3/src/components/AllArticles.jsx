import React, { Component } from 'react'; 
import Waterfall from '../waterfall.jpg';

class FossilArticle extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"80%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="fossilHeader"> Fossil Fuel emissions - should we worry?</h1>
                    </div>
                    <div>
                        <h2>Temperatures are rising every year. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </h2>
                    </div>
                    <div>
                        <img class="ui fluid image" src={Waterfall}  alt="Waterfall in a forest." style={{height:"500px", marginTop:"30px", marginBottom:"30px"}}/>
                    </div>
                    <div class="ui padded three column grid">
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>What will happen to wildlife?</h3>
                            <p style={{textAlign:"left"}}>The planet is dying. I've heard it, you've heard it. We've all heard it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>What about the food on your plate?</h3>
                            <p style={{textAlign:"left"}}>The problem isn’t that people don’t understand that humanity screwed up. Oh, we understand. The problem is that people like you and me get stuck feeling like we’re not doing enough. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="column">
                        <h3 style={{textAlign:"left", color: "#E94D95"}}>How will it affect future societies?</h3>
                             <p style={{textAlign:"left"}}>The problem isn’t that people don’t understand that humanity screwed up. Oh, we understand. The problem is that people like you and me get stuck feeling like we’re not doing enough. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class TempArticle extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"80%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="fossilHeader"> Global warming and it's devastating effect on our nature</h1>
                    </div>
                    <div>
                        <h2>Temperatures are rising every year and the global temperature has increased by 
                            one degree in the last century. It might not sound so much but natural disasters, 
                            heat waves, intense drought and wildfires are all consequences of that one degree.</h2>
                    </div>
                    <div>
                        <img class="ui fluid image" src={Waterfall}  alt="Waterfall in a forest." style={{height:"500px", marginTop:"30px", marginBottom:"30px"}}/>
                    </div>
                    <div class="ui padded three column grid">
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>Why is it getting warmer?</h3>
                            <p style={{textAlign:"left"}}>We've all heard that the planet is getting warmer and maybe even 
                            seen some effects of that warming. Don't you remember the heatwave this summer or the unusual 
                            drought last year! The effects are clear but what are the reasons? It doesn't look any better 
                            than we have ourselves to blame. Carbon dioxide emission and other greenhouse gases like methane 
                            or nitrous oxide are emitted directly into the atmosphere and there they trap the heat. Too much 
                            of these gases are making our planet warmer and leads to heatwaves, droughts and lack of water but 
                            also natural disasters like coastal storms, flooding or wildfires. </p></div>
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>Heat wave + drought = wildfire</h3>
                            <p style={{textAlign:"left"}}>Because of the warm temperature, there is a greater risk of wildfires 
                            now than ever before. Heatwaves are getting more and more common in many places around the world and 
                            if we add intense drought to that we have the perfect fuel for wildfires. The rising temperature has 
                            lengthened the wildfire season and made the soil drier and more flammable which help the fire to spread 
                            more easily. Wildfires are one serious effect of the global warming and it is ruthless and shows no mercy. 
                            Homes are destroyed, animals are killed, and the vegetation is damaged for life. 
                             </p></div>
                        <div class="column">
                        <h3 style={{textAlign:"left", color: "#E94D95"}}>What if we reach 2 degrees?</h3>
                        <p style={{textAlign:"left"}}>If the global warming continues to rise, we ́ll see more serious effects in the 
                        future. More heatwaves and drought lead to a decreased harvest that will threaten the world's food supply. 
                        The rapid rise in temperature changes ecosystems and can lead to the loss of many species. Weather related 
                        natural disasters will make certain places uninhabitable. We all know that natural disasters, even today, 
                        force people to leave their homes. But with a global temperature that increases by two degrees, more people, 
                        animals and places will be affected. Let’s make sure we stop before we reach two degrees! 
                             </p></div>
                    </div>
                    </div>
                </div>
        )
    }
}

class GlacierArticle extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"80%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="fossilHeader">The earths glaciers are melting away bit by bit</h1>
                    </div>
                    <div>
                        <h2>Since the early 1900s, many of the world’s glaciers have been melting, rapidly. The root of this phenomenon is our human activities. </h2>
                    </div>
                    <div>
                        <img class="ui fluid image" src={Waterfall}  alt="Waterfall in a forest." style={{height:"500px", marginTop:"30px", marginBottom:"30px"}}/>
                    </div>
                    <div class="ui padded three column grid">
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>Why are the glaciers melting?</h3>
                            <p style={{textAlign:"left"}}>Since the industrial revolution, where society went from hand production methods to mass production through 
                            machines, carbon dioxide and other greenhouse gas emissions have raised the earth's temperatures. Once a glacier starts to break down and 
                            melt, the interaction between meltwater and sea water with the glaciers structure, can cause it to rapidly melt and retreat up on land.</p></div>
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>How does this affect humans?</h3>
                            <p style={{textAlign:"left"}}>If the glaciers continue to melt in a rapid way, the consequences will affect the whole planet. As sea ice and 
                            glaciers melt and oceans warm, ocean currents will continue to disrupt weather patterns. Flooding will happen more frequently and storms will 
                            increase, causing an insane amount of recovery bills. Both fishermen and fishing industries will be affected, since the warmer waters will 
                            affect where and when fish spawn.</p>
                        </div>
                        <div class="column">
                        <h3 style={{textAlign:"left", color: "#E94D95"}}>How will it affect future societies?</h3>
                             <p style={{textAlign:"left"}}>In the Arctic, polar bears rely on sea ice to hunt and store energy. Now that the sea ice melts earlier in the 
                             spring, it causes the bears to go into hibernation roughly 10 kilos lighter and in poorer condition than before. Unhealthy bears can lead to 
                             lower reproduction rates and higher cub mortality, which eventually will lead to local extinction. Walruses depend on sea ice, as it is a 
                            platform where they feed and rest. As the sea ice melts earlier, it forces the Walruses ashore and it could be up to 35,000 walruses in one 
                            place, this is especially deadly for walrus calves, since they can be crushed in stampedes.
</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

class SeaArticle extends Component {
    render() {
        return (
            <div class="ui basic segment" style={{backgroundColor: "rgba(250, 211, 202, 0.15)"}}>
                <div className="FossilArticleBox" style={{textAlign:"left", width:"80%", marginLeft:"12rem"}}>
                    <div>
                        <h1 className="fossilHeader">Sea levels are rising, and rising, and rising</h1>
                    </div>
                    <div>
                        <h2>Temperatures are rising every year. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </h2>
                    </div>
                    <div>
                        <img class="ui fluid image" src={Waterfall}  alt="Waterfall in a forest." style={{height:"500px", marginTop:"30px", marginBottom:"30px"}}/>
                    </div>
                    <div class="ui padded three column grid">
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>What will happen to wildlife?</h3>
                            <p style={{textAlign:"left"}}>The planet is dying. I've heard it, you've heard it. We've all heard it. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
                        <div class="column">
                            <h3 style={{textAlign:"left", color: "#E94D95"}}>What about the food on your plate?</h3>
                            <p style={{textAlign:"left"}}>The problem isn’t that people don’t understand that humanity screwed up. Oh, we understand. The problem is that people like you and me get stuck feeling like we’re not doing enough. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="column">
                        <h3 style={{textAlign:"left", color: "#E94D95"}}>How will it affect future societies?</h3>
                             <p style={{textAlign:"left"}}>The problem isn’t that people don’t understand that humanity screwed up. Oh, we understand. The problem is that people like you and me get stuck feeling like we’re not doing enough. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export { FossilArticle, TempArticle, GlacierArticle, SeaArticle };
