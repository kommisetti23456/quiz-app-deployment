 
import React, { useContext } from 'react';
import { dataBasket } from './App'; 
import './home.css'; // Adjust the path as necessary


function Home() {
  const { setData} = useContext(dataBasket); // Using useContext with dataBasket to get setData

  function start() {
    setData("question"); // Update the state to 'question' when button is clicked
  }

  return (
    <div className="home">
      <button onClick={start} class="btn btn-btn-primary">Start Quiz</button>
    </div>
  );
}

export default Home;
