import React, { useState } from "react";
import TypingCheck from "./TypingCheck";
import PlayerMovement from "./PlayerMovement";
import UserInput from "./UserInput";
import { Redirect } from "react-router-dom";
import "./game-css.scss";

export default function Game({wordsArr}) {
  
  const [wpm, setWpm] = useState(0);
  const [level, setLevel] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  const generate = (words) => {
    const random = words[Math.floor(Math.random()*words.length)]
    console.log("PLZ WORK", words)
    return (random)
  };
  
  const randomWord = generate(wordsArr);
  console.log('this thing',randomWord)
 
  const handleWPM = (input) => {
    setWpm(input);
  };
  const handleLevel = (input) => {
    setLevel(input);
  };
  const handleWordCount = (input) => {
    setWordCount(input);
    let percent = ((wordCount + 1) / 10) * 100;
    setPercent(percent);
  };
  const handlePlayerScore = () => {
    let score = (wpm * level).toFixed(2);
    setPlayerScore(score);
  };
  return (
    <div className="game-container">
     {randomWord?  <TypingCheck
        handleWPM={handleWPM}
        handleLevel={handleLevel}
        level={level}
        handleWordCount={handleWordCount}
        wordCount={wordCount}
        handlePlayerScore={handlePlayerScore}
        randomWord={randomWord}
      />: <></>}
      <h3>WPM: {wpm}</h3>
      <h3>Level: {level}</h3>
      <h3>Word Count: {wordCount}</h3>
      <PlayerMovement percent={percent < 100 ? percent : 100} />
      {playerScore!=0 && <Redirect push to="/userInput" playerScore={playerScore}/>}
    </div>
  );
}