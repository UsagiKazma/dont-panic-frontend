import words from "./words.json"

export const generate = (data) => {
  var random = words[Math.floor(Math.random()*words.length)]
  return (random.word)
};

// const getRandomWord = (data) => { let chars = getRandomWord([Math.floor(Math.random() * data.length)]); 