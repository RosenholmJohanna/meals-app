import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
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


//const [count, setCount] = useState(0)


//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

{/* <div>
<a href="https://vitejs.dev" target="_blank">
  <img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
  <img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
  count is {count}
</button>
<p>
  Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}