import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SearchMeal from "./Components/SearchMeal";
import MealDetails from "./Components/MealDetails";

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SearchMeal />}></Route>
      <Route path="/meal-details/:idMeal" element={<MealDetails />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
