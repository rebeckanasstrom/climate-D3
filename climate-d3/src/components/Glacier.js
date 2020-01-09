import React, {Component} from 'react';
import '../App.css';
import GlacierData from './GlacierData';
import { GlacierArticle } from './AllArticles';
import { GlacierTips } from './AllTips';
import { Footer } from './Footer';


//Glacier.js renders all of the glacier components + footer
export default class Glacier extends Component {
  componentDidMount(){
    window.scrollTo(0,0); //When page has loaded, user lands on top of the page (scroll to top)
    }  
  render(){
  return (
    <div>
      <GlacierArticle />
      <GlacierData />
      <GlacierTips />
      <Footer />
    </div>
  )
}
}; 