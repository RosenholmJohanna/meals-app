import React from "react";
import { useLocation } from "react-router-dom";
import { StyledListItem, StyledListContainer } from "./MealCard";

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
    <StyledListContainer>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
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
  );
};

export default MealDetails;
