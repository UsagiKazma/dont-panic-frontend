import React, { useState } from "react";
import TypingCheck from "./TypingCheck";
import PlayerMovement from "./PlayerMovement";
import UserInput from "./UserInput";
import "./game-css.scss";

export default function Game({ wordsArr }) {

  const [wpm, setWpm] = useState(0);
  const [level, setLevel] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  if (wordsArr && wordsArr.length) {
    //generate needed wordsArr to conditionally render, pulling it in here works
    const generate = (wordsArr) => {
      var random = wordsArr[Math.floor(Math.random()*wordsArr.length)]
      console.log('words.js random ',random)
      return (random && random.word)
    };
    //call generate each time random is hit
    let random = generate(wordsArr)
    console.log('random', random)

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
          <TypingCheck
            handleWPM={handleWPM}
            handleLevel={handleLevel}
            level={level}
            handleWordCount={handleWordCount}
            wordCount={wordCount}
            handlePlayerScore={handlePlayerScore}
            wordsArr={random}

          />
          <h3>WPM: {wpm}</h3>
          <h3>Level: {level}</h3>
          <h3>Word Count: {wordCount}</h3>
          <PlayerMovement percent={percent < 100 ? percent : 100} />
        </div>
      );
    }
    else { return <></> }
  }