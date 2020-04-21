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
    // console.log('random', random)

   // wordDifficulty filtered mapped then filtered 
    const easy = wordsArr.filter(level =>{if(level && level.difficulty === 'easy'){return level.word}})
    const easyWords = easy.map(words => {return words.word})
    // const medium = wordsArr.map(level =>{if(level && level.difficulty === 'medium'){return level.word}})
    // const mediumWords = medium.map(words => {return words.word})
    // const hard = wordsArr.map(level =>{if(level && level.difficulty === 'hard'){return level.word}})
    // const hardWords = hard.map(words => {return words.word})
    // const dangerous = wordsArr.map(level =>{if(level && level.difficulty === 'dangerous'){return level.word}})
    // const dangerousWords = dangerous.map(words => {return words.word})
    console.log('EEEASY MONEEY',easyWords)

  //1-3 easy
  //4-6 medium
  //6-9 hard
  //9-12 dangerous
  // const random = generate(easy)

    if(level <=3){
      let random = generate(easy)
      console.log('Game-if-statement-easy',random)
      console.log('Level at the time', level)
    }else if(level <=6 && level > 4){
      let random = generate(medium)
      // console.log('Game-if-statement-medium',random)
      // console.log('Level at the time', level)
    }else if(level <=9 && level > 6){
      let random = generate(hard)
      // console.log('Game-if-statement-hard',random)
      // console.log('Level at the time', level)
    }else if(level <=12 && level > 9){
      let random = generate(dangerous)
      // console.log('Game-if-statement-dangerous',random)
      // console.log('Level at the time', level)
    }


   console.log('Game - randomAfterIf - ',random)


//1-3 easy
//4-6 medium
//6-9 hard
//9-12 dangerous

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