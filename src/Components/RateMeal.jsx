import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RateMeal = ({ mealId }) => {
  const [currentRating, setCurrentRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    const ratingsInfo = JSON.parse(localStorage.getItem("ratingsInfo")) || {};
    const dishInfo = ratingsInfo[mealId] || { average: 0 };
    setCurrentRating(dishInfo.average);
  }, [mealId]);

  const handleRatingChange = (selectedRating) => {
    const ratingsInfo = JSON.parse(localStorage.getItem("ratingsInfo")) || {};
    const dishInfo = ratingsInfo[mealId] || { sum: 0, count: 0, average: 0 };

    dishInfo.count++;
    dishInfo.sum += selectedRating;
    dishInfo.average = dishInfo.sum / dishInfo.count;

    ratingsInfo[mealId] = dishInfo;
    localStorage.setItem("ratingsInfo", JSON.stringify(ratingsInfo));

    setCurrentRating(dishInfo.average);
  };

  return (
    <>
      <RatingContainer>
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                key={star}
                type="radio"
                name="rating"
                value={ratingValue}
                checked={ratingValue}
                onChange={() => handleRatingChange(ratingValue)}
              />
              <StarSymbol
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                className={ratingValue <= hover ? "active" : ""}
              >
                &#9733;
              </StarSymbol>
            </label>
          );
        })}
        <p> ({currentRating.toFixed(1)})</p>
      </RatingContainer>
    </>
  );
};

export default RateMeal;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: start;
`;

const StarSymbol = styled.span`
  cursor: pointer;
  color: black;
  &:hover,
  &.active {
    color: #cdb217;
  }
`;
