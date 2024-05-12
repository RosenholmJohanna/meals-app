import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { StyledListItem, StyledListContainer } from "./MealCard";
import RateMeal from "./RateMeal";

const MealDetails = () => {
  const location = useLocation();
  const { meal } = location.state;

  const Ingredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (meal[ingredientKey] && meal[ingredientKey]) {
        ingredients.push({
          ingredient: meal[ingredientKey],
          measure: meal[measureKey],
        });
      }
    }
    return ingredients;
  };

  const ingredients = Ingredients(meal);

  return (
    <DetailsText>
    <StyledListContainer>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />

      <RateMeal mealId={meal.idMeal} />
      <h2>Description</h2>
      <p>{meal.strInstructions}</p>
      <h2>Ingredients</h2>
      {ingredients.map((item, index) => (
        <StyledListItem key={index}>
          <p>
            {item.ingredient} {item.measure}
          </p>
        </StyledListItem>
      ))}
    </StyledListContainer>
    </DetailsText>
  );
};

export default MealDetails;

const DetailsText = styled.div`
padding: 4%;
background-color: #eeeae9;
text-align: justify;
margin-top:10%;
border-radius: 50px 50px 5px 5px;

`