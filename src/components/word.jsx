import React from "react";
import { clsx } from "clsx";
import Languages from "./langauges";
import WinsState from "./winState";
import { languages } from "../languages";
import Header from "./header";
import { getRandomWord } from "../utils";

export default function Word() {
  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  //   const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = "qwertyuiopasdfghjklzxmnbvcxz";
  const uniqueAlphabets = [...new Set(alphabets.split(""))].join("");
  const [currentAlphabets, setCurrentAlphabets] =
    React.useState(uniqueAlphabets);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [numberOfWins, setNumberOfWins] = React.useState(() => {
    const savedWins = localStorage.getItem("numberOfWins");
    return savedWins ? parseInt(savedWins, 5) : 0;
  });

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

  function startNewGame() {
    setCurrentWord(() => getRandomWord());
    setGuessedLetters([]);
    if (numberOfWins === 5) {
      setNumberOfWins(0);
    }
  }

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessArray >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span className={letterClassName} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];

  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  console.log(isLastGuessIncorrect);

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

  React.useEffect(() => {
    localStorage.setItem("numberOfWins", numberOfWins.toString());
  }, [numberOfWins]);

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
        disabled={isGameOver}
        aria-disabled={isGameOver}
        aria-label={`Letter ${letter}`}
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
        isLastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessArray={wrongGuessArray}
      />
      <Languages wrongGuessArray={wrongGuessArray} />
      <section className="word">{letterElements}</section>
      <section className="keyboard">{keyboardElements}</section>
      <div className="button-container">
        {isGameOver && (
          <button className="new-game" onClick={startNewGame}>
            New game
          </button>
        )}
      </div>
      <div className="game-container">
        <h3 className="win-counter">Wins: {numberOfWins}</h3>
      </div>
    </>
  );
}
