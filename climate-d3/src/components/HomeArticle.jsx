import React, { Component } from "react";

//Article section of home page
class HomeArticle extends Component {
  render() {
    return (
      <div class="ui basic segment">
        <div className="HomeArticleBox">
          <div
            class="ui padded one column grid"
            style={{ width: "85%", textAlign: "left" }}
          >
            <div class="column">
              <h2
                className="HomeText"
                style={{
                  textAlign: "left",
                  fontSize: "1.8em",
                  color: "rgb(228, 94, 63)"
                }}
              >
                The planet is dying. I've heard it, you've heard it. We've all
                heard it.
              </h2>
            </div>
            <div class="column">
              <p
                className="HomeText"
                style={{ textAlign: "left", fontSize: "1.3em" }}
              >
                The problem isn’t that people don’t understand that humanity
                screwed up. Oh, we understand. The problem is that people like
                you and
                <br /> me get stuck feeling like we’re not doing enough. We feel
                you, and we’re here to help. Our mission is to arm you with the
                facts you need
                <br /> to understand what’s going on and the tools you need to
                make a difference. And we totally skipped the science-y lingo,
                who understands
                <br /> that anyways? Let’s get started!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeArticle;
