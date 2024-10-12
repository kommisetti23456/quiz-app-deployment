 
import React, { useState, createContext } from "react";
import Home from './Home';
import Question from './Question';
import Result from './Result';
import './App.css';

export const dataBasket = createContext();

function App() {
  
  const [data, setData] = useState("home");
  const [score, setScore] = useState(0); // State for score

   
  const updateScore = (newScore) => {
    setScore(newScore);
  };

  return (
    <div className="App">
      <dataBasket.Provider value={{ setData, updateScore }}>
        {data === "home" && <Home />}
        {data === "question" && <Question />}
        {data === "result" && <Result score={score} />} {/* Pass score as prop to Result */}
      </dataBasket.Provider>
    </div>
  );
}

export default App;
