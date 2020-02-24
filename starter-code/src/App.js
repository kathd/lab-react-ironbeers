import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import logo from './logo.svg';

import Home from "./views/Home"
import AllBeers from "./views/AllBeers"
import RandomBeer from "./views/RandomBeer"
import NewBeer from "./views/NewBeer"
import OneBeer from "./views/OneBeer"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path={`/beers/:id`} component={OneBeer}/>
        </Switch>

      </div>
    );
  }
}

export default App;
