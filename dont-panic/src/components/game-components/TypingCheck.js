import React, { useState, useEffect } from "react";
import KeyPress from "../components/KeyPress";
import { currentTime } from "../utility/time";
import { generate } from "../utility/words";
const initialWords = generate();

export default function TypingCheck({ handleWPM, handleLevel, level }) {
  const [indexLetter, setIndexLetter] = useState(1);
  const [word, setWord] = useState(initialWords);
  const [letter, setLetter] = useState(word.charAt(0));
  const [startTime, setStartTime] = useState();
  const [wordCount, setWordCount] = useState(0);
  const [keyInput, setKeyInput] = useState("");
  const handleTypedChar = input => {
    setKeyInput(input);
  };
  useEffect(() => {
    if (!startTime) {
      setStartTime(currentTime());
    }
    if (keyInput === letter) {
      setLetter(word.charAt(indexLetter));
      let newIndex = indexLetter + 1;
      setIndexLetter(newIndex);
    }
    if (word.charAt(indexLetter) === "" && keyInput === letter) {
      setWordCount(wordCount + 1);
      let newWord = generate();
      setWord(newWord);
      setIndexLetter(1);
      setLetter(newWord.charAt(0));
    }
    if (wordCount === 10) {
      const durationInMinutes = (currentTime() - startTime) / 60000.0;
      let wpm = ((wordCount + 1) / durationInMinutes).toFixed(2);
      handleWPM(wpm);
      handleLevel(level + 1);
      setWordCount(0);
    }
    setKeyInput(keyInput);
  }, [keyInput]);

  return (
    <>
      <header className="App-header">
        <p className="Letter">
          <span className="Character-current">{}</span>
          <span id="thisone">{letter}</span>
          <span>{word.substr(indexLetter)}</span>
        </p>
        <KeyPress handleTypedChar={handleTypedChar} keyInput={keyInput} />
      </header>
    </>
  );
}
