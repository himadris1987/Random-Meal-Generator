import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'

class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meals: [],
        };
    }
    getMeal() {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
            .then(response => {
                console.log(response)
                this.setState({ meals: response.data.meals })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { meals } = this.state
        return (
            <div>
                <Jumbotron>
                    <h1>Hungry?</h1>
                    <p>
                        Click the button as many times as you want for a new and delicious recipe
                    </p>
                    <p>
                        <Button variant="primary" onClick={this.getMeal.bind(this)}>Search</Button>
                    </p>
                </Jumbotron>


                {meals.map(meal =>
                    <Container key={meal.idMeal} fluid>
                        <h1>{meal.strMeal}</h1>
                        <Image src={meal.strMealThumb} fluid />
                        <ListGroup>
                        <h2>Instructions</h2>
                        <p>{meal.strInstructions}</p>
                        <h3>Ingredients</h3>
                            <ListGroup.Item>{meal.strMeasure1} {meal.strIngredient1}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure2} {meal.strIngredient2}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure3} {meal.strIngredient3}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure4} {meal.strIngredient4}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure5} {meal.strIngredient5}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure6} {meal.strIngredient6}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure7} {meal.strIngredient7}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure8} {meal.strIngredient8}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure9} {meal.strIngredient9}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure10} {meal.strIngredient10}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure11} {meal.strIngredient11}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure12} {meal.strIngredient12}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure13} {meal.strIngredient13}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure14} {meal.strIngredient14}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure15} {meal.strIngredient15}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure16} {meal.strIngredient16}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure17} {meal.strIngredient17}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure18} {meal.strIngredient18}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure19} {meal.strIngredient19}</ListGroup.Item>
                            <ListGroup.Item>{meal.strMeasure20} {meal.strIngredient20}</ListGroup.Item>
                        </ListGroup>
                    </Container>


                )}
            </div>
        )
    }
}

export default Result;

// function Result (){
//     return (
//         <div>Test</div>
//     );
// }

// export default Result;