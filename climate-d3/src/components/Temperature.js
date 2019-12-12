import React, {Component} from 'react';
import '../App.css';
import TempData from './TempData';
import { TempArticle } from './AllArticles';
import { TempTips } from './AllTips';


export default class Temperature extends Component {
  render(){
  return (
    <div>
      <TempArticle />
      <TempData />
      <TempTips />
    </div>
  )
}
}; 