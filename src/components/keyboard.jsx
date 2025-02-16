import React from "react";

export default function Keyboard() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const [currentAlphabets, setCurrentAlphabets] = React.useState(alphabets);
  const letterElements = currentAlphabets
    .split("")
    .map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>);
  return (
    <>
      <section>{letterElements}</section>
    </>
  );
}
