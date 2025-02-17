import { clsx } from "clsx";
import { getFarewellText } from "../utils";
import { languages } from "../languages";

export default function WinsState({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  wrongGuessArray,
}) {
  const gameStatus = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className="farewell">
          {getFarewellText(languages[wrongGuessArray - 1].name)}
        </p>
      );
    }
    if (isGameWon) {
      return (
        <>
          <h2>You win 🎉</h2>
          <p>Well done</p>
        </>
      );
    }
    if (isGameLost) {
      return (
        <>
          <h2>You lose</h2>
          <p>The vodka's chilling victory is complete 😔</p>
        </>
      );
    }
  }

  return (
    <>
      <section className={gameStatus}>{renderGameStatus()}</section>
    </>
  );
}
