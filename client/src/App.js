import React from 'react';
import Results from "./Pages/Results";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbars"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Search}/>
        <Route exact path = "/Search" component = {Search}/>
        <Route exact path = "/Results" component = {Results}/>
      </Switch>
    </Router>
    
  );
}

export default App;
