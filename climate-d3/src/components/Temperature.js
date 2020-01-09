import React, { Component } from "react";
import "../App.css";
import TempData from "./TempData";
import { TempArticle } from "./AllArticles";
import { TempTips } from "./AllTips";
import { Footer } from "./Footer";

//Temperature.js renders all of the temperature components + footer
export default class Temperature extends Component {
  componentDidMount() {
    window.scrollTo(0, 0); //When page has loaded, user lands on top of the page (scroll to top)
  }
  render() {
    return (
      <div>
        <TempArticle />
        <TempData />
        <TempTips />
        <Footer />
      </div>
    );
  }
}
