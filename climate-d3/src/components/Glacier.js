import React, {Component} from 'react';
import '../App.css';
import GlacierData from './GlacierData';
import { GlacierArticle } from './AllArticles';
import { GlacierTips } from './AllTips';

export default class Glacier extends Component {
  render(){
  return (
    <div>
      <GlacierArticle />
      <GlacierData />
      <GlacierTips />
    </div>
  )
}
}; 