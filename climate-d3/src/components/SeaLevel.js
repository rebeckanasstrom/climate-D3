import React, {Component} from 'react';
import '../App.css';
import SeaData from './SeaData';
import { SeaArticle } from './AllArticles';
import { SeaTips } from './AllTips';
import { Footer } from './Footer';

export default class SeaLevel extends Component {
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