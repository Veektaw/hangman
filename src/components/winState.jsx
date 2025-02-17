import { clsx } from "clsx";

export default function WinsState({ isGameWon, isGameLost, isGameOver }) {
  const gameStatus = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });

  return (
    <>
      <section className={gameStatus}>
        {isGameOver ? (
          isGameWon ? (
            <>
              <h2>You win 🎉</h2>
              <p>Well done</p>
            </>
          ) : (
            <>
              <h2>You lose</h2>
              <p>The vodka's chilling victory is complete 😔</p>
            </>
          )
        ) : null}
      </section>
    </>
  );
}
