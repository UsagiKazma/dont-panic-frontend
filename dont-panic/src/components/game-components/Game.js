import React, { useState } from "react";
import TypingCheck from "./TypingCheck";

export default function Game() {
  const [wpm, setWpm] = useState(0);
  const [level, setLevel] = useState(1);
  const handleWPM = input => {
    setWpm(input);
  };
  const handleLevel = input => {
    setLevel(input);
  };

  return (
    <>
      <TypingCheck
        handleWPM={handleWPM}
        handleLevel={handleLevel}
        level={level}
      />
      <h3>WPM: {wpm}</h3>
      <h3>Level: {level}</h3>
    </>
  );
};