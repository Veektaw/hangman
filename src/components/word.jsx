import React from "react";
import { clsx } from "clsx";
import Languages from "./langauges";
import WinsState from "./winState";
import { languages } from "../languages";
import Header from "./header";

export default function Word() {
  const [currentWord, setCurrentWord] = React.useState("react");
  //   const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = "qwertyuiopasdfghjklzxmnbvcxz";
  const uniqueAlphabets = [...new Set(alphabets.split(""))].join("");
  const [currentAlphabets, setCurrentAlphabets] =
    React.useState(uniqueAlphabets);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [numberOfWins, setNumberOfWins] = React.useState(0);

  const wrongGuessArray = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  function handleGuess(letter) {
    setGuessedLetters((prevGuessedLetters) =>
      prevGuessedLetters.includes(letter)
        ? prevGuessedLetters
        : [...prevGuessedLetters, letter]
    );
  }

  const letterElements = currentWord.split("").map((letter, index) => (
    <span className="letter" key={index}>
      {guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
    </span>
  ));
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessArray >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const updateWins = () => {
    if (isGameWon) {
      setNumberOfWins((prevWins) => (prevWins < 5 ? prevWins + 1 : 5));
    } else if (isGameLost) {
      setNumberOfWins(0);
    }
  };

  React.useEffect(() => {
    updateWins();
  }, [isGameWon, isGameLost]);

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
        key={index}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return (
    <>
      <Header numberOfWins={numberOfWins} />
      <WinsState
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
      />
      <Languages wrongGuessArray={wrongGuessArray} />
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <div className="button-container">
        {isGameOver && <button className="new-game">New game</button>}
      </div>
      <div className="game-container">
        <h3 className="win-counter">Wins: {numberOfWins}</h3>
      </div>
    </>
  );
}
