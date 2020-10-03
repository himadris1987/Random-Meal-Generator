import React from 'react';
import Results from "./Pages/Results";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbars"
import Footer from "./Components/Footers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Home" component = {Home}/>
        <Route exact path = "/Results" component = {Results}/>
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
