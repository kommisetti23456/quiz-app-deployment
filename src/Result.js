import React from "react";
import './result.css'; 

function Result({ score }) {
  return (
    <div className="result">
      <h3>Your score is: {score}</h3>
    </div>
  );
}

export default Result;



