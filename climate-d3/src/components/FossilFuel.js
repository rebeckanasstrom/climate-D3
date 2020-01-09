import React, {Component} from 'react';
import '../App.css';
import FossilData from './FossilData';
import { FossilArticle } from './AllArticles';
import { FossilTips } from './AllTips';
import { Footer } from './Footer';

//FossilFuel.js renders all of the fossil fuel components + footer
export default class FossilFuel extends Component {
  componentDidMount(){
    window.scrollTo(0,0); //When page has loaded, user lands on top of the page (scroll to top)
    }  
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