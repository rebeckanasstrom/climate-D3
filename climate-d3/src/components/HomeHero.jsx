import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import Hero from "../mountain-hero.jpg";

//Using LazyHero, a hero picture is rendered
class HomeHero extends Component {
  render() {
    return (
      <div className="heroContainer">
        <LazyHero
          imageSrc={Hero}
          alt="Picture of a forest."
          color={"white"}
          opacity={0}
          minHeight={"500px"}
        ></LazyHero>
      </div>
    );
  }
}

export default HomeHero;
