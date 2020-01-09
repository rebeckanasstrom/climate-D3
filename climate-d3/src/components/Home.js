import React, {Component} from 'react';
import '../App.css';
import HomeCards from './HomeCards';
import HomeHero from './HomeHero';
import HomeArticle from './HomeArticle';
import HomeSteps from './HomeSteps';
import {Footer} from './Footer';

//Home.js renders all the home components
export default class Home extends Component {
  render(){
  return (
    <div className="HomeBackground">
    <HomeHero />
    <HomeArticle />
    <HomeCards />
    <HomeSteps />
    <Footer />
    </div>
  )
}
}; 


