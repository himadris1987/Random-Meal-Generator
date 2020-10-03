import React from "react";
import "./style.css";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";



function Homes (){
    return (

 <Jumbotron>
  <h1>Welcome to the Random Meal Generator.</h1>
  <p>
    Do you like to cook? Are you not a picky eater or will eat anything that is classified as food?
    This app is for you where you click the button below to be taken to the search page and you will be provided with a random recipe!
    Bon Appetit!
  </p>
  <p>
  <Button href="client/src/Pages/Results.js">Search Page</Button> 
  </p>
</Jumbotron>
    );
}

export default Homes;