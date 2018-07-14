import React, { Component } from 'react';

import './App.css';
// import Jumbotron from "./Jumbotron";
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
             
            </span>
          </div>
        </header>
        <main>
         </main>
   
     <BrowserRouter>
       <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/UpcomingEvents" component={UpcomingEvents} />
      </Switch>
    </BrowserRouter>
    
    </div>

   
    );
  }
}

export default App;
