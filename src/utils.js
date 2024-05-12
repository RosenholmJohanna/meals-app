export const fetchMealsSearch = async (searchMeal) => {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
    if (!response.ok) 
        throw new Error('network error');
    return response.json();
  };