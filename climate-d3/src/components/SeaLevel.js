import React, {Component} from 'react';
import '../App.css';
import SeaData from './SeaData';
import { SeaArticle } from './AllArticles';
import { SeaTips } from './AllTips';
import { Footer } from './Footer';

//SeaLevel.js renders all of the sea level components + footer
export default class SeaLevel extends Component {
  componentDidMount(){
    window.scrollTo(0,0); //When page has loaded, user lands on top of the page (scroll to top)
    }  
  render(){
  return (
    <div>
      <SeaArticle />
      <SeaData />
      <SeaTips />
      <Footer />
    </div>
  )
}
}; 