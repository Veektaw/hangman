import ReactConfetti from "react-confetti";
import iconImage from "../assets/icon.png";

export default function Header({ numberOfWins }) {
  return (
    <>
      <header className="header">
        {numberOfWins === 5 && <ReactConfetti />}
        <h1>
          Pour Decisions
          <img className="icon" src={iconImage} alt="Pour decisions logo" />
        </h1>
        <p>
          Guess the drink within 8 sips or the party's over! Keep the good
          beverages safe from the villainous vodka.
          <br />
          <span>(Win five in a row for confetti drop)</span>
        </p>
      </header>
    </>
  );
}
