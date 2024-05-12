import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const MealCard = ({ meals }) => {
  return (
    <StyledListContainer>
      <StyledList>
        {meals.map((meal) => (
          <StyledListItem key={meal.idMeal}>
            {/* <Link to={`/meal-details/${meal.idMeal}`}> */}
            <Link to={`/meal-details/${meal.idMeal}`} state={{ meal: meal }}>
              <div className="meal-card">
                <div>
                  <h2>{meal.strMeal}</h2>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <Tag>{meal.strArea}</Tag>
                </div>
              </div>
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledListContainer>
  );
};

export default MealCard;




export const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0%;
  margin-top: 1%;
  color: #181818;
  img {
    max-width: 80%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 10px;
  }
`;

export const StyledListItem = styled.li`
  margin-top: 2%;
`;

export const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 50px 50px 5px 5px;
  background-color: #eeeae9;
`;

const Tag = styled.div`
  font-size: 0.8em;
  color:#eeeae9;
  background-color: #181818;
  width: 20%;
  margin: 1%;
  border-radius: 5px 5px 5px 5px;
`;
