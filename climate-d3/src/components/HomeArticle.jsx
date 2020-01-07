import React, { Component } from 'react';

class HomeArticle extends Component {
    render() {
        return(
            <div class="ui basic segment">
               <div className="HomeArticleBox"> 
                    <div class="ui padded one column grid" style={{width: "60%", textAlign:"center"}}>
                        <div class="column"><h2 className="homeText" style={{textAlign:"left", fontSize:"1.8em", color: "rgb(228, 94, 63)"}}>The planet is dying. I've heard it, you've heard it. We've all heard it.</h2></div>
                        <div class="column"><p className="homeText" style={{textAlign:"left"}}>The problem isn’t that people don’t understand that humanity 
                            screwed up. Oh, we understand. The problem is that people like you and me get stuck feeling like we’re not doing enough.</p></div>
                    </div>
                    </div>
                    </div>
        )
    }
}

export default HomeArticle;
