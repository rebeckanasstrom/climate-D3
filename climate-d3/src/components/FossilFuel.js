import React, {Component} from 'react';
import '../App.css';
import FossilData from './FossilData';
import { FossilArticle } from './AllArticles';
import { FossilTips } from './AllTips';
import { Footer } from './Footer';


export default class FossilFuel extends Component {
  render(){ 
    return (
    <div>
      <FossilArticle />
      <FossilData />
      <FossilTips />
      <Footer />
    </div>
    )
}
};