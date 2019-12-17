import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Nav from './components/Nav';
import Home from './components/Home';
import FossilFuel from './components/FossilFuel';
import Temperature from './components/Temperature';
import Glacier from './components/Glacier';
import SeaLevel from './components/SeaLevel';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/climate-D3/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/fossilfuel" component={FossilFuel} />
          <Route path="/temperature" component={Temperature} />
          <Route path="/glacier" component={Glacier} />
          <Route path="/sealevel" component={SeaLevel} />
        </Switch>
    </div>
    </Router>
  );
}


export default App;
