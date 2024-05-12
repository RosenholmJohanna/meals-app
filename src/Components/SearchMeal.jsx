import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MealCard from "./MealCard";
import { StyledListContainer } from "./MealCard";
import { fetchMealsSearch } from "../utils";

const SearchMeal = () => {
  const [searchMeal, setSearchMeal] = useState("");
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);


  const handleSearch = async () => {
    try {
      const data = await fetchMealsSearch(searchMeal);
      if (data.meals) {
        setMeals(data.meals);
        setError(null);
      } else {
        setMeals([]);
        setError("Could not find any meals based on that search. Plese try with something else - like chicken or fish?");
      }
    } catch (error) {
      setError('fetch error search');
      setMeals([]);
    }
  };


  return (
    <StyledListContainer>
      <StyledSearchContainer>
        <label>Search dish</label>
        <input
          type="text"
          value={searchMeal}
          onChange={(e) => setSearchMeal(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>

        <ErrorMessage>{error && <p>{error}</p>}</ErrorMessage>

        <MealCard meals = {meals} /> 
      </StyledSearchContainer>
    </StyledListContainer>
  );
};

export default SearchMeal;





const StyledSearchContainer = styled.div`
  padding-top: 10%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50px;
  background-color: #652a2d;
  color: white;
`;


const ErrorMessage = styled.div`
  color: white;
  font-size: small;
  margin-top: 5%;
`;


// utils --> 

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`,
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       if (data.meals) {
  //         setMeals(data.meals);
  //         setError(null);
  //       } else {
  //         setMeals([]);
  //         setError("");
  //       }
  //     } else {
  //       setMeals([]);
  //       setError("error fetching data");
  //     }
  //   } catch (err) {
  //     setMeals([]);
  //     setError("");
  //   }
  // };
