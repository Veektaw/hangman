import { clsx } from "clsx";
import React from "react";

export default function Keyboard() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const [currentAlphabets, setCurrentAlphabets] = React.useState(alphabets);
  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function handleGuess(letter) {
    setGuessedLetters((prevGuessedLetters) =>
      prevGuessedLetters.includes(letter)
        ? prevGuessedLetters
        : [...prevGuessedLetters, letter]
    );
  }
  const keyboardElements = currentAlphabets.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        className={className}
        onClick={() => handleGuess(letter)}
        key={letter}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  console.log(guessedLetters);
  return (
    <>
      <section className="keyboard">{keyboardElements}</section>
      <button className="new-game">New game</button>
    </>
  );
}
