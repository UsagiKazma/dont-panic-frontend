import React, { useState } from "react";
import TypingCheck from "./TypingCheck";
import PlayerMovement from "./PlayerMovement"
import "./game-css.scss"

export default function Game() {
  const [wpm, setWpm] = useState(0);
  const [level, setLevel] = useState(1);
  const [wordCount, setWordCount] = useState(0)
  const [percent, setPercent] = useState(0)
  const handleWPM = input => {
    setWpm(input);
  };
  const handleLevel = input => {
    setLevel(input);
  };
  const handleWordCount = input => {
    setWordCount(input)
    let percent = ((wordCount + 1)/10)*100
    setPercent(percent)
  }

  return (
    <div>
      <TypingCheck
        handleWPM={handleWPM}
        handleLevel={handleLevel}
        level={level}
        handleWordCount = {handleWordCount}
        wordCount = {wordCount}
      />
      <h3>WPM: {wpm}</h3>
      <h3>Level: {level}</h3>
      <h3>Word Count: {wordCount}</h3>
      <PlayerMovement percent={percent<100 ? percent:100}/>
    </div>
  );
};