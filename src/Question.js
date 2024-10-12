 

import React, { useState, useContext } from 'react';
import { dataBasket } from './App';
import './Question.css'; 


const questions = [
  {
    title: "What is the use of React?",
    A: "To cook food",
    B: "To develop front end",
    C: "To create web pages",
    D: "All of the above",
    answer: "B"
  },
  {
    title: "What is JSX in React?",
    A: "JavaScript Extension",
    B: "JavaScript XML",
    C: "JavaScript Framework",
    D: "None of the above",
    answer: "B"
  },
  {
    title: "What is React Router used for?",
    A: "Data fetching",
    B: "State management",
    C: "Routing in Single Page Applications",
    D: "Styling components",
    answer: "C"
  },
  {
    title: "What are React Hooks?",
    A: "Functions that let you use state and other React features without writing a class",
    B: "Functions used to declare variables in React components",
    C: "Functions used to modify the DOM directly",
    D: "None of the above",
    answer: "A"
  },
];

function Question() {
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const { setData, updateScore } = useContext(dataBasket);

  const gotoNext = () => {
    if (questions[current].answer === selectedAnswer) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
    setSelectedAnswer("");
  };

  const gotoResult = () => {
    if (questions[current].answer === selectedAnswer) {
      setScore(score + 1);
    }
    updateScore(score);
    setData("result");
  };

  const selectAnswer = (selected) => {
    setSelectedAnswer(selected);
  };

  return (
    <div className="question">
      <h2>{questions[current].title}</h2>
      {['A', 'B', 'C', 'D'].map(option => (
        <button
          key={option}
          onClick={() => selectAnswer(option)}
          className={`answer-button ${selectedAnswer && (questions[current].answer === option ? 'correct' : selectedAnswer === option ? 'incorrect' : '')}`}
          disabled={selectedAnswer !== ""}
        >
          {questions[current][option]}
        </button>
      ))}
      {current === questions.length - 1 ? (
        <button onClick={gotoResult}>Submit</button>
      ) : (
        <button onClick={gotoNext}>Next</button>
      )}
    </div>
  );
}

export default Question;
