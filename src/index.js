import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Ball from "./images/ball.png";

const handleSubmit = () => {
  const answers = [
    "\nAs I see it, yes.",
    "\nI'd better not tell you now...",
    "\nUm... seriously?",
    "\nDon’t count on it.",
    "\nIt is certain.",
    "\nMost likely.",
    "\nMeh.",
    "\nMaybe leave that one up to Google.",
    "\nI wouldn't say so.",
    "\nMy sources say no.",
    "\nThe outlook is not so good.",
    "\nThe outlook is good.",
    "\nSigns point to yes.",
    "\nVery doubtful.",
    "\nWithout a doubt.",
    "\nYes.",
    "\nYes – definitely.",
    "\nYou may rely on it."
  ];
  console.log(answers);

  return answers[Math.floor(Math.random() * answers.length)];
};

function App() {
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <img src={Ball} alt="logo" />
        <input placeholder="Enter a 'Yes' or 'No' question" />
        <button className="button" type="submit">
          Fortell
        </button>
      </form>

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
