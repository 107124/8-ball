import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Ball from "./images/ball.png";

const handleClear = () => {
  document.getElementsById("8-ball-form").reset();
};

const handleClick = () => {
  console.log("This was clicked!");
  alert(handleSubmit());
};

const handleSubmit = () => {
  const answers = [
    "\nAs I see it, yes.",
    "\nDude, what do you think I am? Magic?",
    "\nWhy don't you ask Siri? I'm just a virtual-pool-table-ball.",
    "\nYou may need a therapist.",
    "\nDid you pray about it?",
    "\nDid you come to me JUST to ask that? I'll say yes to make you happy.",
    "\nAccording to your social history, i'd say most likely.",
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
    <form id="8-ball-form">
      <div className="App">
        <img src={Ball} alt="logo" />
        <input className="input" placeholder="Enter a 'Yes' or 'No' question" />
        <button className="button" type="submit" onClick={handleClick}>
          Fortell
        </button>
        <button className="clear-button" type="submit" onClick={handleClear}>
          Clear
        </button>
      </div>
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
